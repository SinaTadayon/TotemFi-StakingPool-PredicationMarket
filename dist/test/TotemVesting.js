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
var ethers_1 = require("ethers");
var mock_contract_1 = require("@ethereum-waffle/mock-contract");
var ethereum_waffle_1 = require("ethereum-waffle");
var TotemVesting__factory_1 = require("../src/types/factories/TotemVesting__factory");
var _a = require("./utils"), advanceBlockWithTime = _a.advanceBlockWithTime, takeSnapshot = _a.takeSnapshot, revertProvider = _a.revertProvider;
chai_1.use(ethereum_waffle_1.solidity);
describe("TotemVesting", function () { return __awaiter(void 0, void 0, void 0, function () {
    var signer, totemVesting, mockTotem, MONTH_INTERVAL, deployTotemVesting;
    return __generator(this, function (_a) {
        MONTH_INTERVAL = 60 * 60 * 24 * 30;
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
                        return [4 /*yield*/, deployTotemVesting()];
                    case 4:
                        totemVesting = _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        deployTotemVesting = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var totemVestingFactory, totemVesting;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        totemVestingFactory = new TotemVesting__factory_1.TotemVesting__factory(_signer || signer);
                        return [4 /*yield*/, totemVestingFactory.deploy(mockTotem.address, 1500, MONTH_INTERVAL, 10, 3)];
                    case 1:
                        totemVesting = _a.sent();
                        return [2 /*return*/, totemVesting];
                }
            });
        }); };
        it("initialize contract correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
            var totemVestingFactory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        totemVestingFactory = new TotemVesting__factory_1.TotemVesting__factory(signer);
                        return [4 /*yield*/, chai_1.expect(totemVestingFactory.deploy(mockTotem.address, 0, MONTH_INTERVAL, 10, 3), "totalAmount validation").to.be.revertedWith("")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, chai_1.expect(totemVestingFactory.deploy(mockTotem.address, 1000, 0, 10, 3), "withdrawInterval validation").to.be.revertedWith("")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, chai_1.expect(totemVestingFactory.deploy(mockTotem.address, 1000, MONTH_INTERVAL, 0, 3), "releasePeriods validation").to.be.revertedWith("")];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("add recipient validation", function () { return __awaiter(void 0, void 0, void 0, function () {
            var snapshotId, _a, walletA, walletB, walletC;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, takeSnapshot(signer.provider)];
                    case 1:
                        snapshotId = _b.sent();
                        _a = new ethereum_waffle_1.MockProvider().getWallets(), walletA = _a[0], walletB = _a[1], walletC = _a[2];
                        return [4 /*yield*/, chai_1.expect(totemVesting.addRecipient(walletA.address, 0), "addRecipient validation: no zero amount").to.be.revertedWith("")];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, chai_1.expect(totemVesting.addRecipient(walletA.address, 1501), "addRecipient validation: can't higher than total amount").to.be.revertedWith("")];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, totemVesting.addRecipient(walletA.address, 1000)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, totemVesting.addRecipient(walletB.address, 500)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, chai_1.expect(totemVesting.addRecipient(walletC.address, 1), "addRecipient validation: no more tokens left").to.be.revertedWith("")];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, totemVesting.setStartTime(ethers_1.BigNumber.from(new Date().getTime()).div(1000).add(200))];
                    case 7:
                        _b.sent();
                        return [4 /*yield*/, advanceBlockWithTime(signer.provider, 200)];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, chai_1.expect(totemVesting.addRecipient(walletA.address, 1000), "addRecipient validation: can't set after vesting starts").to.be.revertedWith("")];
                    case 9:
                        _b.sent();
                        return [4 /*yield*/, revertProvider(signer.provider, snapshotId)];
                    case 10:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("set startTime validation", function () { return __awaiter(void 0, void 0, void 0, function () {
            var snapshotId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, takeSnapshot(signer.provider)];
                    case 1:
                        snapshotId = _a.sent();
                        return [4 /*yield*/, chai_1.expect(totemVesting.setStartTime(ethers_1.BigNumber.from(new Date().getTime()).div(1000).sub(100)), "set startTime validation: can't set previous time").to.be.revertedWith("")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, totemVesting.setStartTime(ethers_1.BigNumber.from(new Date().getTime()).div(1000).add(200))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, advanceBlockWithTime(signer.provider, 200)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, chai_1.expect(totemVesting.setStartTime(ethers_1.BigNumber.from(new Date().getTime()).div(1000).add(100)), "set startTime validation: can't set after vesting starts").to.be.revertedWith("")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, revertProvider(signer.provider, snapshotId)];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("calculate vested/withdrawable correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
            var signerAddress, snapshotId, _a, _b, _c, _d, _e, _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, signer.getAddress()];
                    case 1:
                        signerAddress = _h.sent();
                        return [4 /*yield*/, takeSnapshot(signer.provider)];
                    case 2:
                        snapshotId = _h.sent();
                        return [4 /*yield*/, totemVesting.addRecipient(signerAddress, 1000)];
                    case 3:
                        _h.sent();
                        _a = chai_1.expect;
                        return [4 /*yield*/, totemVesting.vested(signerAddress)];
                    case 4:
                        _a.apply(void 0, [_h.sent()]).to.equal(0);
                        return [4 /*yield*/, totemVesting.setStartTime(ethers_1.BigNumber.from(new Date().getTime()).div(1000).add(200))];
                    case 5:
                        _h.sent();
                        _b = chai_1.expect;
                        return [4 /*yield*/, totemVesting.vested(signerAddress)];
                    case 6:
                        _b.apply(void 0, [_h.sent()]).to.equal(0);
                        return [4 /*yield*/, advanceBlockWithTime(signer.provider, 200)];
                    case 7:
                        _h.sent();
                        _c = chai_1.expect;
                        return [4 /*yield*/, totemVesting.vested(signerAddress)];
                    case 8:
                        _c.apply(void 0, [_h.sent()]).to.equal(0);
                        return [4 /*yield*/, advanceBlockWithTime(signer.provider, MONTH_INTERVAL * 3)];
                    case 9:
                        _h.sent();
                        _d = chai_1.expect;
                        return [4 /*yield*/, totemVesting.vested(signerAddress)];
                    case 10:
                        _d.apply(void 0, [_h.sent()]).to.equal(100);
                        return [4 /*yield*/, advanceBlockWithTime(signer.provider, MONTH_INTERVAL)];
                    case 11:
                        _h.sent();
                        _e = chai_1.expect;
                        return [4 /*yield*/, totemVesting.vested(signerAddress)];
                    case 12:
                        _e.apply(void 0, [_h.sent()]).to.equal(200);
                        return [4 /*yield*/, mockTotem.mock.transfer.returns(true)];
                    case 13:
                        _h.sent();
                        return [4 /*yield*/, totemVesting.withdraw()];
                    case 14:
                        _h.sent();
                        _f = chai_1.expect;
                        return [4 /*yield*/, totemVesting.vested(signerAddress)];
                    case 15:
                        _f.apply(void 0, [_h.sent()]).to.equal(200);
                        _g = chai_1.expect;
                        return [4 /*yield*/, totemVesting.withdrawable(signerAddress)];
                    case 16:
                        _g.apply(void 0, [_h.sent()]).to.equal(0);
                        return [4 /*yield*/, revertProvider(signer.provider, snapshotId)];
                    case 17:
                        _h.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=TotemVesting.js.map