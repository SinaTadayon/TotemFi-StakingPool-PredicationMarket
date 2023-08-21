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
var ethereum_waffle_1 = require("ethereum-waffle");
var TotemToken__factory_1 = require("../src/types/factories/TotemToken__factory");
var TotemTokenManager__factory_1 = require("../src/types/factories/TotemTokenManager__factory");
chai_1.use(ethereum_waffle_1.solidity);
describe("TotemTokenManager", function () { return __awaiter(void 0, void 0, void 0, function () {
    var signer, totemToken, totemManager, deployTotemToken, deployTotemManager;
    return __generator(this, function (_a) {
        beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;
                        return [4 /*yield*/, hardhat_1.ethers.getSigners()];
                    case 1:
                        signer = (_a.sent())[0];
                        return [4 /*yield*/, deployTotemToken()];
                    case 2:
                        totemToken = _a.sent();
                        return [4 /*yield*/, deployTotemManager()];
                    case 3:
                        totemManager = _a.sent();
                        return [4 /*yield*/, totemToken.transferOwnership(totemManager.address)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        deployTotemToken = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var totemTokenFactory, totemToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        totemTokenFactory = new TotemToken__factory_1.TotemToken__factory(_signer || signer);
                        return [4 /*yield*/, totemTokenFactory.deploy()];
                    case 1:
                        totemToken = _a.sent();
                        return [2 /*return*/, totemToken];
                }
            });
        }); };
        deployTotemManager = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var totemManagerFactory, totemManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        totemManagerFactory = new TotemTokenManager__factory_1.TotemTokenManager__factory(_signer || signer);
                        return [4 /*yield*/, totemManagerFactory.deploy(totemToken.address)];
                    case 1:
                        totemManager = _a.sent();
                        return [2 /*return*/, totemManager];
                }
            });
        }); };
        it("initialize contract correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _a = chai_1.expect;
                        return [4 /*yield*/, totemToken.name()];
                    case 1:
                        _a.apply(void 0, [_g.sent()]).to.equal("Totem Token");
                        _b = chai_1.expect;
                        return [4 /*yield*/, totemToken.symbol()];
                    case 2:
                        _b.apply(void 0, [_g.sent()]).to.equal("TOTM");
                        _c = chai_1.expect;
                        return [4 /*yield*/, totemToken.decimals()];
                    case 3:
                        _c.apply(void 0, [_g.sent()]).to.equal(18);
                        _e = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(totemToken.address)];
                    case 4:
                        _f = (_d = _e.apply(void 0, [_g.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.INITIAL_SUPPLY()];
                    case 5:
                        _f.apply(_d, [_g.sent()]);
                        return [2 /*return*/];
                }
            });
        }); });
        it("distribute tokens correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, communityWallet, stakingWallet, advisorsWallet, seedWallet, teamWallet, publicWallet, strategicWallet, liquidityWallet, privateWallet, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
            return __generator(this, function (_4) {
                switch (_4.label) {
                    case 0:
                        _a = new ethereum_waffle_1.MockProvider().getWallets(), communityWallet = _a[0], stakingWallet = _a[1], advisorsWallet = _a[2], seedWallet = _a[3], teamWallet = _a[4], publicWallet = _a[5], strategicWallet = _a[6], liquidityWallet = _a[7], privateWallet = _a[8];
                        return [4 /*yield*/, totemManager.setDistributionTeamsAddresses(communityWallet.address, stakingWallet.address, liquidityWallet.address, publicWallet.address, advisorsWallet.address, seedWallet.address, privateWallet.address, teamWallet.address, strategicWallet.address)];
                    case 1:
                        _4.sent();
                        return [4 /*yield*/, totemManager.distributeTokens()];
                    case 2:
                        _4.sent();
                        _c = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(communityWallet.address)];
                    case 3:
                        _d = (_b = _c.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.COMMUNITY_DEVELOPMENT()];
                    case 4:
                        _d.apply(_b, [_4.sent()]);
                        _f = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(stakingWallet.address)];
                    case 5:
                        _g = (_e = _f.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.STAKING_REWARDS()];
                    case 6:
                        _g.apply(_e, [_4.sent()]);
                        _j = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(liquidityWallet.address)];
                    case 7:
                        _k = (_h = _j.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.LIQUIDITY_POOL()];
                    case 8:
                        _k.apply(_h, [_4.sent()]);
                        _m = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(publicWallet.address)];
                    case 9:
                        _o = (_l = _m.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.PUBLIC_SALE()];
                    case 10:
                        _o.apply(_l, [_4.sent()]);
                        _q = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(advisorsWallet.address)];
                    case 11:
                        _r = (_p = _q.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.ADVISORS()];
                    case 12:
                        _r.apply(_p, [_4.sent()]);
                        _t = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(seedWallet.address)];
                    case 13:
                        _u = (_s = _t.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.SEED_INVESTMENT()];
                    case 14:
                        _u.apply(_s, [_4.sent()]);
                        _w = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(privateWallet.address)];
                    case 15:
                        _x = (_v = _w.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.PRIVATE_SALE()];
                    case 16:
                        _x.apply(_v, [_4.sent()]);
                        _z = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(teamWallet.address)];
                    case 17:
                        _0 = (_y = _z.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.TEAM_ALLOCATION()];
                    case 18:
                        _0.apply(_y, [_4.sent()]);
                        _2 = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(strategicWallet.address)];
                    case 19:
                        _3 = (_1 = _2.apply(void 0, [_4.sent()]).to).equal;
                        return [4 /*yield*/, totemToken.STRATEGIC_ROUND()];
                    case 20:
                        _3.apply(_1, [_4.sent()]);
                        return [4 /*yield*/, chai_1.expect(totemManager.distributeTokens(), "should distribute only once").to.be.revertedWith("")];
                    case 21:
                        _4.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("taxation applies correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, walletA, taxationWallet, otherWallet, signerAddress, initialBalance, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            return __generator(this, function (_r) {
                switch (_r.label) {
                    case 0: return [4 /*yield*/, chai_1.expect(totemManager.setTaxRate(10000)).to.be.revertedWith("")];
                    case 1:
                        _r.sent();
                        _a = new ethereum_waffle_1.MockProvider().getWallets(), walletA = _a[0], taxationWallet = _a[1], otherWallet = _a[2];
                        return [4 /*yield*/, signer.getAddress()
                            // Get some tokens to signer
                        ];
                    case 2:
                        signerAddress = _r.sent();
                        // Get some tokens to signer
                        return [4 /*yield*/, totemManager.setDistributionTeamsAddresses(signerAddress, otherWallet.address, otherWallet.address, otherWallet.address, otherWallet.address, otherWallet.address, otherWallet.address, otherWallet.address, otherWallet.address)];
                    case 3:
                        // Get some tokens to signer
                        _r.sent();
                        return [4 /*yield*/, totemManager.distributeTokens()];
                    case 4:
                        _r.sent();
                        return [4 /*yield*/, totemToken.balanceOf(signerAddress)
                            // Signer(owner) should be set as tax exempt by default
                        ];
                    case 5:
                        initialBalance = _r.sent();
                        // Signer(owner) should be set as tax exempt by default
                        return [4 /*yield*/, totemToken.transfer(walletA.address, 1000)];
                    case 6:
                        // Signer(owner) should be set as tax exempt by default
                        _r.sent();
                        _b = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(walletA.address)];
                    case 7:
                        _b.apply(void 0, [_r.sent()]).to.equal(1000);
                        _c = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(signerAddress)];
                    case 8:
                        _c.apply(void 0, [_r.sent()]).to.equal(initialBalance.sub(1000));
                        // Remove signer from tax exempt, tax will be sent to the signer(owner) by default
                        return [4 /*yield*/, totemManager.setTaxExemptStatus(signerAddress, false)];
                    case 9:
                        // Remove signer from tax exempt, tax will be sent to the signer(owner) by default
                        _r.sent();
                        return [4 /*yield*/, totemToken.transfer(walletA.address, 1000)];
                    case 10:
                        _r.sent();
                        _d = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(walletA.address)];
                    case 11:
                        _d.apply(void 0, [_r.sent()]).to.equal(1970);
                        _e = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(signerAddress)];
                    case 12:
                        _e.apply(void 0, [_r.sent()]).to.equal(initialBalance.sub(2000).add(30));
                        // Set custmo taxation wallet
                        return [4 /*yield*/, totemManager.setTaxationWallet(taxationWallet.address)];
                    case 13:
                        // Set custmo taxation wallet
                        _r.sent();
                        return [4 /*yield*/, totemToken.transfer(walletA.address, 1000)];
                    case 14:
                        _r.sent();
                        _f = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(walletA.address)];
                    case 15:
                        _f.apply(void 0, [_r.sent()]).to.equal(2940);
                        _g = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(taxationWallet.address)];
                    case 16:
                        _g.apply(void 0, [_r.sent()]).to.equal(30);
                        // Set custom tax rate
                        return [4 /*yield*/, totemManager.setTaxRate(500)];
                    case 17:
                        // Set custom tax rate
                        _r.sent();
                        return [4 /*yield*/, totemToken.transfer(walletA.address, 1000)];
                    case 18:
                        _r.sent();
                        _h = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(walletA.address)];
                    case 19:
                        _h.apply(void 0, [_r.sent()]).to.equal(3890);
                        _j = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(taxationWallet.address)];
                    case 20:
                        _j.apply(void 0, [_r.sent()]).to.equal(80);
                        // Again turn on tax exempt for signer
                        return [4 /*yield*/, totemManager.setTaxExemptStatus(signerAddress, true)];
                    case 21:
                        // Again turn on tax exempt for signer
                        _r.sent();
                        return [4 /*yield*/, totemToken.transfer(walletA.address, 1000)];
                    case 22:
                        _r.sent();
                        _k = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(walletA.address)];
                    case 23:
                        _k.apply(void 0, [_r.sent()]).to.equal(4890);
                        _l = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(taxationWallet.address)];
                    case 24:
                        _l.apply(void 0, [_r.sent()]).to.equal(80);
                        // Taxation for transferFrom
                        return [4 /*yield*/, totemToken.approve(signerAddress, 10000)];
                    case 25:
                        // Taxation for transferFrom
                        _r.sent();
                        return [4 /*yield*/, totemToken.transferFrom(signerAddress, walletA.address, 1000)];
                    case 26:
                        _r.sent();
                        _m = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(walletA.address)];
                    case 27:
                        _m.apply(void 0, [_r.sent()]).to.equal(5890);
                        _o = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(taxationWallet.address)];
                    case 28:
                        _o.apply(void 0, [_r.sent()]).to.equal(80);
                        return [4 /*yield*/, totemManager.setTaxExemptStatus(signerAddress, false)];
                    case 29:
                        _r.sent();
                        return [4 /*yield*/, totemToken.transferFrom(signerAddress, walletA.address, 1000)];
                    case 30:
                        _r.sent();
                        _p = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(walletA.address)];
                    case 31:
                        _p.apply(void 0, [_r.sent()]).to.equal(6840);
                        _q = chai_1.expect;
                        return [4 /*yield*/, totemToken.balanceOf(taxationWallet.address)];
                    case 32:
                        _q.apply(void 0, [_r.sent()]).to.equal(130);
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=TotemTokenManager.js.map