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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var hardhat_1 = require("hardhat");
var ethers_1 = require("ethers");
var mock_contract_1 = require("@ethereum-waffle/mock-contract");
var ethereum_waffle_1 = require("ethereum-waffle");
var UniswapV2Router02_json_1 = __importDefault(require("@uniswap/v2-periphery/build/UniswapV2Router02.json"));
var WrappedERC20Token__factory_1 = require("../src/types/factories/WrappedERC20Token__factory");
var StakingPoolProxy__factory_1 = require("../src/types/factories/StakingPoolProxy__factory");
var StakingPoolImplementation__factory_1 = require("../src/types/factories/StakingPoolImplementation__factory");
var StakingPoolImplementationForTest__factory_1 = require("../src/types/factories/StakingPoolImplementationForTest__factory");
var CalculateRewardLib__factory_1 = require("../src/types/factories/CalculateRewardLib__factory");
var ClaimRewardLib__factory_1 = require("../src/types/factories/ClaimRewardLib__factory");
var IndexedClaimRewardLib__factory_1 = require("../src/types/factories/IndexedClaimRewardLib__factory");
var StakingPoolFactory__factory_1 = require("../src/types/factories/StakingPoolFactory__factory");
var TotemToken__factory_1 = require("../src/types/factories/TotemToken__factory");
var RewardManager__factory_1 = require("../src/types/factories/RewardManager__factory");
var WrappedTokenDistributorUpgradeable__factory_1 = require("../src/types/factories/WrappedTokenDistributorUpgradeable__factory");
var _a = require("./utils"), advanceBlockWithTime = _a.advanceBlockWithTime, takeSnapshot = _a.takeSnapshot, revertProvider = _a.revertProvider;
chai_1.use(ethereum_waffle_1.solidity);
describe("StakingPoolImplementation", function () { return __awaiter(void 0, void 0, void 0, function () {
    var snapshotId, signer1, signer2, signer3, signer4, superAdmin, signer1Address, signer2Address, signer3Address, signer4Address, superAdminAddress, totemToken, rewardManager, wrappedTokenDistributor, mockUniswapRouter, mockAggregatorContract, mockAggregatorContractForPrize, usdContract, bep20Token, stakingPoolImplementation, stakingPoolImplementationForTest, stakingPoolProxy, stakingPoolFactoryInstance, stakingPool, zeroUSDVariables, variables, ranks, percentages, nilAddress, zeroAddresses, zeroIndexes, fiftyThousandBTCPrice, fiftyFiveThousandBTCPrice, sixtyThousandBTCPrice, oneHundred, oneHundredTaxed, oneThousand, oneThousandTaxed, threeThousand, threeThousandTaxed, fiveThousand, fiveThousandTaxed, tenThousand, tenThousandTaxed, hundredThousand, hundredThousandTaxed, deployRewardManager, deployTotemToken, deploybep20Token, deployFiatTokenV2, deployWrappedTokenDistributor, deployCalculateRewardLib, deployClaimRewardLib, deployIndexedClaimRewardLib, getStakingPoolImplementationFactory, getStakingPoolImplementationV2Factory, deployStakingPoolImplementation, deployStakingPoolFactory, deployStakingPoolProxy, deployStakingPoolProxyWithFactory, deployStakingPoolProxyWithNewVars;
    return __generator(this, function (_a) {
        zeroUSDVariables = [
            0,
            1296000,
            432000,
            ethers_1.BigNumber.from(10).pow(18).mul(125000),
            6000,
            ethers_1.BigNumber.from(10).pow(18).mul(4500),
            0,
            2000,
            175,
            300,
            ethers_1.BigNumber.from(10).pow(18).mul(250),
            8
        ];
        variables = [
            0,
            1296000,
            432000,
            ethers_1.BigNumber.from(10).pow(18).mul(125000),
            6000,
            ethers_1.BigNumber.from(10).pow(18).mul(4500),
            ethers_1.BigNumber.from(10).pow(18).mul(1000),
            2000,
            175,
            300,
            ethers_1.BigNumber.from(10).pow(18).mul(250),
            8
        ];
        ranks = [1, 2, 3, 10, 25, 0, 0, 0];
        percentages = [3750, 2000, 1000, 250, 100, 0, 0, 0];
        nilAddress = "0x0000000000000000000000000000000000000000";
        zeroAddresses = [
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
            nilAddress,
        ];
        zeroIndexes = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0,
        ];
        fiftyThousandBTCPrice = ethers_1.BigNumber.from(10).pow(8).mul(50000);
        fiftyFiveThousandBTCPrice = ethers_1.BigNumber.from(10).pow(8).mul(55000);
        sixtyThousandBTCPrice = ethers_1.BigNumber.from(10).pow(8).mul(60000);
        oneHundred = ethers_1.BigNumber.from(10).pow(18).mul(100);
        oneHundredTaxed = ethers_1.BigNumber.from(10).pow(18).mul(97);
        oneThousand = ethers_1.BigNumber.from(10).pow(18).mul(1000);
        oneThousandTaxed = ethers_1.BigNumber.from(10).pow(18).mul(970);
        threeThousand = ethers_1.BigNumber.from(10).pow(18).mul(3000);
        threeThousandTaxed = ethers_1.BigNumber.from(10).pow(18).mul(2900);
        fiveThousand = ethers_1.BigNumber.from(10).pow(18).mul(5000);
        fiveThousandTaxed = ethers_1.BigNumber.from(10).pow(18).mul(4850);
        tenThousand = ethers_1.BigNumber.from(10).pow(18).mul(10000);
        tenThousandTaxed = ethers_1.BigNumber.from(10).pow(18).mul(9700);
        hundredThousand = ethers_1.BigNumber.from(10).pow(18).mul(100000);
        hundredThousandTaxed = ethers_1.BigNumber.from(10).pow(18).mul(97000);
        deployRewardManager = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var rewardManagerFactory, totemTokenInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rewardManagerFactory = new RewardManager__factory_1.RewardManager__factory(_signer || signer1);
                        return [4 /*yield*/, rewardManagerFactory.deploy(totemToken.address)];
                    case 1:
                        totemTokenInstance = _a.sent();
                        return [2 /*return*/, totemTokenInstance];
                }
            });
        }); };
        deployTotemToken = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var totemTokenFactory, totemToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        totemTokenFactory = new TotemToken__factory_1.TotemToken__factory(_signer || signer1);
                        return [4 /*yield*/, totemTokenFactory.deploy()];
                    case 1:
                        totemToken = _a.sent();
                        return [2 /*return*/, totemToken];
                }
            });
        }); };
        deploybep20Token = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var bep20TokenFactory, bep20Token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bep20TokenFactory = new WrappedERC20Token__factory_1.WrappedERC20Token__factory(_signer || signer1);
                        return [4 /*yield*/, bep20TokenFactory.deploy("Wrapped Token", "WTKN")];
                    case 1:
                        bep20Token = _a.sent();
                        return [2 /*return*/, bep20Token];
                }
            });
        }); };
        deployFiatTokenV2 = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var fiatTokenV2Factory, fiatTokenV2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fiatTokenV2Factory = new WrappedERC20Token__factory_1.WrappedERC20Token__factory(_signer || signer1);
                        return [4 /*yield*/, fiatTokenV2Factory.deploy("Binance USD Token", "BUSD")];
                    case 1:
                        fiatTokenV2 = _a.sent();
                        return [2 /*return*/, fiatTokenV2];
                }
            });
        }); };
        deployWrappedTokenDistributor = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var WrappedTokenDistributorFactory, WrappedTokenDistributor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        WrappedTokenDistributorFactory = new WrappedTokenDistributorUpgradeable__factory_1.WrappedTokenDistributorUpgradeable__factory(_signer || signer1);
                        return [4 /*yield*/, WrappedTokenDistributorFactory.deploy()];
                    case 1:
                        WrappedTokenDistributor = _a.sent();
                        WrappedTokenDistributor.__WrappedTokenDistributor_initialize(mockUniswapRouter.address, usdContract.address, bep20Token.address);
                        return [2 /*return*/, WrappedTokenDistributor];
                }
            });
        }); };
        deployCalculateRewardLib = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var CalculateRewardLibFactory, CalculateRewardLib;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        CalculateRewardLibFactory = new CalculateRewardLib__factory_1.CalculateRewardLib__factory(_signer || signer1);
                        return [4 /*yield*/, CalculateRewardLibFactory.deploy()];
                    case 1:
                        CalculateRewardLib = _a.sent();
                        return [2 /*return*/, CalculateRewardLib];
                }
            });
        }); };
        deployClaimRewardLib = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var ClaimRewardLibFactory, ClaimRewardLib;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ClaimRewardLibFactory = new ClaimRewardLib__factory_1.ClaimRewardLib__factory(_signer || signer1);
                        return [4 /*yield*/, ClaimRewardLibFactory.deploy()];
                    case 1:
                        ClaimRewardLib = _a.sent();
                        return [2 /*return*/, ClaimRewardLib];
                }
            });
        }); };
        deployIndexedClaimRewardLib = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var IndexedClaimRewardLibFactory, IndexedClaimRewardLib;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        IndexedClaimRewardLibFactory = new IndexedClaimRewardLib__factory_1.IndexedClaimRewardLib__factory(_signer || signer1);
                        return [4 /*yield*/, IndexedClaimRewardLibFactory.deploy()];
                    case 1:
                        IndexedClaimRewardLib = _a.sent();
                        return [2 /*return*/, IndexedClaimRewardLib];
                }
            });
        }); };
        getStakingPoolImplementationFactory = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var CalculateRewardLib, ClaimRewardLib, IndexedClaimRewardLib, linkLibraryAddresses, StakingPoolImplementationFactory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, deployCalculateRewardLib()];
                    case 1:
                        CalculateRewardLib = _a.sent();
                        return [4 /*yield*/, deployClaimRewardLib()];
                    case 2:
                        ClaimRewardLib = _a.sent();
                        return [4 /*yield*/, deployIndexedClaimRewardLib()];
                    case 3:
                        IndexedClaimRewardLib = _a.sent();
                        linkLibraryAddresses = {
                            __$60b6e19b11029f04c25a43d0435d86b2be$__: CalculateRewardLib.address,
                            __$171d2da81d2a08eb52330533595f0c4998$__: ClaimRewardLib.address,
                            __$7fd944d8f8efff7c575121b9e933203c2c$__: IndexedClaimRewardLib.address,
                        };
                        StakingPoolImplementationFactory = new StakingPoolImplementation__factory_1.StakingPoolImplementation__factory(linkLibraryAddresses, _signer || signer1);
                        return [2 /*return*/, StakingPoolImplementationFactory];
                }
            });
        }); };
        getStakingPoolImplementationV2Factory = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var CalculateRewardLib, ClaimRewardLib, IndexedClaimRewardLib, linkLibraryAddresses, StakingPoolImplementationV2Factory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, deployCalculateRewardLib()];
                    case 1:
                        CalculateRewardLib = _a.sent();
                        return [4 /*yield*/, deployClaimRewardLib()];
                    case 2:
                        ClaimRewardLib = _a.sent();
                        return [4 /*yield*/, deployIndexedClaimRewardLib()];
                    case 3:
                        IndexedClaimRewardLib = _a.sent();
                        linkLibraryAddresses = {
                            __$60b6e19b11029f04c25a43d0435d86b2be$__: CalculateRewardLib.address,
                            __$171d2da81d2a08eb52330533595f0c4998$__: ClaimRewardLib.address,
                            __$7fd944d8f8efff7c575121b9e933203c2c$__: IndexedClaimRewardLib.address,
                        };
                        StakingPoolImplementationV2Factory = new StakingPoolImplementationForTest__factory_1.StakingPoolImplementationForTest__factory(linkLibraryAddresses, _signer || signer1);
                        return [2 /*return*/, StakingPoolImplementationV2Factory];
                }
            });
        }); };
        deployStakingPoolImplementation = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var StakingPoolImplementationFactory, stakingPoolImplementationInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getStakingPoolImplementationFactory()];
                    case 1:
                        StakingPoolImplementationFactory = _a.sent();
                        return [4 /*yield*/, StakingPoolImplementationFactory.deploy()];
                    case 2:
                        stakingPoolImplementationInstance = _a.sent();
                        return [2 /*return*/, stakingPoolImplementationInstance];
                }
            });
        }); };
        deployStakingPoolFactory = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var stakingPoolFactoryFactory, stakingPoolFactoryInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stakingPoolFactoryFactory = new StakingPoolFactory__factory_1.StakingPoolFactory__factory(_signer || signer1);
                        return [4 /*yield*/, stakingPoolFactoryFactory.deploy(totemToken.address, rewardManager.address, mockUniswapRouter.address, usdContract.address, stakingPoolImplementation.address, superAdminAddress)];
                    case 1:
                        stakingPoolFactoryInstance = _a.sent();
                        return [2 /*return*/, stakingPoolFactoryInstance];
                }
            });
        }); };
        deployStakingPoolProxy = function (_signer) { return __awaiter(void 0, void 0, void 0, function () {
            var stakingPoolProxyFactory, launchDate, stakingPoolProxy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stakingPoolProxyFactory = new StakingPoolProxy__factory_1.StakingPoolProxy__factory(_signer || signer1);
                        launchDate = Math.round(new Date().getTime() / 1000) + 5000;
                        variables[0] = launchDate;
                        return [4 /*yield*/, stakingPoolProxyFactory.deploy()];
                    case 1:
                        stakingPoolProxy = _a.sent();
                        return [4 /*yield*/, stakingPoolProxy.upgradeTo(stakingPoolImplementation.address)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, mockAggregatorContract.mock.decimals.returns(8)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, stakingPoolProxy.initialize("ETH", "Wolf", totemToken.address, rewardManager.address, signer1Address, [
                                mockUniswapRouter.address,
                                usdContract.address,
                                mockAggregatorContract.address,
                                bep20Token.address,
                            ], variables, ranks, percentages, true)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, stakingPoolProxy];
                }
            });
        }); };
        deployStakingPoolProxyWithFactory = function () { return __awaiter(void 0, void 0, void 0, function () {
            var stakingPool, launchDate, stakingPoolProxy, stakingPoolProxyAdr, stakingPoolProxyFactory, returnValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        launchDate = Math.round(new Date().getTime() / 1000) + 5000;
                        variables[0] = launchDate;
                        return [4 /*yield*/, mockAggregatorContract.mock.decimals.returns(8)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, stakingPoolFactoryInstance.createPoolProxy(mockAggregatorContract.address, bep20Token.address, "ETH", "Wolf", variables, ranks, percentages, false)];
                    case 2:
                        stakingPoolProxy = _a.sent();
                        return [4 /*yield*/, (stakingPoolProxy).wait()];
                    case 3:
                        stakingPoolProxyAdr = (_a.sent()).logs[0].address;
                        stakingPoolProxyFactory = new StakingPoolProxy__factory_1.StakingPoolProxy__factory(signer1);
                        stakingPool = stakingPoolProxyFactory.attach(stakingPoolProxyAdr);
                        returnValue = [stakingPool, stakingPoolProxyAdr];
                        return [2 /*return*/, returnValue];
                }
            });
        }); };
        deployStakingPoolProxyWithNewVars = function () { return __awaiter(void 0, void 0, void 0, function () {
            var stakingPoolProxyInstance, launchDate, stakingPoolProxy, StakingPoolImplementationFactory, stakingPoolInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stakingPoolProxyInstance = new StakingPoolProxy__factory_1.StakingPoolProxy__factory(signer1);
                        launchDate = Math.round(new Date().getTime() / 1000) + 5000;
                        variables[0] = launchDate;
                        return [4 /*yield*/, stakingPoolProxyInstance.deploy()];
                    case 1:
                        stakingPoolProxy = _a.sent();
                        stakingPoolProxy.initialize("ETH", "Wolf", totemToken.address, rewardManager.address, signer1Address, [
                            mockUniswapRouter.address,
                            usdContract.address,
                            nilAddress,
                            bep20Token.address,
                        ], variables, ranks, percentages, true);
                        return [4 /*yield*/, rewardManager.addPool(stakingPoolProxy.address)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, totemToken.setTaxExemptStatus(stakingPoolProxy.address, true)];
                    case 3:
                        _a.sent();
                        stakingPoolProxy.upgradeTo(stakingPoolImplementation.address);
                        return [4 /*yield*/, getStakingPoolImplementationFactory()];
                    case 4:
                        StakingPoolImplementationFactory = _a.sent();
                        stakingPoolInstance = StakingPoolImplementationFactory.attach(stakingPoolProxy.address);
                        return [2 /*return*/, stakingPoolInstance];
                }
            });
        }); };
        before("deploy contracts", function () { return __awaiter(void 0, void 0, void 0, function () {
            var aggregatorContract, launchDate;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, hardhat_1.ethers.getSigners()];
                    case 1:
                        _a = _b.sent(), signer1 = _a[0], signer2 = _a[1], signer3 = _a[2], signer4 = _a[3], superAdmin = _a[4];
                        return [4 /*yield*/, signer1.getAddress()];
                    case 2:
                        signer1Address = _b.sent();
                        return [4 /*yield*/, signer2.getAddress()];
                    case 3:
                        signer2Address = _b.sent();
                        return [4 /*yield*/, signer3.getAddress()];
                    case 4:
                        signer3Address = _b.sent();
                        return [4 /*yield*/, signer4.getAddress()];
                    case 5:
                        signer4Address = _b.sent();
                        return [4 /*yield*/, superAdmin.getAddress()];
                    case 6:
                        superAdminAddress = _b.sent();
                        return [4 /*yield*/, mock_contract_1.deployMockContract(signer1, UniswapV2Router02_json_1.default.abi)];
                    case 7:
                        mockUniswapRouter = _b.sent();
                        return [4 /*yield*/, hardhat_1.deployments.getArtifact("AggregatorV3Interface")];
                    case 8:
                        aggregatorContract = _b.sent();
                        return [4 /*yield*/, mock_contract_1.deployMockContract(signer1, aggregatorContract.abi)];
                    case 9:
                        mockAggregatorContract = _b.sent();
                        return [4 /*yield*/, mock_contract_1.deployMockContract(signer1, aggregatorContract.abi)];
                    case 10:
                        mockAggregatorContractForPrize = _b.sent();
                        return [4 /*yield*/, deploybep20Token()];
                    case 11:
                        bep20Token = _b.sent();
                        return [4 /*yield*/, deployFiatTokenV2()];
                    case 12:
                        usdContract = _b.sent();
                        return [4 /*yield*/, deployTotemToken()];
                    case 13:
                        totemToken = _b.sent();
                        return [4 /*yield*/, deployRewardManager()];
                    case 14:
                        rewardManager = _b.sent();
                        return [4 /*yield*/, deployWrappedTokenDistributor()];
                    case 15:
                        wrappedTokenDistributor = _b.sent();
                        return [4 /*yield*/, deployStakingPoolImplementation()];
                    case 16:
                        stakingPoolImplementation = _b.sent();
                        return [4 /*yield*/, deployStakingPoolFactory()];
                    case 17:
                        stakingPoolFactoryInstance = _b.sent();
                        return [4 /*yield*/, totemToken.setDistributionTeamsAddresses(signer1Address, rewardManager.address, signer1Address, signer1Address, signer1Address, signer1Address, signer1Address, signer1Address, signer1Address)];
                    case 18:
                        _b.sent();
                        return [4 /*yield*/, totemToken.distributeTokens()];
                    case 19:
                        _b.sent();
                        launchDate = Math.round(new Date().getTime() / 1000) + 5000;
                        variables[0] = launchDate;
                        return [4 /*yield*/, rewardManager.addOperator(stakingPoolFactoryInstance.address)];
                    case 20:
                        _b.sent();
                        return [4 /*yield*/, rewardManager.addRewarder(stakingPoolFactoryInstance.address)];
                    case 21:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        beforeEach("deploy a new staking pool proxy", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, takeSnapshot(signer1.provider)];
                    case 1:
                        snapshotId = _a.sent();
                        return [4 /*yield*/, deployStakingPoolProxy()];
                    case 2:
                        stakingPoolProxy = _a.sent();
                        stakingPool = stakingPoolImplementation.attach(stakingPoolProxy.address);
                        return [4 /*yield*/, rewardManager.addPool(stakingPoolProxy.address)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, totemToken.setTaxExemptStatus(stakingPoolProxy.address, true)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        afterEach(function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, revertProvider(signer1.provider, snapshotId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        describe("StakingPoolFactory: createPoolProxy", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                beforeEach("getting time for launch date", function () {
                    var launchDate = Math.round(new Date().getTime() / 1000) + 5000;
                    variables[0] = launchDate;
                });
                it("only poolCreator accounts can create new pools", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2FactoryInstance;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                signer2FactoryInstance = stakingPoolFactoryInstance.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(signer2FactoryInstance.createPoolProxy(mockAggregatorContract.address, bep20Token.address, "ETH", "Wolf", variables, ranks, percentages, false)).to.be.revertedWith("PoolCreatorRole: caller does not have the PoolCreator role")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("successfully launching a new staking pool proxy", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, chai_1.expect(stakingPoolFactoryInstance.createPoolProxy(mockAggregatorContract.address, bep20Token.address, "ETH", "Wolf", variables, ranks, percentages, false)).to.emit(stakingPoolFactoryInstance, "PoolCreated")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("launching a staking pool proxy with no oracle", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, chai_1.expect(stakingPoolFactoryInstance.createPoolProxy(nilAddress, bep20Token.address, "ETH", "Wolf", variables, ranks, percentages, false)).to.emit(stakingPoolFactoryInstance, "PoolCreated")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                describe("zero usdPrizeAmount", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        before("changing usdPrizeAmount to zero", function () {
                            variables[6] = ethers_1.BigNumber.from(0);
                        });
                        it("launching a TOTM-only prize pool proxy, no wrapped token, no oracle", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, chai_1.expect(stakingPoolFactoryInstance.createPoolProxy(nilAddress, bep20Token.address, "ETH", "Wolf", variables, ranks, percentages, false)).to.emit(stakingPoolFactoryInstance, "PoolCreated")];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        after("changing usdPrizeAmount back to default", function () {
                            variables[6] = ethers_1.BigNumber.from(10).pow(18).mul(1000);
                        });
                        return [2 /*return*/];
                    });
                }); });
                describe("custom oracle decimal", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        before("changing oracle decimal", function () {
                            variables[11] = 6;
                        });
                        it("adjust a custom oracle decimal when oracle is zero", function () { return __awaiter(void 0, void 0, void 0, function () {
                            var stakingPoolInstance, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, deployStakingPoolProxyWithNewVars()];
                                    case 1:
                                        stakingPoolInstance = _b.sent();
                                        _a = chai_1.expect;
                                        return [4 /*yield*/, stakingPoolInstance.oracleDecimals()];
                                    case 2:
                                        _a.apply(void 0, [_b.sent()]).to.equal(6);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        after("changing oracle decimal back to 8", function () {
                            variables[11] = 8;
                        });
                        return [2 /*return*/];
                    });
                }); });
                describe("ranks and percentages check", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var newRanks, newPercentages;
                    return __generator(this, function (_a) {
                        beforeEach("using new ranks and percentages", function () {
                            newRanks = [1, 2, 3, 10, 25, 0, 0, 0];
                            newPercentages = [3750, 2000, 1000, 250, 100, 0, 0, 0];
                        });
                        it("reverts because ranks are not correctly ordered", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        newRanks[1] = 3;
                                        newRanks[2] = 2;
                                        return [4 /*yield*/, chai_1.expect(stakingPoolFactoryInstance.createPoolProxy(mockAggregatorContract.address, bep20Token.address, "ETH", "Wolf", variables, newRanks, newPercentages, false)).to.be.revertedWith("wrong order of ranks")];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        it("reverts because the last rank is not 25", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        newRanks[4] = 26;
                                        return [4 /*yield*/, chai_1.expect(stakingPoolFactoryInstance.createPoolProxy(mockAggregatorContract.address, bep20Token.address, "ETH", "Wolf", variables, newRanks, newPercentages, false)).to.be.revertedWith("last rank must be less than or equal to 25")];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        it("reverts because sum of reward percentage is not equal to 100%", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        newPercentages[4] = 90;
                                        return [4 /*yield*/, chai_1.expect(stakingPoolFactoryInstance.createPoolProxy(mockAggregatorContract.address, bep20Token.address, "ETH", "Wolf", variables, newRanks, newPercentages, false)).to.be.revertedWith("reward percentages must be 100%")];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        it("reverts because rank and percentage have length mismatch", function () { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        newPercentages[4] = 0;
                                        return [4 /*yield*/, chai_1.expect(stakingPoolFactoryInstance.createPoolProxy(mockAggregatorContract.address, bep20Token.address, "ETH", "Wolf", variables, newRanks, newPercentages, false)).to.be.revertedWith("ranks and percentages length mismatch")];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("StakingPoolProxy", function () { return __awaiter(void 0, void 0, void 0, function () {
            var stakingPoolInstance, stakingPoolProxyAdr;
            return __generator(this, function (_a) {
                beforeEach("deploy a new stakingPoolProxy within the factory", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, deployStakingPoolProxyWithFactory()];
                            case 1:
                                _a = _b.sent(), stakingPoolInstance = _a[0], stakingPoolProxyAdr = _a[1];
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("checks if the stakingPoolProxy owner is the superOwner", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = chai_1.expect;
                                return [4 /*yield*/, stakingPoolInstance.owner()];
                            case 1:
                                _a.apply(void 0, [_c.sent()]).to.equal(superAdminAddress);
                                _b = chai_1.expect;
                                return [4 /*yield*/, stakingPoolInstance.poolCreator()];
                            case 2:
                                _b.apply(void 0, [_c.sent()]).to.equal(signer1Address);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("can not upgrade implementation because upgrade is not enabled", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, chai_1.expect(stakingPoolInstance.upgradeTo(stakingPoolImplementation.address)).to.be.revertedWith("Upgrade is not enabled yet")];
                            case 1:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, stakingPoolInstance.upgradeEnabled()];
                            case 2:
                                _a.apply(void 0, [_b.sent()]).to.be.false;
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("no one can call enableUpgrade other than the superAdmin", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var superAdminAsStakingPool, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, chai_1.expect(stakingPoolInstance.enableUpgrade()).to.be.revertedWith("Ownable: caller is not the owner")];
                            case 1:
                                _b.sent();
                                superAdminAsStakingPool = stakingPoolInstance.connect(superAdmin);
                                return [4 /*yield*/, superAdminAsStakingPool.enableUpgrade()];
                            case 2:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, stakingPoolInstance.upgradeEnabled()];
                            case 3:
                                _a.apply(void 0, [_b.sent()]).to.be.true;
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("can not upgrade because the address provided is the old implementation address", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var superAdminAsStakingPool;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                superAdminAsStakingPool = stakingPoolInstance.connect(superAdmin);
                                return [4 /*yield*/, superAdminAsStakingPool.enableUpgrade()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPoolInstance.upgradeTo(stakingPoolImplementation.address)).to.be.revertedWith("Is already the implementation")];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("successfully upgrades stakingPoolImplementation", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var superAdminAsStakingPool, StakingPoolImplementationV2Factory, stakingPoolImplementationV2Instance;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                superAdminAsStakingPool = stakingPoolInstance.connect(superAdmin);
                                return [4 /*yield*/, superAdminAsStakingPool.enableUpgrade()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, getStakingPoolImplementationV2Factory()];
                            case 2:
                                StakingPoolImplementationV2Factory = _a.sent();
                                return [4 /*yield*/, StakingPoolImplementationV2Factory.deploy()];
                            case 3:
                                stakingPoolImplementationV2Instance = _a.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPoolInstance.upgradeTo(stakingPoolImplementationV2Instance.address)).to.emit(stakingPoolInstance, "ImplementationUpgraded")];
                            case 4:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("unlocks a locked pool by upgrading the implementation", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPool, stakingPoolAsSigner1, _a, isLocked, totemTokenAsSigner3, stakingPoolAsSigner3, superAdminAsStakingPool, StakingPoolImplementationV2Factory, stakingPoolImplementationV2Instance, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                stakingPool = stakingPoolImplementation.attach(stakingPoolProxyAdr);
                                return [4 /*yield*/, totemToken.setTaxExemptStatus(stakingPoolProxyAdr, true)];
                            case 1:
                                _c.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 2:
                                _c.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 3:
                                _c.sent();
                                stakingPoolAsSigner1 = stakingPool.connect(signer1);
                                _a = chai_1.expect;
                                return [4 /*yield*/, stakingPoolAsSigner1.lockPool()];
                            case 4:
                                _a.apply(void 0, [_c.sent()]).to.emit(stakingPool, "PoolLocked");
                                return [4 /*yield*/, stakingPool.isLocked()];
                            case 5:
                                isLocked = _c.sent();
                                chai_1.expect(isLocked).to.be.true;
                                // pool is locked and staking reverts
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 6:
                                // pool is locked and staking reverts
                                _c.sent();
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 7:
                                _c.sent();
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60000))).to.be.revertedWith("0310 Pool is locked")];
                            case 8:
                                _c.sent();
                                superAdminAsStakingPool = stakingPoolInstance.connect(superAdmin);
                                return [4 /*yield*/, superAdminAsStakingPool.enableUpgrade()];
                            case 9:
                                _c.sent();
                                return [4 /*yield*/, getStakingPoolImplementationV2Factory()];
                            case 10:
                                StakingPoolImplementationV2Factory = _c.sent();
                                return [4 /*yield*/, StakingPoolImplementationV2Factory.deploy()];
                            case 11:
                                stakingPoolImplementationV2Instance = _c.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPoolInstance.upgradeTo(stakingPoolImplementationV2Instance.address)).to.emit(stakingPoolInstance, "ImplementationUpgraded")];
                            case 12:
                                _c.sent();
                                stakingPool = stakingPoolImplementationV2Instance.attach(stakingPoolProxyAdr);
                                stakingPoolAsSigner1 = stakingPool.connect(signer1);
                                _b = chai_1.expect;
                                return [4 /*yield*/, stakingPoolAsSigner1.lockPool()];
                            case 13:
                                _b.apply(void 0, [_c.sent()]).to.emit(stakingPool, "PoolUnLocked");
                                return [4 /*yield*/, stakingPool.isLocked()];
                            case 14:
                                isLocked = _c.sent();
                                chai_1.expect(isLocked).to.be.false;
                                return [2 /*return*/];
                        }
                    });
                }); });
                it('transfers ownership from signer1 to superAdmin', function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, stakingPoolProxy.transferOwnership(superAdminAddress)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("setActivationStatus", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("pool can't be activated by a non-operator account ", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2stakingPool;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.setActivationStatus(true)).to.be.revertedWith("0300 caller is not a pool creator")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("pool can be activated by the operators whenever they wants", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 1:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, stakingPool.isActive()];
                            case 2:
                                _a.apply(void 0, [_b.sent()]).to.equal(true);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("stake", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("users can't stake when the launch date is not reached", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                signer2TotemToken = totemToken.connect(signer2);
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, oneHundred)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, oneHundred)];
                            case 2:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 3:
                                _a.apply(void 0, [_b.sent()]).to.equal(oneHundred);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.stake(oneHundred, fiftyThousandBTCPrice)).to.be.revertedWith("0313 pool is not active")];
                            case 4:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("users can't stake when we reach to launch date but the pool is not activated", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                signer2TotemToken = totemToken.connect(signer2);
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, oneHundred)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5001)];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, oneHundred)];
                            case 3:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 4:
                                _a.apply(void 0, [_b.sent()]).to.equal(oneHundred);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.stake(oneHundred, fiftyThousandBTCPrice)).to.be.revertedWith("0313 pool is not active")];
                            case 5:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("users can stake when the pool is activated and is not locked", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _c.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _c.sent();
                                signer2TotemToken = totemToken.connect(signer2);
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, oneThousand)];
                            case 3:
                                _c.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, oneThousand)];
                            case 4:
                                _c.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 5:
                                _a.apply(void 0, [_c.sent()]).to.equal(oneThousand);
                                _b = chai_1.expect;
                                return [4 /*yield*/, signer2stakingPool.stake(oneThousand, fiftyThousandBTCPrice)];
                            case 6:
                                _b.apply(void 0, [_c.sent()]).to.emit(signer2stakingPool, "Stake");
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("successfully staking in the launched pool", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var totemTokenAsSigner2, userBalanceBeforeStake, stakingPoolAsSigner2, userBalanceAfterStake, prediction;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(25000))];
                            case 3:
                                _a.sent();
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(25000))];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, totemToken.balanceOf(signer2Address)];
                            case 5:
                                userBalanceBeforeStake = _a.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(25000), ethers_1.BigNumber.from(10).pow(8).mul(60005))).to.emit(stakingPoolAsSigner2, "Stake")];
                            case 6:
                                _a.sent();
                                return [4 /*yield*/, totemToken.balanceOf(signer2Address)];
                            case 7:
                                userBalanceAfterStake = _a.sent();
                                chai_1.expect(userBalanceBeforeStake.sub(userBalanceAfterStake)).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(25000));
                                return [4 /*yield*/, stakingPoolAsSigner2.predictions(signer2Address, 0)];
                            case 8:
                                prediction = _a.sent();
                                // Staking Tax is 3%
                                chai_1.expect(prediction.stakedBalance).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(24250));
                                chai_1.expect(prediction.pricePrediction).to.equal(ethers_1.BigNumber.from(10).pow(8).mul(60005));
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because can't stake less than the minimum staking amount", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var totemTokenAsSigner3, stakingPoolAsSigner3, stakingPooltotalStakedBalance;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(200))];
                            case 3:
                                _a.sent();
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(200))];
                            case 4:
                                _a.sent();
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(200), ethers_1.BigNumber.from(10).pow(8).mul(60000))).to.be.revertedWith("0311 Amount can't be less than the minimum")];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.totalStaked()];
                            case 6:
                                stakingPooltotalStakedBalance = _a.sent();
                                chai_1.expect(stakingPooltotalStakedBalance).to.equal(ethers_1.BigNumber.from(0));
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because can't stake above size allocation + limitRange", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var totemTokenAsSigner3, stakingPoolAsSigner3, stakingPoolTotalStakedBalance;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _a.sent();
                                // size allocation is 125000 + 250
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(130000))];
                            case 3:
                                // size allocation is 125000 + 250
                                _a.sent();
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(130000))];
                            case 4:
                                _a.sent();
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(130000), ethers_1.BigNumber.from(10).pow(8).mul(60000))).to.be.revertedWith("0312 Can't stake above size allocation")];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.totalStaked()];
                            case 6:
                                stakingPoolTotalStakedBalance = _a.sent();
                                chai_1.expect(stakingPoolTotalStakedBalance).to.equal(ethers_1.BigNumber.from(0));
                                // it is within the limit range, so staking is successful (129000*0.97=125130)
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(129000), ethers_1.BigNumber.from(10).pow(8).mul(60000))).to.emit(stakingPoolAsSigner3, "Stake")];
                            case 7:
                                // it is within the limit range, so staking is successful (129000*0.97=125130)
                                _a.sent();
                                return [4 /*yield*/, stakingPool.totalStaked()];
                            case 8:
                                stakingPoolTotalStakedBalance = _a.sent();
                                chai_1.expect(stakingPoolTotalStakedBalance).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(125130));
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("pool gets locked and can't stake anymore", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var totemTokenAsSigner2, stakingPoolAsSigner2, isLocked, stakingPoolAsSigner3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(131000))];
                            case 3:
                                _a.sent();
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(131000))];
                            case 4:
                                _a.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(128864), ethers_1.BigNumber.from(10).pow(8).mul(60000))).to.emit(stakingPoolAsSigner2, "Stake")];
                            case 5:
                                _a.sent();
                                // can stake more and pool is not locked
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(251), ethers_1.BigNumber.from(10).pow(8).mul(60000))).to.emit(stakingPoolAsSigner2, "Stake")];
                            case 6:
                                // can stake more and pool is not locked
                                _a.sent();
                                return [4 /*yield*/, stakingPool.isLocked()];
                            case 7:
                                isLocked = _a.sent();
                                chai_1.expect(isLocked).to.be.true;
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60000))).to.be.revertedWith("0310 Pool is locked")];
                            case 8:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("batchStake", function () { return __awaiter(void 0, void 0, void 0, function () {
            var stakingAmounts, predictions;
            return __generator(this, function (_a) {
                stakingAmounts = [
                    oneThousand,
                    oneThousand,
                    oneThousand
                ];
                predictions = [
                    fiftyThousandBTCPrice,
                    sixtyThousandBTCPrice,
                    fiftyFiveThousandBTCPrice
                ];
                it("users can't batch stake when the launch date is not reached", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                signer2TotemToken = totemToken.connect(signer2);
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, threeThousand)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, threeThousand)];
                            case 2:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 3:
                                _a.apply(void 0, [_b.sent()]).to.equal(threeThousand);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.batchStake(stakingAmounts, predictions)).to.be.revertedWith("0313 pool is not active")];
                            case 4:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("successfully batch staking in the launched pool", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var totemTokenAsSigner2, stakingPoolAsSigner2, prediction1, prediction2, stakingPooltotalStakedBalance;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, totemToken.transfer(signer2Address, threeThousand)];
                            case 3:
                                _a.sent();
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, threeThousand)];
                            case 4:
                                _a.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner2.batchStake(stakingAmounts, predictions)).to.emit(stakingPoolAsSigner2, "BatchStake")];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, stakingPoolAsSigner2.predictions(signer2Address, 0)];
                            case 6:
                                prediction1 = _a.sent();
                                // Staking Tax is 3%
                                chai_1.expect(prediction1.stakedBalance).to.equal(oneThousandTaxed);
                                chai_1.expect(prediction1.pricePrediction).to.equal(predictions[0]);
                                return [4 /*yield*/, stakingPoolAsSigner2.predictions(signer2Address, 1)];
                            case 7:
                                prediction2 = _a.sent();
                                // Staking Tax is 3%
                                chai_1.expect(prediction2.stakedBalance).to.equal(oneThousandTaxed);
                                chai_1.expect(prediction2.pricePrediction).to.equal(predictions[1]);
                                return [4 /*yield*/, stakingPool.totalStaked()];
                            case 8:
                                stakingPooltotalStakedBalance = _a.sent();
                                chai_1.expect(stakingPooltotalStakedBalance).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(2910));
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because stakingAmount and predictions arrays don't have the same length", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, stakingAmounts, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _b.sent();
                                signer2TotemToken = totemToken.connect(signer2);
                                signer2stakingPool = stakingPool.connect(signer2);
                                stakingAmounts = [
                                    oneThousand,
                                    oneThousand
                                ];
                                return [4 /*yield*/, totemToken.transfer(signer2Address, threeThousand)];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, threeThousand)];
                            case 4:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 5:
                                _a.apply(void 0, [_b.sent()]).to.equal(threeThousand);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.batchStake(stakingAmounts, predictions)).to.be.revertedWith("0315 stakingAmount and predictions length mismatch")];
                            case 6:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because can't batch stake less than the minimum staking amount", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, stakingAmounts, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _b.sent();
                                signer2TotemToken = totemToken.connect(signer2);
                                signer2stakingPool = stakingPool.connect(signer2);
                                stakingAmounts = [
                                    ethers_1.BigNumber.from(10).pow(18).mul(200),
                                    oneThousand,
                                    oneThousand
                                ];
                                return [4 /*yield*/, totemToken.transfer(signer2Address, threeThousand)];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, threeThousand)];
                            case 4:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 5:
                                _a.apply(void 0, [_b.sent()]).to.equal(threeThousand);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.batchStake(stakingAmounts, predictions)).to.be.revertedWith("0311 Amount can't be less than the minimum")];
                            case 6:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because can't batch stake above size allocation", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var totemTokenAsSigner3, stakingAmounts, stakingPoolAsSigner3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _a.sent();
                                // size allocation is 125000, limit range is 135309
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(136310))];
                            case 3:
                                // size allocation is 125000, limit range is 135309
                                _a.sent();
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(136310))];
                            case 4:
                                _a.sent();
                                stakingAmounts = [
                                    ethers_1.BigNumber.from(10).pow(18).mul(100000),
                                    ethers_1.BigNumber.from(10).pow(18).mul(35310),
                                    oneThousand
                                ];
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                return [4 /*yield*/, chai_1.expect(stakingPoolAsSigner3.batchStake(stakingAmounts, predictions)).to.be.revertedWith("0312 Can't stake above size allocation")];
                            case 5:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("lockPool", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("pool can't be locked by a non-operator account ", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2stakingPool;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.lockPool()).to.be.revertedWith("0300 caller is not a pool creator")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("pool can be locked by operators whenever they want", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, chai_1.expect(stakingPool.lockPool()).to.emit(stakingPool, "PoolLocked")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("claimReward", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("non-staker accouts shouldn't get anything when calling claimReward", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, signer3stakingPool, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _c.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _c.sent();
                                return [4 /*yield*/, totemToken.connect(signer2)];
                            case 3:
                                signer2TotemToken = _c.sent();
                                return [4 /*yield*/, stakingPool.connect(signer2)];
                            case 4:
                                signer2stakingPool = _c.sent();
                                return [4 /*yield*/, stakingPool.connect(signer3)];
                            case 5:
                                signer3stakingPool = _c.sent();
                                return [4 /*yield*/, totemToken.transfer(signer2Address, oneThousand)];
                            case 6:
                                _c.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, oneThousand)];
                            case 7:
                                _c.sent();
                                return [4 /*yield*/, signer2stakingPool.stake(oneThousand, fiftyThousandBTCPrice)];
                            case 8:
                                _c.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(signer3Address)];
                            case 9:
                                _a.apply(void 0, [_c.sent()]).to.equal(0);
                                return [4 /*yield*/, signer3stakingPool.claimReward()];
                            case 10:
                                _c.sent();
                                _b = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(signer3Address)];
                            case 11:
                                _b.apply(void 0, [_c.sent()]).to.equal(0);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("successfully claims reward", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolAsSigner2, totemTokenAsSigner2, stakingPoolAsSigner3, totemTokenAsSigner3, stakingPoolAsSigner4, totemTokenAsSigner4, _a, _b, _c, stakingPooltotalStakedBalance, newAddresses, isCollabReward, winner, _d, _e, _f, _g, _h, _j, _k, secondWinner, _l, _m, thirdWinner, _o, _p, winner, _q, _r, secondWinner, _s, _t, thirdWinner, _u, _v;
                    return __generator(this, function (_w) {
                        switch (_w.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _w.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _w.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                stakingPoolAsSigner4 = stakingPool.connect(signer4);
                                totemTokenAsSigner4 = totemToken.connect(signer4);
                                return [4 /*yield*/, mockAggregatorContract.mock.decimals.returns(8)];
                            case 3:
                                _w.sent();
                                return [4 /*yield*/, mockAggregatorContract.mock.latestRoundData.returns("73786976294838208680", ethers_1.BigNumber.from(10).pow(8).mul(60000), "1620053717", "1620053717", "73786976294838208680")];
                            case 4:
                                _w.sent();
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 5:
                                _w.sent();
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 6:
                                _w.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 7:
                                _a.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60020))];
                            case 8:
                                _w.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1000)];
                            case 9:
                                _w.sent();
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 10:
                                _w.sent();
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 11:
                                _w.sent();
                                _b = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer3Address, stakingPool.address)];
                            case 12:
                                _b.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(59995))];
                            case 13:
                                _w.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1000)];
                            case 14:
                                _w.sent();
                                return [4 /*yield*/, totemToken.transfer(signer4Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 15:
                                _w.sent();
                                return [4 /*yield*/, totemTokenAsSigner4.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 16:
                                _w.sent();
                                _c = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer4Address, stakingPool.address)];
                            case 17:
                                _c.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner4.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60001))];
                            case 18:
                                _w.sent();
                                return [4 /*yield*/, stakingPool.totalStaked()];
                            case 19:
                                stakingPooltotalStakedBalance = _w.sent();
                                chai_1.expect(stakingPooltotalStakedBalance).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(2910));
                                return [4 /*yield*/, bep20Token.transfer(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 20:
                                _w.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 430000)];
                            case 21:
                                _w.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 22:
                                _w.sent();
                                newAddresses = zeroAddresses;
                                newAddresses[0] = signer2Address;
                                newAddresses[1] = signer3Address;
                                newAddresses[2] = signer4Address;
                                // let sortedStakersIndexed = zeroIndexes
                                return [4 /*yield*/, stakingPool.updateMaturingPrice(ethers_1.BigNumber.from(10).pow(18).mul(50000), true, 0, nilAddress, 0)];
                            case 23:
                                // let sortedStakersIndexed = zeroIndexes
                                _w.sent();
                                return [4 /*yield*/, stakingPool.setSortedStakers(newAddresses, zeroIndexes)];
                            case 24:
                                _w.sent();
                                return [4 /*yield*/, stakingPool.endPool()];
                            case 25:
                                _w.sent();
                                return [4 /*yield*/, stakingPoolAsSigner3.collaborativeReward()];
                            case 26:
                                isCollabReward = _w.sent();
                                if (!isCollabReward) return [3 /*break*/, 44];
                                return [4 /*yield*/, stakingPool.sortedStakers(0)];
                            case 27:
                                winner = _w.sent();
                                chai_1.expect(winner.stakerAddress).to.equal(signer2Address);
                                _d = chai_1.expect;
                                return [4 /*yield*/, stakingPool.maturityTime()];
                            case 28:
                                _d.apply(void 0, [_w.sent()]).to.equal(1296000);
                                _e = chai_1.expect;
                                return [4 /*yield*/, stakingPool.lockTime()];
                            case 29:
                                _e.apply(void 0, [_w.sent()]).to.equal(432000);
                                _f = chai_1.expect;
                                return [4 /*yield*/, stakingPool.sizeAllocation()];
                            case 30:
                                _f.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(125000));
                                _g = chai_1.expect;
                                return [4 /*yield*/, stakingPool.stakeApr()];
                            case 31:
                                _g.apply(void 0, [_w.sent()]).to.equal(6000);
                                _h = chai_1.expect;
                                return [4 /*yield*/, stakingPool.prizeAmount()];
                            case 32:
                                _h.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(4500));
                                return [4 /*yield*/, stakingPoolAsSigner2.claimReward()];
                            case 33:
                                _w.sent();
                                _j = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(signer2Address)];
                            case 34:
                                _j.apply(void 0, [(_w.sent()).div(Math.pow(10, 15)).toNumber()]).to.be.lessThan(2685090);
                                _k = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(signer2Address)];
                            case 35:
                                _k.apply(void 0, [_w.sent()]).to.equal("6249999999999999");
                                return [4 /*yield*/, stakingPool.sortedStakers(1)];
                            case 36:
                                secondWinner = _w.sent();
                                chai_1.expect(secondWinner.stakerAddress).to.equal(signer3Address);
                                return [4 /*yield*/, stakingPoolAsSigner3.claimReward()];
                            case 37:
                                _w.sent();
                                _l = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(secondWinner.stakerAddress)];
                            case 38:
                                _l.apply(void 0, [(_w.sent()).div(Math.pow(10, 15)).toNumber()]).to.be.lessThan(1897575);
                                _m = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(secondWinner.stakerAddress)];
                            case 39:
                                _m.apply(void 0, [_w.sent()]).to.equal("3333333333333333");
                                return [4 /*yield*/, stakingPool.sortedStakers(2)];
                            case 40:
                                thirdWinner = _w.sent();
                                chai_1.expect(thirdWinner.stakerAddress).to.equal(signer4Address);
                                return [4 /*yield*/, stakingPoolAsSigner4.claimReward()];
                            case 41:
                                _w.sent();
                                _o = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(thirdWinner.stakerAddress)];
                            case 42:
                                _o.apply(void 0, [(_w.sent()).div(Math.pow(10, 15)).toNumber()]).to.be.lessThan(1447560);
                                _p = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(thirdWinner.stakerAddress)];
                            case 43:
                                _p.apply(void 0, [_w.sent()]).to.equal("1666666666666666");
                                return [3 /*break*/, 57];
                            case 44: return [4 /*yield*/, stakingPool.stakers(0)];
                            case 45:
                                winner = _w.sent();
                                chai_1.expect(winner.stakerAddress).to.equal(signer2Address);
                                return [4 /*yield*/, stakingPoolAsSigner2.claimReward()];
                            case 46:
                                _w.sent();
                                _q = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(signer2Address)];
                            case 47:
                                _q.apply(void 0, [_w.sent()]).is.lessThan(ethers_1.BigNumber.from(10).pow(18).mul(2685));
                                _r = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(signer2Address)];
                            case 48:
                                _r.apply(void 0, [_w.sent()]).to.equal("624999");
                                return [4 /*yield*/, stakingPool.stakers(1)];
                            case 49:
                                secondWinner = _w.sent();
                                chai_1.expect(secondWinner.stakerAddress).to.equal(signer3Address);
                                return [4 /*yield*/, stakingPoolAsSigner3.claimReward()];
                            case 50:
                                _w.sent();
                                _s = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(secondWinner.stakerAddress)];
                            case 51:
                                _s.apply(void 0, [_w.sent()]).is.lessThan(ethers_1.BigNumber.from(10).pow(18).mul(1898));
                                _t = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(secondWinner.stakerAddress)];
                            case 52:
                                _t.apply(void 0, [_w.sent()]).to.equal("3333");
                                return [4 /*yield*/, stakingPool.stakers(2)];
                            case 53:
                                thirdWinner = _w.sent();
                                chai_1.expect(thirdWinner.stakerAddress).to.equal(signer4Address);
                                return [4 /*yield*/, stakingPoolAsSigner4.claimReward()];
                            case 54:
                                _w.sent();
                                _u = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(thirdWinner.stakerAddress)];
                            case 55:
                                _u.apply(void 0, [_w.sent()]).is.lessThan(ethers_1.BigNumber.from(10).pow(18).mul(1447));
                                _v = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(thirdWinner.stakerAddress)];
                            case 56:
                                _v.apply(void 0, [_w.sent()]).to.equal("1666");
                                _w.label = 57;
                            case 57: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("indexedClaimReward", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("successfully claims reward at index 0", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolAsSigner2, totemTokenAsSigner2, stakingPoolAsSigner3, totemTokenAsSigner3, stakingPoolAsSigner4, totemTokenAsSigner4, _a, _b, _c, stakingPooltotalStakedBalance, newAddresses, isCollabReward, winner, _d, _e, _f, _g, _h, _j, _k, secondWinner, _l, _m, thirdWinner, _o, _p, winner, _q, _r, secondWinner, _s, _t, thirdWinner, _u, _v;
                    return __generator(this, function (_w) {
                        switch (_w.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _w.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _w.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                stakingPoolAsSigner4 = stakingPool.connect(signer4);
                                totemTokenAsSigner4 = totemToken.connect(signer4);
                                return [4 /*yield*/, mockAggregatorContract.mock.decimals.returns(8)];
                            case 3:
                                _w.sent();
                                return [4 /*yield*/, mockAggregatorContract.mock.latestRoundData.returns("73786976294838208680", ethers_1.BigNumber.from(10).pow(8).mul(60000), "1620053717", "1620053717", "73786976294838208680")];
                            case 4:
                                _w.sent();
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 5:
                                _w.sent();
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 6:
                                _w.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 7:
                                _a.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60020))];
                            case 8:
                                _w.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1000)];
                            case 9:
                                _w.sent();
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 10:
                                _w.sent();
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 11:
                                _w.sent();
                                _b = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer3Address, stakingPool.address)];
                            case 12:
                                _b.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(59995))];
                            case 13:
                                _w.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1000)];
                            case 14:
                                _w.sent();
                                return [4 /*yield*/, totemToken.transfer(signer4Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 15:
                                _w.sent();
                                return [4 /*yield*/, totemTokenAsSigner4.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 16:
                                _w.sent();
                                _c = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer4Address, stakingPool.address)];
                            case 17:
                                _c.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner4.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60001))];
                            case 18:
                                _w.sent();
                                return [4 /*yield*/, stakingPool.totalStaked()];
                            case 19:
                                stakingPooltotalStakedBalance = _w.sent();
                                chai_1.expect(stakingPooltotalStakedBalance).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(2910));
                                return [4 /*yield*/, bep20Token.transfer(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 20:
                                _w.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 430000)];
                            case 21:
                                _w.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 22:
                                _w.sent();
                                newAddresses = zeroAddresses;
                                newAddresses[0] = signer2Address;
                                newAddresses[1] = signer3Address;
                                newAddresses[2] = signer4Address;
                                return [4 /*yield*/, stakingPool.updateMaturingPrice(ethers_1.BigNumber.from(10).pow(18).mul(50000), true, 0, nilAddress, 0)];
                            case 23:
                                _w.sent();
                                return [4 /*yield*/, stakingPool.setSortedStakers(newAddresses, zeroIndexes)];
                            case 24:
                                _w.sent();
                                return [4 /*yield*/, stakingPool.endPool()];
                            case 25:
                                _w.sent();
                                return [4 /*yield*/, stakingPoolAsSigner3.collaborativeReward()];
                            case 26:
                                isCollabReward = _w.sent();
                                if (!isCollabReward) return [3 /*break*/, 44];
                                return [4 /*yield*/, stakingPool.sortedStakers(0)];
                            case 27:
                                winner = _w.sent();
                                chai_1.expect(winner.stakerAddress).to.equal(signer2Address);
                                _d = chai_1.expect;
                                return [4 /*yield*/, stakingPool.maturityTime()];
                            case 28:
                                _d.apply(void 0, [_w.sent()]).to.equal(1296000);
                                _e = chai_1.expect;
                                return [4 /*yield*/, stakingPool.lockTime()];
                            case 29:
                                _e.apply(void 0, [_w.sent()]).to.equal(432000);
                                _f = chai_1.expect;
                                return [4 /*yield*/, stakingPool.sizeAllocation()];
                            case 30:
                                _f.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(125000));
                                _g = chai_1.expect;
                                return [4 /*yield*/, stakingPool.stakeApr()];
                            case 31:
                                _g.apply(void 0, [_w.sent()]).to.equal(6000);
                                _h = chai_1.expect;
                                return [4 /*yield*/, stakingPool.prizeAmount()];
                            case 32:
                                _h.apply(void 0, [_w.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(4500));
                                return [4 /*yield*/, stakingPoolAsSigner2.indexedClaimReward(0)];
                            case 33:
                                _w.sent();
                                _j = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(signer2Address)];
                            case 34:
                                _j.apply(void 0, [(_w.sent()).div(Math.pow(10, 15)).toNumber()]).to.be.lessThan(2685090);
                                _k = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(signer2Address)];
                            case 35:
                                _k.apply(void 0, [_w.sent()]).to.equal("6249999999999999");
                                return [4 /*yield*/, stakingPool.sortedStakers(1)];
                            case 36:
                                secondWinner = _w.sent();
                                chai_1.expect(secondWinner.stakerAddress).to.equal(signer3Address);
                                return [4 /*yield*/, stakingPoolAsSigner3.claimReward()];
                            case 37:
                                _w.sent();
                                _l = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(secondWinner.stakerAddress)];
                            case 38:
                                _l.apply(void 0, [(_w.sent()).div(Math.pow(10, 15)).toNumber()]).to.be.lessThan(1897575);
                                _m = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(secondWinner.stakerAddress)];
                            case 39:
                                _m.apply(void 0, [_w.sent()]).to.equal("3333333333333333");
                                return [4 /*yield*/, stakingPool.sortedStakers(2)];
                            case 40:
                                thirdWinner = _w.sent();
                                chai_1.expect(thirdWinner.stakerAddress).to.equal(signer4Address);
                                return [4 /*yield*/, stakingPoolAsSigner4.claimReward()];
                            case 41:
                                _w.sent();
                                _o = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(thirdWinner.stakerAddress)];
                            case 42:
                                _o.apply(void 0, [(_w.sent()).div(Math.pow(10, 15)).toNumber()]).to.be.lessThan(1447560);
                                _p = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(thirdWinner.stakerAddress)];
                            case 43:
                                _p.apply(void 0, [_w.sent()]).to.equal("1666666666666666");
                                return [3 /*break*/, 57];
                            case 44: return [4 /*yield*/, stakingPool.stakers(0)];
                            case 45:
                                winner = _w.sent();
                                chai_1.expect(winner.stakerAddress).to.equal(signer2Address);
                                return [4 /*yield*/, stakingPoolAsSigner2.claimReward()];
                            case 46:
                                _w.sent();
                                _q = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(signer2Address)];
                            case 47:
                                _q.apply(void 0, [_w.sent()]).is.lessThan(ethers_1.BigNumber.from(10).pow(18).mul(2685));
                                _r = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(signer2Address)];
                            case 48:
                                _r.apply(void 0, [_w.sent()]).to.equal("624999");
                                return [4 /*yield*/, stakingPool.stakers(1)];
                            case 49:
                                secondWinner = _w.sent();
                                chai_1.expect(secondWinner.stakerAddress).to.equal(signer3Address);
                                return [4 /*yield*/, stakingPoolAsSigner3.claimReward()];
                            case 50:
                                _w.sent();
                                _s = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(secondWinner.stakerAddress)];
                            case 51:
                                _s.apply(void 0, [_w.sent()]).is.lessThan(ethers_1.BigNumber.from(10).pow(18).mul(1898));
                                _t = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(secondWinner.stakerAddress)];
                            case 52:
                                _t.apply(void 0, [_w.sent()]).to.equal("3333");
                                return [4 /*yield*/, stakingPool.stakers(2)];
                            case 53:
                                thirdWinner = _w.sent();
                                chai_1.expect(thirdWinner.stakerAddress).to.equal(signer4Address);
                                return [4 /*yield*/, stakingPoolAsSigner4.claimReward()];
                            case 54:
                                _w.sent();
                                _u = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(thirdWinner.stakerAddress)];
                            case 55:
                                _u.apply(void 0, [_w.sent()]).is.lessThan(ethers_1.BigNumber.from(10).pow(18).mul(1447));
                                _v = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(thirdWinner.stakerAddress)];
                            case 56:
                                _v.apply(void 0, [_w.sent()]).to.equal("1666");
                                _w.label = 57;
                            case 57: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("purchaseWrappedToken", function () { return __awaiter(void 0, void 0, void 0, function () {
            var deadLine;
            return __generator(this, function (_a) {
                beforeEach("set a deadline", function () {
                    deadLine = Math.round(new Date().getTime() / 1000) + 500;
                });
                it("successfully swap Wrapped Tokens for USD Tokens", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, swapRouterAddress, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, mockUniswapRouter.mock.getAmountsOut
                                    .withArgs(ethers_1.BigNumber.from(10).pow(18).mul(1000), [
                                    usdContract.address,
                                    bep20Token.address,
                                ])
                                    .returns([
                                    ethers_1.BigNumber.from(10).pow(18).mul(1000),
                                    ethers_1.BigNumber.from(10).pow(12).mul(40000),
                                ])];
                            case 1:
                                _d.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, wrappedTokenDistributor.getEstimatedWrappedTokenForUSD(ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 2:
                                _a.apply(void 0, [_d.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(12).mul(40000));
                                return [4 /*yield*/, mockUniswapRouter.mock.swapExactTokensForTokens
                                        .withArgs(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(12).mul(38800), [usdContract.address, bep20Token.address], stakingPool.address, deadLine)
                                        .returns([ethers_1.BigNumber.from(10).pow(12).mul(38800)])];
                            case 3:
                                _d.sent();
                                return [4 /*yield*/, wrappedTokenDistributor.getSwapRouter()];
                            case 4:
                                swapRouterAddress = _d.sent();
                                return [4 /*yield*/, stakingPool.purchaseWrappedToken(ethers_1.BigNumber.from(10).pow(18).mul(1000), deadLine)];
                            case 5:
                                _d.sent();
                                _b = chai_1.expect;
                                return [4 /*yield*/, usdContract.allowance(stakingPool.address, swapRouterAddress)];
                            case 6:
                                _b.apply(void 0, [_d.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, bep20Token.transfer(stakingPool.address, ethers_1.BigNumber.from(10).pow(12).mul(38800))];
                            case 7:
                                _d.sent();
                                _c = chai_1.expect;
                                return [4 /*yield*/, stakingPool.getWrappedTokenBalance()];
                            case 8:
                                _c.apply(void 0, [_d.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(12).mul(38800));
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because pool is not usd rewarder", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolProxyInstance, launchDate, stakingPoolProxy, StakingPoolImplementationFactory, stakingPoolInstance;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                stakingPoolProxyInstance = new StakingPoolProxy__factory_1.StakingPoolProxy__factory(signer1);
                                launchDate = Math.round(new Date().getTime() / 1000) + 5000;
                                zeroUSDVariables[0] = launchDate;
                                return [4 /*yield*/, stakingPoolProxyInstance.deploy()];
                            case 1:
                                stakingPoolProxy = _a.sent();
                                stakingPoolProxy.initialize("ETH", "Wolf", totemToken.address, rewardManager.address, signer1Address, [
                                    mockUniswapRouter.address,
                                    usdContract.address,
                                    mockAggregatorContract.address,
                                    bep20Token.address,
                                ], zeroUSDVariables, ranks, percentages, true);
                                return [4 /*yield*/, rewardManager.addPool(stakingPoolProxy.address)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, totemToken.setTaxExemptStatus(stakingPoolProxy.address, true)];
                            case 3:
                                _a.sent();
                                stakingPoolProxy.upgradeTo(stakingPoolImplementation.address);
                                return [4 /*yield*/, getStakingPoolImplementationFactory()];
                            case 4:
                                StakingPoolImplementationFactory = _a.sent();
                                stakingPoolInstance = StakingPoolImplementationFactory.attach(stakingPoolProxy.address);
                                return [4 /*yield*/, chai_1.expect(stakingPoolInstance.purchaseWrappedToken(ethers_1.BigNumber.from(10).pow(18).mul(1000), deadLine)).to.be.revertedWith("0340 The pool is only TOTM rewarder")];
                            case 5:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because the usd amount to purchase wrapped token is zero", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, chai_1.expect(stakingPool.purchaseWrappedToken(ethers_1.BigNumber.from(0), deadLine)).to.be.revertedWith("0341 Amount can't be zero")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because there is not enough time to purchase wrapped token", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, Math.round(new Date().getTime() / 1000) + 100)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPool.purchaseWrappedToken(ethers_1.BigNumber.from(10).pow(18).mul(1000), deadLine)).to.be.revertedWith("0342 Deadline is low")];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("updateMaturingPrice", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("oracle updates the maturing price", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolMaturingPrice;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, mockAggregatorContract.mock.decimals.returns(8)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, mockAggregatorContract.mock.latestRoundData.returns("73786976294838208680", ethers_1.BigNumber.from(10).pow(8).mul(60000), "1620053717", "1620053717", "73786976294838208680")];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 5:
                                _a.sent();
                                // Does not set the price to 50000, because oracle is specified
                                return [4 /*yield*/, stakingPool.updateMaturingPrice(ethers_1.BigNumber.from(10).pow(8).mul(50000), true, 0, nilAddress, 0)];
                            case 6:
                                // Does not set the price to 50000, because oracle is specified
                                _a.sent();
                                return [4 /*yield*/, stakingPool.maturingPrice()];
                            case 7:
                                stakingPoolMaturingPrice = _a.sent();
                                chai_1.expect(stakingPoolMaturingPrice).to.equal(ethers_1.BigNumber.from(10).pow(8).mul(60000));
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("pool creator updates the maturing price because no oracle is specified", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolProxyInstance, launchDate, stakingPoolProxy, StakingPoolImplementationFactory, stakingPoolInstance, stakingPoolMaturingPrice;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                stakingPoolProxyInstance = new StakingPoolProxy__factory_1.StakingPoolProxy__factory(signer1);
                                launchDate = Math.round(new Date().getTime() / 1000) + 5000;
                                variables[0] = launchDate;
                                return [4 /*yield*/, stakingPoolProxyInstance.deploy()];
                            case 1:
                                stakingPoolProxy = _a.sent();
                                stakingPoolProxy.initialize("ETH", "Wolf", totemToken.address, rewardManager.address, signer1Address, [
                                    mockUniswapRouter.address,
                                    usdContract.address,
                                    nilAddress,
                                    bep20Token.address,
                                ], variables, ranks, percentages, true);
                                return [4 /*yield*/, rewardManager.addPool(stakingPoolProxy.address)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, totemToken.setTaxExemptStatus(stakingPoolProxy.address, true)];
                            case 3:
                                _a.sent();
                                stakingPoolProxy.upgradeTo(stakingPoolImplementation.address);
                                return [4 /*yield*/, getStakingPoolImplementationFactory()];
                            case 4:
                                StakingPoolImplementationFactory = _a.sent();
                                stakingPoolInstance = StakingPoolImplementationFactory.attach(stakingPoolProxy.address);
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 5:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 6:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 7:
                                _a.sent();
                                // Sets price to 59000, because oracle is not specified and updating maturing price is manual
                                return [4 /*yield*/, stakingPoolInstance.updateMaturingPrice(ethers_1.BigNumber.from(10).pow(8).mul(59000), true, 0, nilAddress, 0)];
                            case 8:
                                // Sets price to 59000, because oracle is not specified and updating maturing price is manual
                                _a.sent();
                                return [4 /*yield*/, stakingPoolInstance.maturingPrice()];
                            case 9:
                                stakingPoolMaturingPrice = _a.sent();
                                chai_1.expect(stakingPoolMaturingPrice).to.equal(ethers_1.BigNumber.from(10).pow(8).mul(59000));
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because pool is not mature yet", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 500000)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPool.updateMaturingPrice(ethers_1.BigNumber.from(10).pow(8).mul(50000), true, 0, nilAddress, 0)).to.be.revertedWith("0350 Can't set maturing price before the maturity time")];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("prediction oracle and prize oracle are different and specified", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolMaturingPrice, stakingPoolPrizeMaturingPrice, stakingPoolPrizeOracleDecimals;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, mockAggregatorContract.mock.decimals.returns(8)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, mockAggregatorContract.mock.latestRoundData.returns("73786976294838208680", ethers_1.BigNumber.from(10).pow(8).mul(60000), "1620053717", "1620053717", "73786976294838208680")];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, mockAggregatorContractForPrize.mock.decimals.returns(8)];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, mockAggregatorContractForPrize.mock.latestRoundData.returns("73786976294838208680", ethers_1.BigNumber.from(10).pow(8).mul(3000), "1620053717", "1620053717", "73786976294838208680")];
                            case 4:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 5:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 6:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 7:
                                _b.sent();
                                return [4 /*yield*/, stakingPool.updateMaturingPrice(ethers_1.BigNumber.from(10).pow(8).mul(50000), false, 0, mockAggregatorContractForPrize.address, 0)];
                            case 8:
                                _b.sent();
                                return [4 /*yield*/, stakingPool.maturingPrice()];
                            case 9:
                                stakingPoolMaturingPrice = _b.sent();
                                chai_1.expect(stakingPoolMaturingPrice).to.equal(ethers_1.BigNumber.from(10).pow(8).mul(60000));
                                return [4 /*yield*/, stakingPool.getLPS()];
                            case 10:
                                _a = _b.sent(), stakingPoolPrizeMaturingPrice = _a[0], stakingPoolPrizeOracleDecimals = _a[1];
                                chai_1.expect(stakingPoolPrizeMaturingPrice).to.equal(ethers_1.BigNumber.from(10).pow(8).mul(3000));
                                chai_1.expect(stakingPoolPrizeOracleDecimals).to.equal(ethers_1.BigNumber.from(8));
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("prediction oracle and prize oracle are different but prize oracle does not work", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolMaturingPrice, stakingPoolPrizeMaturingPrice, stakingPoolPrizeOracleDecimals;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, mockAggregatorContract.mock.decimals.returns(8)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, mockAggregatorContract.mock.latestRoundData.returns("73786976294838208680", ethers_1.BigNumber.from(10).pow(8).mul(60000), "1620053717", "1620053717", "73786976294838208680")];
                            case 2:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 4:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 5:
                                _b.sent();
                                return [4 /*yield*/, stakingPool.updateMaturingPrice(0, false, ethers_1.BigNumber.from(10).pow(8).mul(3100), nilAddress, 6)];
                            case 6:
                                _b.sent();
                                return [4 /*yield*/, stakingPool.maturingPrice()];
                            case 7:
                                stakingPoolMaturingPrice = _b.sent();
                                chai_1.expect(stakingPoolMaturingPrice).to.equal(ethers_1.BigNumber.from(10).pow(8).mul(60000));
                                return [4 /*yield*/, stakingPool.getLPS()];
                            case 8:
                                _a = _b.sent(), stakingPoolPrizeMaturingPrice = _a[0], stakingPoolPrizeOracleDecimals = _a[1];
                                chai_1.expect(stakingPoolPrizeMaturingPrice).to.equal(ethers_1.BigNumber.from(10).pow(8).mul(3100));
                                chai_1.expect(stakingPoolPrizeOracleDecimals).to.equal(ethers_1.BigNumber.from(6));
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("stakingPool: getStakers", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("check the stakers", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer3TotemToken, signer4TotemToken, signer2stakingPool, signer3stakingPool, signer4stakingPool, _a, _b, _c, _d, addrsAndIndexes;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _e.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _e.sent();
                                return [4 /*yield*/, totemToken.connect(signer2)];
                            case 3:
                                signer2TotemToken = _e.sent();
                                return [4 /*yield*/, totemToken.connect(signer3)];
                            case 4:
                                signer3TotemToken = _e.sent();
                                return [4 /*yield*/, totemToken.connect(signer4)];
                            case 5:
                                signer4TotemToken = _e.sent();
                                return [4 /*yield*/, stakingPool.connect(signer2)];
                            case 6:
                                signer2stakingPool = _e.sent();
                                return [4 /*yield*/, stakingPool.connect(signer3)];
                            case 7:
                                signer3stakingPool = _e.sent();
                                return [4 /*yield*/, stakingPool.connect(signer4)];
                            case 8:
                                signer4stakingPool = _e.sent();
                                return [4 /*yield*/, totemToken.transfer(signer2Address, tenThousand)];
                            case 9:
                                _e.sent();
                                return [4 /*yield*/, totemToken.transfer(signer3Address, oneThousand)];
                            case 10:
                                _e.sent();
                                return [4 /*yield*/, totemToken.transfer(signer4Address, oneThousand)];
                            case 11:
                                _e.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, oneThousand)];
                            case 12:
                                _e.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 13:
                                _a.apply(void 0, [_e.sent()]).to.equal(oneThousand);
                                return [4 /*yield*/, signer2stakingPool.stake(oneThousand, fiftyThousandBTCPrice)];
                            case 14:
                                _e.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, oneThousand)];
                            case 15:
                                _e.sent();
                                _b = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 16:
                                _b.apply(void 0, [_e.sent()]).to.equal(oneThousand);
                                return [4 /*yield*/, signer2stakingPool.stake(oneThousand, sixtyThousandBTCPrice)];
                            case 17:
                                _e.sent();
                                return [4 /*yield*/, signer3TotemToken.approve(stakingPool.address, oneThousand)];
                            case 18:
                                _e.sent();
                                _c = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer3Address, stakingPool.address)];
                            case 19:
                                _c.apply(void 0, [_e.sent()]).to.equal(oneThousand);
                                return [4 /*yield*/, signer3stakingPool.stake(oneThousand, fiftyThousandBTCPrice)];
                            case 20:
                                _e.sent();
                                return [4 /*yield*/, signer4TotemToken.approve(stakingPool.address, oneThousand)];
                            case 21:
                                _e.sent();
                                _d = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer4Address, stakingPool.address)];
                            case 22:
                                _d.apply(void 0, [_e.sent()]).to.equal(oneThousand);
                                return [4 /*yield*/, signer4stakingPool.stake(oneThousand, fiftyThousandBTCPrice)];
                            case 23:
                                _e.sent();
                                return [4 /*yield*/, stakingPool.getStakers()];
                            case 24:
                                addrsAndIndexes = _e.sent();
                                chai_1.expect(addrsAndIndexes[0][2]).to.equal(signer3Address);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("stakingPool: setSortedStakers", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("setSortedStakers can't be called by non-operator accounts", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2stakingPool;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.setSortedStakers(zeroAddresses, zeroIndexes)).to.be.revertedWith("0300 caller is not a pool creator")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because setSortedStakers can not be called before maturity date", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var newAddresses;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                newAddresses = zeroAddresses;
                                return [4 /*yield*/, chai_1.expect(stakingPool.setSortedStakers(newAddresses, zeroIndexes)).to.be.revertedWith("0390 Can't set sorted stakers before the maturity time")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("calls setSortedStakers successfully", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolAsSigner2, totemTokenAsSigner2, stakingPoolAsSigner3, totemTokenAsSigner3, newAddresses, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _c.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _c.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 3:
                                _c.sent();
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 4:
                                _c.sent();
                                return [4 /*yield*/, stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60001))];
                            case 5:
                                _c.sent();
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 6:
                                _c.sent();
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 7:
                                _c.sent();
                                return [4 /*yield*/, stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(59980))];
                            case 8:
                                _c.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 9:
                                _c.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 10:
                                _c.sent();
                                newAddresses = zeroAddresses;
                                newAddresses[0] = signer2Address;
                                newAddresses[1] = signer3Address;
                                newAddresses[2] = nilAddress;
                                _a = chai_1.expect;
                                return [4 /*yield*/, stakingPool.setSortedStakers(newAddresses, zeroIndexes)];
                            case 11:
                                _a.apply(void 0, [_c.sent()]).to.emit(stakingPool, "PoolSorted");
                                _b = chai_1.expect;
                                return [4 /*yield*/, stakingPool.sortedStakers(0)];
                            case 12:
                                _b.apply(void 0, [(_c.sent()).stakerAddress]).to.equal(signer2Address);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("previous sortedStakers is removed when setSortedStakers is called again", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolAsSigner2, totemTokenAsSigner2, stakingPoolAsSigner3, totemTokenAsSigner3, newAddresses, _a, _b, _c, _d, _e;
                    return __generator(this, function (_f) {
                        switch (_f.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _f.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _f.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 3:
                                _f.sent();
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 4:
                                _f.sent();
                                return [4 /*yield*/, stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60001))];
                            case 5:
                                _f.sent();
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 6:
                                _f.sent();
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 7:
                                _f.sent();
                                return [4 /*yield*/, stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(59980))];
                            case 8:
                                _f.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 9:
                                _f.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 10:
                                _f.sent();
                                newAddresses = zeroAddresses;
                                newAddresses[0] = signer2Address;
                                newAddresses[1] = signer3Address;
                                _a = chai_1.expect;
                                return [4 /*yield*/, stakingPool.setSortedStakers(newAddresses, zeroIndexes)];
                            case 11:
                                _a.apply(void 0, [_f.sent()]).to.emit(stakingPool, "PoolSorted");
                                _b = chai_1.expect;
                                return [4 /*yield*/, stakingPool.sortedStakers(0)];
                            case 12:
                                _b.apply(void 0, [(_f.sent()).stakerAddress]).to.equal(signer2Address);
                                newAddresses[0] = signer3Address;
                                newAddresses[1] = signer2Address;
                                _c = chai_1.expect;
                                return [4 /*yield*/, stakingPool.setSortedStakers(newAddresses, zeroIndexes)];
                            case 13:
                                _c.apply(void 0, [_f.sent()]).to.emit(stakingPool, "PoolSorted");
                                _d = chai_1.expect;
                                return [4 /*yield*/, stakingPool.sortedStakers(0)];
                            case 14:
                                _d.apply(void 0, [(_f.sent()).stakerAddress]).to.equal(signer3Address);
                                _e = chai_1.expect;
                                return [4 /*yield*/, stakingPool.sortedStakers(1)];
                            case 15:
                                _e.apply(void 0, [(_f.sent()).stakerAddress]).to.equal(signer2Address);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because sorted stakers can not be more than the last rank", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolAsSigner2, totemTokenAsSigner2, stakingPoolAsSigner3, totemTokenAsSigner3, stakingPoolAsSigner4, totemTokenAsSigner4, newAddresses;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                ranks = [1, 2, 0, 0, 0, 0, 0, 0];
                                percentages = [8000, 2000, 0, 0, 0, 0, 0, 0];
                                return [4 /*yield*/, deployStakingPoolProxy()];
                            case 1:
                                stakingPoolProxy = _a.sent();
                                stakingPool = stakingPoolImplementation.attach(stakingPoolProxy.address);
                                return [4 /*yield*/, rewardManager.addPool(stakingPoolProxy.address)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, totemToken.setTaxExemptStatus(stakingPoolProxy.address, true)];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 5:
                                _a.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                stakingPoolAsSigner4 = stakingPool.connect(signer4);
                                totemTokenAsSigner4 = totemToken.connect(signer4);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 6:
                                _a.sent();
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 7:
                                _a.sent();
                                return [4 /*yield*/, stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60001))];
                            case 8:
                                _a.sent();
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 9:
                                _a.sent();
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 10:
                                _a.sent();
                                return [4 /*yield*/, stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(59980))];
                            case 11:
                                _a.sent();
                                return [4 /*yield*/, totemToken.transfer(signer4Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 12:
                                _a.sent();
                                return [4 /*yield*/, totemTokenAsSigner4.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 13:
                                _a.sent();
                                return [4 /*yield*/, stakingPoolAsSigner4.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60008))];
                            case 14:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 15:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 16:
                                _a.sent();
                                newAddresses = zeroAddresses;
                                newAddresses[0] = signer2Address;
                                newAddresses[1] = signer3Address;
                                newAddresses[2] = signer4Address;
                                return [4 /*yield*/, chai_1.expect(stakingPool.setSortedStakers(newAddresses, zeroIndexes)).to.be.revertedWith("number of sorted stakers must be less than or equal to the last rank")];
                            case 17:
                                _a.sent();
                                ranks = [1, 2, 3, 10, 25, 0, 0, 0];
                                percentages = [3750, 2000, 1000, 250, 100, 0, 0, 0];
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("endPool", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("successfully ends the pool", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolAsSigner2, totemTokenAsSigner2, stakingPoolAsSigner3, totemTokenAsSigner3, stakingPoolAsSigner4, totemTokenAsSigner4, _a, _b, _c, _d, addresses, sortedStakersIndexed, winner;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _e.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _e.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                stakingPoolAsSigner3 = stakingPool.connect(signer3);
                                totemTokenAsSigner3 = totemToken.connect(signer3);
                                stakingPoolAsSigner4 = stakingPool.connect(signer4);
                                totemTokenAsSigner4 = totemToken.connect(signer4);
                                return [4 /*yield*/, mockAggregatorContract.mock.decimals.returns(8)];
                            case 3:
                                _e.sent();
                                return [4 /*yield*/, mockAggregatorContract.mock.latestRoundData.returns("73786976294838208680", ethers_1.BigNumber.from(10).pow(8).mul(60000), "1620053717", "1620053717", "73786976294838208680")];
                            case 4:
                                _e.sent();
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 5:
                                _e.sent();
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 6:
                                _e.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 7:
                                _a.apply(void 0, [_e.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60001))];
                            case 8:
                                _e.sent();
                                return [4 /*yield*/, totemToken.transfer(signer3Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 9:
                                _e.sent();
                                return [4 /*yield*/, totemTokenAsSigner3.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 10:
                                _e.sent();
                                _b = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer3Address, stakingPool.address)];
                            case 11:
                                _b.apply(void 0, [_e.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner3.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(59980))];
                            case 12:
                                _e.sent();
                                return [4 /*yield*/, totemToken.transfer(signer4Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 13:
                                _e.sent();
                                return [4 /*yield*/, totemTokenAsSigner4.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 14:
                                _e.sent();
                                _c = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer4Address, stakingPool.address)];
                            case 15:
                                _c.apply(void 0, [_e.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner4.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60021))];
                            case 16:
                                _e.sent();
                                _d = chai_1.expect;
                                return [4 /*yield*/, stakingPool.averagePricePrediction()];
                            case 17:
                                _d.apply(void 0, [_e.sent()]).to.be.equal(6000066666666);
                                return [4 /*yield*/, bep20Token.transfer(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 18:
                                _e.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 19:
                                _e.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 20:
                                _e.sent();
                                addresses = zeroAddresses;
                                addresses[0] = signer2Address;
                                addresses[1] = signer3Address;
                                addresses[2] = signer4Address;
                                sortedStakersIndexed = zeroIndexes;
                                return [4 /*yield*/, chai_1.expect(stakingPool.setSortedStakers(addresses, sortedStakersIndexed)).to.emit(stakingPool, "PoolSorted")];
                            case 21:
                                _e.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPool.endPool()).to.emit(stakingPool, "PoolMatured")];
                            case 22:
                                _e.sent();
                                return [4 /*yield*/, stakingPool.stakers(0)];
                            case 23:
                                winner = _e.sent();
                                chai_1.expect(winner.stakerAddress).to.equal(signer2Address);
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because can't end pool before maturity time", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5001)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 500000)];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPool.endPool()).to.be.revertedWith("0360 Can't end pool before the maturity time")];
                            case 4:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because wrapped token is not available", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 3:
                                _a.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPool.endPool()).to.be.revertedWith("0361 WrappedToken Rewards not available")];
                            case 5:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("reverts because stakers are not sorted yet", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var stakingPoolAsSigner2, totemTokenAsSigner2, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _b.sent();
                                stakingPoolAsSigner2 = stakingPool.connect(signer2);
                                totemTokenAsSigner2 = totemToken.connect(signer2);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, totemTokenAsSigner2.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 4:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 5:
                                _a.apply(void 0, [_b.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, stakingPoolAsSigner2.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(60001))];
                            case 6:
                                _b.sent();
                                return [4 /*yield*/, bep20Token.transfer(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 7:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 432000)];
                            case 8:
                                _b.sent();
                                return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 1296000)];
                            case 9:
                                _b.sent();
                                return [4 /*yield*/, chai_1.expect(stakingPool.endPool()).to.be.revertedWith("0362 first should sort")];
                            case 10:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("declareEmergency", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("reverts because the caller is not pool creator", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2stakingPool;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.declareEmergency()).to.be.revertedWith("0300 caller is not a pool creator")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("successfully declaring an emergency", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, stakingPool.declareEmergency()];
                            case 1:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, stakingPool.isAnEmergency()];
                            case 2:
                                _a.apply(void 0, [_b.sent()]).to.be.true;
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("emergentWithdraw", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("reverts because stakers can't call emergentWithdraw when it's not an emergency", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _b.sent();
                                signer2TotemToken = totemToken.connect(signer2);
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 3:
                                _b.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 4:
                                _b.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.allowance(signer2Address, stakingPool.address)];
                            case 5:
                                _a.apply(void 0, [_b.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(1000));
                                return [4 /*yield*/, signer2stakingPool.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(50000))];
                            case 6:
                                _b.sent();
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.emergentWithdraw()).to.be.revertedWith("it's not an emergency")];
                            case 7:
                                _b.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("stakers can call emergentWithdraw in case of emergency", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2TotemToken, signer2stakingPool, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, advanceBlockWithTime(signer1.provider, 5050)];
                            case 1:
                                _c.sent();
                                return [4 /*yield*/, stakingPool.setActivationStatus(true)];
                            case 2:
                                _c.sent();
                                signer2TotemToken = totemToken.connect(signer2);
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, totemToken.transfer(signer2Address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 3:
                                _c.sent();
                                return [4 /*yield*/, signer2TotemToken.approve(stakingPool.address, ethers_1.BigNumber.from(10).pow(18).mul(1000))];
                            case 4:
                                _c.sent();
                                return [4 /*yield*/, signer2stakingPool.stake(ethers_1.BigNumber.from(10).pow(18).mul(1000), ethers_1.BigNumber.from(10).pow(8).mul(50000))];
                            case 5:
                                _c.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(signer2Address)];
                            case 6:
                                _a.apply(void 0, [_c.sent()]).to.equal(0);
                                return [4 /*yield*/, stakingPool.declareEmergency()];
                            case 7:
                                _c.sent();
                                return [4 /*yield*/, signer2stakingPool.emergentWithdraw()];
                            case 8:
                                _c.sent();
                                _b = chai_1.expect;
                                return [4 /*yield*/, totemToken.balanceOf(signer2Address)];
                            case 9:
                                _b.apply(void 0, [_c.sent()]).to.equal(ethers_1.BigNumber.from(10).pow(18).mul(970));
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        describe("withdrawStuckTokens", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                it("withdrawStuckTokens can't be called by non-operator accounts", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var signer2stakingPool;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                signer2stakingPool = stakingPool.connect(signer2);
                                return [4 /*yield*/, chai_1.expect(signer2stakingPool.withdrawStuckTokens(bep20Token.address, oneHundred, signer2Address)).to.be.revertedWith("0300 caller is not a pool creator")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("Totem can't be withdrawn from stakingPool", function () { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, chai_1.expect(stakingPool.withdrawStuckTokens(totemToken.address, oneHundred, signer2Address)).to.be.revertedWith("0370 totems can not be transfered")];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                it("stuck tokens can be withdrawn from the stakingPool", function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0: return [4 /*yield*/, bep20Token.transfer(stakingPool.address, oneHundred)];
                            case 1:
                                _c.sent();
                                _a = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(signer4Address)];
                            case 2:
                                _a.apply(void 0, [_c.sent()]).to.equal(0);
                                return [4 /*yield*/, stakingPool.withdrawStuckTokens(bep20Token.address, oneHundred, signer4Address)];
                            case 3:
                                _c.sent();
                                _b = chai_1.expect;
                                return [4 /*yield*/, bep20Token.balanceOf(signer4Address)];
                            case 4:
                                _b.apply(void 0, [_c.sent()]).to.equal(oneHundred);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=StakingPoolImplementation.js.map