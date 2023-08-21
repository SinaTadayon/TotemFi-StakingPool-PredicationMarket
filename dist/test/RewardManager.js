"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var hardhat_1 = require("hardhat");
var mock_contract_1 = require("@ethereum-waffle/mock-contract");
var ethereum_waffle_1 = require("ethereum-waffle");
var RewardManager__factory_1 = require("../src/types/factories/RewardManager__factory");
chai_1.use(ethereum_waffle_1.solidity);
describe("RewardManager", function () { return __awaiter(void 0, void 0, void 0, function () {
    var signer, rewardManager, mockTotem, deployRewardManager;
    return __generator(this, function (_a) {
        deployRewardManager = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var rewardFactory, rewardManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rewardFactory = new RewardManager__factory_1.RewardManager__factory(_signer || signer);
                        return [4 /*yield*/, rewardFactory.deploy(mockTotem.address)];
                    case 1:
                        rewardManager = _a.sent();
                        return [2 /*return*/, rewardManager];
                }
            });
        }); };
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
            var TotemToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;
                        return [4 /*yield*/, hardhat_1.ethers.getSigners()];
                    case 1:
                        signer = (_a.sent())[0];
                        return [4 /*yield*/, hardhat_1.deployments.getArtifact("TotemToken")];
                    case 2:
                        TotemToken = _a.sent();
                        return [4 /*yield*/, mock_contract_1.deployMockContract(signer, TotemToken.abi)];
                    case 3:
                        mockTotem = _a.sent();
                        return [4 /*yield*/, deployRewardManager()];
                    case 4:
                        rewardManager = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("addPool function can only be called by operator", function () { return __awaiter(void 0, void 0, void 0, function () {
            var wallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wallet = new ethereum_waffle_1.MockProvider().getWallets()[0];
                        return [4 /*yield*/, mockTotem.mock.balanceOf.returns(50000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, mockTotem.mock.transfer.returns(true)
                            // Owner is the operator by default
                        ];
                    case 2:
                        _a.sent();
                        // Owner is the operator by default
                        return [4 /*yield*/, rewardManager.addPool(wallet.address)];
                    case 3:
                        // Owner is the operator by default
                        _a.sent();
                        return [4 /*yield*/, rewardManager.renounceOperator()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, chai_1.expect(rewardManager.addPool(wallet.address), "function can only be called by operator").to.be.revertedWith("OperatorRole: caller does not have the Operator role")];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("rewardUser function can only be called by rewarder", function () { return __awaiter(void 0, void 0, void 0, function () {
            var wallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wallet = new ethereum_waffle_1.MockProvider().getWallets()[0];
                        return [4 /*yield*/, mockTotem.mock.balanceOf.returns(50000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, mockTotem.mock.transfer.returns(true)
                            // Owner is the rewarder by default
                        ];
                    case 2:
                        _a.sent();
                        // Owner is the rewarder by default
                        return [4 /*yield*/, rewardManager.rewardUser(wallet.address, 100)];
                    case 3:
                        // Owner is the rewarder by default
                        _a.sent();
                        return [4 /*yield*/, rewardManager.renounceRewarder()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, chai_1.expect(rewardManager.rewardUser(wallet.address, 100), "function can only be called by rewarder").to.be.revertedWith("RewarderRole: caller does not have the Rewarder role")];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=RewardManager.js.map