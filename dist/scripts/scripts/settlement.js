"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.__esModule = true;
// import { deployments } from "hardhat"
// import {task, types} from "hardhat/config";
// import "hardhat-deploy/types"
// import "@nomiclabs/hardhat-ethers";
var csv = __importStar(require("fast-csv"));
// import * as hre from "hardhat";
var https = __importStar(require("https"));
var fs = __importStar(require("fs"));
// import {StakingPoolImplementation__factory} from "../src/types/factories/StakingPoolImplementation__factory";
var ethers_1 = require("ethers");
// import JSON = Mocha.reporters.JSON;
// import {address} from "hardhat/internal/core/config/config-validation";
// import {TransactionReceipt} from "@ethersproject/abstract-provider/src.ts/index";
// import * as ethers from "ethers";
var BSC_API_KEY = "777SN5R4GNQTU1JHXA55M4QNFMGVTKCMKI";
var offset = 50;
var sort = "asc";
var module = "account";
var action = "txlist";
var baseUrl = "https://api.bscscan.com/api";
var page = 1;
var Artifact = /** @class */ (function () {
    function Artifact(format, contractName, sourceName, abi, bytecode, deployedBytecode, linkReferences, deployedLinkReferences) {
        this._format = format;
        this.contractName = contractName;
        this.sourceName = sourceName;
        this.abi = abi;
        this.bytecode = bytecode;
        this.deployedBytecode = deployedBytecode;
        this.linkReferences = linkReferences;
        this.deployedLinkReferences = deployedLinkReferences;
    }
    return Artifact;
}());
var ResponseApi = /** @class */ (function () {
    function ResponseApi(status, message, result) {
        this.status = status;
        this.message = message;
        this.result = result;
    }
    return ResponseApi;
}());
var TxDetail = /** @class */ (function () {
    function TxDetail(blockNumber, timeStamp, hash, nonce, blockHash, transactionIndex, from, to, value, gas, gasPrice, isError, txreceiptStatus, input, contractAddress, cumulativeGasUsed, gasUsed, confirmations) {
        this.blockNumber = blockNumber;
        this.timeStamp = timeStamp;
        this.hash = hash;
        this.nonce = nonce;
        this.blockHash = blockHash;
        this.transactionIndex = transactionIndex;
        this.from = from;
        this.to = to;
        this.value = value;
        this.gas = gas;
        this.gasPrice = gasPrice;
        this.isError = isError;
        this.txreceipt_status = txreceiptStatus;
        this.input = input;
        this.contractAddress = contractAddress;
        this.cumulativeGasUsed = cumulativeGasUsed;
        this.gasUsed = gasUsed;
        this.confirmations = confirmations;
    }
    return TxDetail;
}());
var PrizeRewardRate = /** @class */ (function () {
    function PrizeRewardRate(rank, percentage) {
        this.rank = rank;
        this.percentage = percentage;
    }
    return PrizeRewardRate;
}());
var LibParams = /** @class */ (function () {
    function LibParams(launchDate, lockTime, maturityTime, maturingPrice, usdPrizeAmount, prizeAmount, stakeApr, collaborativeReward, oracleDecimals, isEnhancedEnabled, isMatured) {
        this.launchDate = launchDate;
        this.lockTime = lockTime;
        this.maturityTime = maturityTime;
        this.maturingPrice = maturingPrice;
        this.usdPrizeAmount = usdPrizeAmount;
        this.prizeAmount = prizeAmount;
        this.stakeApr = stakeApr;
        this.collaborativeReward = collaborativeReward;
        this.oracleDecimals = oracleDecimals;
        this.isEnhancedEnabled = isEnhancedEnabled;
        this.isMatured = isMatured;
    }
    return LibParams;
}());
var StakeWithPrediction = /** @class */ (function () {
    function StakeWithPrediction(stakedBalance, stakedTime, amountWithdrawn, lastWithdrawalTime, pricePrediction, difference, rank, prizeRewardWithdrawn, didUnstake) {
        this.stakedBalance = stakedBalance;
        this.stakedTime = stakedTime;
        this.amountWithdrawn = amountWithdrawn;
        this.lastWithdrawalTime = lastWithdrawalTime;
        this.pricePrediction = pricePrediction;
        this.difference = difference;
        this.rank = rank;
        this.prizeRewardWithdrawn = prizeRewardWithdrawn;
        this.didUnstake = didUnstake;
    }
    return StakeWithPrediction;
}());
var Staker = /** @class */ (function () {
    function Staker(stakerAddress) {
        this.stakerAddress = stakerAddress;
        this.indexes = [];
        this.predications = [];
    }
    return Staker;
}());
var SortedStaker = /** @class */ (function () {
    function SortedStaker(stakerAddress, index, predications) {
        this.stakerAddress = stakerAddress;
        this.index = index;
        this.predication = predications;
    }
    return SortedStaker;
}());
var Report = /** @class */ (function () {
    function Report() {
        this.poolType = "";
        this.stakerAddress = "";
        this.stakedTimestamp = ethers_1.BigNumber.from(0);
        this.stakedDateTime = new Date();
        this.claimTimestamp = ethers_1.BigNumber.from(0);
        this.claimDateTime = new Date();
        this.rank = ethers_1.BigNumber.from(0);
        this.predictIndex = 0;
        this.prizeRewardWithdrawn = false;
        this.didUnstake = false;
        this.percentage = ethers_1.BigNumber.from(0);
        this.isMatured = false;
        this.maturingPrice = ethers_1.BigNumber.from(0);
        this.usdPrizeAmount = ethers_1.BigNumber.from(0);
        this.totemPrizeAmount = ethers_1.BigNumber.from(0);
        this.stakeApr = ethers_1.BigNumber.from(0);
        this.isEnhancedEnabled = false;
        this.avgPricePrediction = ethers_1.BigNumber.from(0);
        this.totalStaked = ethers_1.BigNumber.from(0);
        this.collaborativeReward = ethers_1.BigNumber.from(0);
        this.collaborativeRange = ethers_1.BigNumber.from(0);
        this.stakerTotemPrize = ethers_1.BigNumber.from(0);
        this.stakerWrappedTokenPrize = ethers_1.BigNumber.from(0);
        this.stakerStakingPrize = ethers_1.BigNumber.from(0);
        this.stakerTotalStakingReturn = ethers_1.BigNumber.from(0);
        this.claimedTotemPrize = ethers_1.BigNumber.from(0);
        this.claimedWrappedTokenPrize = ethers_1.BigNumber.from(0);
        this.claimedStakingPrize = ethers_1.BigNumber.from(0);
        this.claimedTotalStakingReturn = ethers_1.BigNumber.from(0);
    }
    return Report;
}());
var finalCollaborativeReward;
// task("findAllTx", "find all contract transactions")
//     .addParam("address", "Staking Pool Address", null, types.string)
//     .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment, runSuper) => {
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var poolAddress, fileName, csvFile, provider, account, stream, artifactFile, artifact, spiContract, spiInterface, poolType, prizeRewardRateList, sortedStakerList, stakerMap, reports, txDetails, averagePricePrediction, potentialCollabReward, collaborativeRange, totalStaked, network, blockNumber, lps, i, prizeRewardRate, error_1, i, i, staker, _a, stakerAprPrize, stakerTotemPrize, stakerWrappedTokenPrize, stakerTotalStakedBalance, report, _b, claimedTotemPrize, claimedWrappedTokenPrize, claimedStakingPrize, claimedTotalStakingReturn;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    poolAddress = ethers_1.ethers.utils.getAddress("0x0116441941a4f8379171f208ed1463d53208afb8");
                    fileName = poolAddress + ".csv";
                    csvFile = fs.createWriteStream(fileName);
                    provider = new ethers_1.ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
                    return [4 /*yield*/, provider.getSigner()];
                case 1:
                    account = _c.sent();
                    stream = csv.format({ headers: true });
                    stream.pipe(csvFile);
                    artifactFile = fs.readFileSync('/home/sina/Workspace/TotemFi/projects/totemfi/totem-contracts-v2/artifacts/contracts/Staking/StakingPoolImplementation.sol/StakingPoolImplementation.json');
                    artifact = JSON.parse(artifactFile.toString());
                    spiContract = new ethers_1.ethers.Contract(poolAddress, artifact.abi, provider);
                    spiInterface = spiContract.interface;
                    return [4 /*yield*/, spiContract.poolType()];
                case 2:
                    poolType = _c.sent();
                    prizeRewardRateList = [];
                    sortedStakerList = [];
                    reports = [];
                    txDetails = [];
                    averagePricePrediction = ethers_1.BigNumber.from(0);
                    return [4 /*yield*/, spiContract.potentialCollabReward()];
                case 3:
                    potentialCollabReward = _c.sent();
                    return [4 /*yield*/, spiContract.collaborativeRange()];
                case 4:
                    collaborativeRange = _c.sent();
                    finalCollaborativeReward = ethers_1.BigNumber.from(0);
                    return [4 /*yield*/, spiContract.totalStaked()];
                case 5:
                    totalStaked = _c.sent();
                    return [4 /*yield*/, spiContract.provider.getNetwork()];
                case 6:
                    network = _c.sent();
                    console.log("network name: " + network.name + ", network chainId: " + network.chainId);
                    return [4 /*yield*/, spiContract.provider.getBlockNumber()];
                case 7:
                    blockNumber = _c.sent();
                    console.log("blockNumber: " + blockNumber);
                    // txDetails = await getPoolTransactions(spiContract.address, blockNumber);
                    // for (let i = 0; i < txDetails.length; i++) {
                    //     stream.write(txDetails[i]);
                    // }
                    //
                    // let {
                    //     claimedTotemPrize,
                    //     claimedWrappedTokenPrize,
                    //     claimedStakingPrize,
                    //     claimedTotalStakingReturn,
                    // } = await getStakerClaimed(sortedStakerList[0], txDetails, spiInterface, spiContract);
                    // console.log(`Report ClaimedTotemPrize: ${claimedTotemPrize}`);
                    // console.log(`Report ClaimedWrappedTokenPrize: ${claimedWrappedTokenPrize}`);
                    // console.log(`Report ClaimedStakingPrize: ${claimedStakingPrize}`);
                    // console.log(`Report ClaimedTotalStakingReturn: ${claimedTotalStakingReturn}`);
                    console.log("poolType: " + poolType);
                    console.log("potentialCollabReward: " + potentialCollabReward);
                    console.log("collaborativeRange: " + collaborativeRange);
                    console.log("totalStaked: " + totalStaked);
                    console.log();
                    console.log("================================================");
                    return [4 /*yield*/, spiContract.lps()];
                case 8:
                    lps = _c.sent();
                    console.log("LPS.launchDate: " + lps.launchDate);
                    console.log("LPS.lockTime: " + lps.lockTime);
                    console.log("LPS.maturityTime: " + lps.maturityTime);
                    console.log("LPS.maturingPrice: " + lps.maturingPrice);
                    console.log("LPS.usdPrizeAmount: " + lps.usdPrizeAmount);
                    console.log("LPS.prizeAmount: " + lps.prizeAmount);
                    console.log("LPS.stakeApr: " + lps.stakeApr);
                    console.log("LPS.collaborativeReward: " + lps.collaborativeReward);
                    console.log("LPS.oracleDecimals: " + lps.oracleDecimals);
                    console.log("LPS.isEnhancedEnabled: " + lps.isEnhancedEnabled);
                    console.log("LPS.isMatured: " + lps.isMatured);
                    if (!lps.isMatured) {
                        console.log("the Staking pool isn't matured . . .");
                        return [2 /*return*/];
                    }
                    console.log();
                    console.log("================================================");
                    i = 0;
                    _c.label = 9;
                case 9:
                    if (!(i < 8)) return [3 /*break*/, 14];
                    _c.label = 10;
                case 10:
                    _c.trys.push([10, 12, , 13]);
                    return [4 /*yield*/, spiContract.prizeRewardRates(ethers_1.ethers.BigNumber.from(i))];
                case 11:
                    prizeRewardRate = _c.sent();
                    if (prizeRewardRate.percentage.eq(ethers_1.BigNumber.from(0)))
                        return [3 /*break*/, 14];
                    prizeRewardRateList.push(prizeRewardRate);
                    console.log("*************************************************");
                    console.log("PrizeRewardRate index: " + i);
                    console.log("rank: " + prizeRewardRate.rank);
                    console.log("percentage: " + prizeRewardRate.percentage);
                    return [3 /*break*/, 13];
                case 12:
                    error_1 = _c.sent();
                    console.log("spiContract.prizeRewardRates failed, index: " + i + ", error: " + error_1);
                    return [3 /*break*/, 14];
                case 13:
                    i++;
                    return [3 /*break*/, 9];
                case 14: return [4 /*yield*/, getStakers(spiContract)];
                case 15:
                    stakerMap = _c.sent();
                    return [4 /*yield*/, getSortedStakers(spiContract, stakerMap)];
                case 16:
                    sortedStakerList = _c.sent();
                    // calculate collaborativeReward
                    console.log("Calculate collaborativeReward . . . ");
                    if (potentialCollabReward > 0) {
                        averagePricePrediction = getAveragePricePrediction(Array.from(stakerMap.values()), totalStaked);
                        if (getDifference(averagePricePrediction, collaborativeRange, lps.maturingPrice).eq(0)) {
                            finalCollaborativeReward = potentialCollabReward;
                        }
                    }
                    console.log("collaborative Reward: " + finalCollaborativeReward);
                    console.log();
                    console.log("================================================");
                    console.log("stating get pool transactions . . .");
                    return [4 /*yield*/, getPoolTransactions(spiContract.address, blockNumber)];
                case 17:
                    txDetails = _c.sent();
                    console.log("contractAddress: " + poolAddress);
                    console.log("total transactions: " + txDetails.length);
                    for (i = 0; i < txDetails.length; i++) {
                        console.log("*************************************************");
                        console.log("Tx index: " + i);
                        console.log("TxHash: " + txDetails[i].hash);
                        console.log("From: " + txDetails[i].from);
                        console.log("To: " + txDetails[i].to);
                        console.log("BlockNumber: " + txDetails[i].blockNumber);
                        console.log("BlockHash: " + txDetails[i].blockHash);
                        console.log("Timestamp: " + txDetails[i].timeStamp);
                        console.log("DateTime: " + new Date(Number(txDetails[i].timeStamp) * 1000));
                        console.log("TxReceiptStatus: " + txDetails[i].txreceipt_status);
                        console.log("IsError: " + txDetails[i].isError);
                    }
                    console.log();
                    console.log("================================================");
                    i = 0;
                    _c.label = 18;
                case 18:
                    if (!(i < sortedStakerList.length)) return [3 /*break*/, 22];
                    console.log("*************************************************");
                    staker = stakerMap.get(sortedStakerList[i].stakerAddress);
                    if (!staker) return [3 /*break*/, 20];
                    _a = calculateReward(staker, lps, prizeRewardRateList), stakerAprPrize = _a.stakerAprPrize, stakerTotemPrize = _a.stakerTotemPrize, stakerWrappedTokenPrize = _a.stakerWrappedTokenPrize, stakerTotalStakedBalance = _a.stakerTotalStakedBalance;
                    report = new Report();
                    report.poolType = poolType;
                    report.stakerAddress = staker.stakerAddress;
                    report.stakedTimestamp = sortedStakerList[i].predication.stakedTime;
                    report.stakedDateTime = new Date(sortedStakerList[i].predication.stakedTime.toNumber() * 1000);
                    report.claimTimestamp = sortedStakerList[i].predication.lastWithdrawalTime;
                    report.claimDateTime = new Date(sortedStakerList[i].predication.lastWithdrawalTime.toNumber() * 1000);
                    report.rank = sortedStakerList[i].predication.rank;
                    report.predictIndex = sortedStakerList[i].index;
                    report.percentage = getStakerRankPercentage(prizeRewardRateList, sortedStakerList[i].predication.rank);
                    report.isMatured = lps.isMatured;
                    report.maturingPrice = lps.maturingPrice;
                    report.usdPrizeAmount = lps.usdPrizeAmount;
                    report.totemPrizeAmount = lps.prizeAmount;
                    report.stakeApr = lps.stakeApr;
                    report.isEnhancedEnabled = lps.isEnhancedEnabled;
                    report.avgPricePrediction = averagePricePrediction;
                    report.totalStaked = totalStaked;
                    report.collaborativeReward = finalCollaborativeReward;
                    report.collaborativeRange = collaborativeRange;
                    report.stakerTotemPrize = stakerTotemPrize;
                    report.stakerWrappedTokenPrize = stakerWrappedTokenPrize;
                    report.stakerStakingPrize = stakerAprPrize;
                    report.stakerTotalStakingReturn = stakerTotalStakedBalance;
                    report.prizeRewardWithdrawn = sortedStakerList[i].predication.prizeRewardWithdrawn;
                    report.didUnstake = sortedStakerList[i].predication.didUnstake;
                    return [4 /*yield*/, getStakerClaimed(sortedStakerList[i], txDetails, spiInterface, spiContract)];
                case 19:
                    _b = _c.sent(), claimedTotemPrize = _b.claimedTotemPrize, claimedWrappedTokenPrize = _b.claimedWrappedTokenPrize, claimedStakingPrize = _b.claimedStakingPrize, claimedTotalStakingReturn = _b.claimedTotalStakingReturn;
                    report.claimedTotemPrize = claimedTotemPrize;
                    report.claimedWrappedTokenPrize = claimedWrappedTokenPrize;
                    report.claimedStakingPrize = claimedStakingPrize;
                    report.claimedTotalStakingReturn = claimedTotalStakingReturn;
                    reports.push(report);
                    console.log("Report Index: " + i);
                    console.log("Report StakerAddress: " + report.stakerAddress);
                    console.log("Report StakedTime: " + report.stakedTimestamp);
                    console.log("Report ClaimTime: " + report.claimTimestamp);
                    console.log("Report Rank: " + report.rank);
                    console.log("Report Percentage: " + report.percentage);
                    console.log("Report IsMatured: " + report.isMatured);
                    console.log("Report MaturingPrice: " + report.maturingPrice);
                    console.log("Report UsdPrizeAmount: " + report.usdPrizeAmount);
                    console.log("Report TotemPrizeAmount: " + report.totemPrizeAmount);
                    console.log("Report StakeApr: " + report.stakeApr);
                    console.log("Report IsEnhancedEnabled: " + report.isEnhancedEnabled);
                    console.log("Report AvgPricePrediction: " + report.avgPricePrediction);
                    console.log("Report TotalStaked: " + report.totalStaked);
                    console.log("Report CollaborativeReward: " + report.collaborativeReward);
                    console.log("Report CollaborativeRange: " + report.collaborativeRange);
                    console.log("Report StakerTotemPrize: " + report.stakerTotemPrize);
                    console.log("Report StakerWrappedTokenPrize: " + report.stakerWrappedTokenPrize);
                    console.log("Report StakerStakingPrize: " + report.stakerStakingPrize);
                    console.log("Report StakerTotalStakingReturn: " + report.stakerTotalStakingReturn);
                    console.log("Report ClaimedTotemPrize: " + report.claimedTotemPrize);
                    console.log("Report ClaimedWrappedTokenPrize: " + report.claimedWrappedTokenPrize);
                    console.log("Report ClaimedStakingPrize: " + report.claimedStakingPrize);
                    console.log("Report ClaimedTotalStakingReturn: " + report.claimedTotalStakingReturn);
                    stream.write(report);
                    return [3 /*break*/, 21];
                case 20:
                    console.log("sortedStaker not found in stakers map, " + staker + " ");
                    _c.label = 21;
                case 21:
                    i++;
                    return [3 /*break*/, 18];
                case 22:
                    stream.end();
                    return [2 /*return*/];
            }
        });
    });
}
function getPoolTransactions(address, blockNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var txDetails, bscScanUrl, data, responseApi;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    txDetails = [];
                    _a.label = 1;
                case 1:
                    bscScanUrl = new URL(baseUrl);
                    bscScanUrl.searchParams.append("module", module);
                    bscScanUrl.searchParams.append("action", action);
                    bscScanUrl.searchParams.append("address", address);
                    bscScanUrl.searchParams.append("startblock", "1");
                    bscScanUrl.searchParams.append("endblock", blockNumber.toString());
                    bscScanUrl.searchParams.append("page", page.toString());
                    bscScanUrl.searchParams.append("offset", offset.toString());
                    bscScanUrl.searchParams.append("sort", sort);
                    bscScanUrl.searchParams.append("apikey", BSC_API_KEY);
                    return [4 /*yield*/, getTransactions(bscScanUrl)];
                case 2:
                    data = _a.sent();
                    responseApi = JSON.parse(data);
                    if (responseApi.status === "0") {
                        return [3 /*break*/, 4];
                    }
                    txDetails.push.apply(txDetails, responseApi.result);
                    page++;
                    _a.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [2 /*return*/, txDetails];
            }
        });
    });
}
function getStakerClaimed(staker, txDetails, spiInterface, spiContract) {
    return __awaiter(this, void 0, void 0, function () {
        var claimReward, withdrawTotemPrizeEvent, WithdrawStakingReturnEvent, WithdrawWrappedTokenPrizeEvent, UnstakedEvent, claimedTotemPrize, claimedWrappedTokenPrize, claimedStakingPrize, claimedTotalStakingReturn, i, txReceipt, data, j;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    claimReward = spiInterface.functions["claimReward()"];
                    withdrawTotemPrizeEvent = "0x723b06f6c3a94dc82019852e6aa01c0241fba5f84410b9003ddc3440ad499e59";
                    WithdrawStakingReturnEvent = "0x115e2fe760f98d4fd0828d7741ae2070e7db700f892efbfe98448b53ac583886";
                    WithdrawWrappedTokenPrizeEvent = "0xd93fc6d1e8779271f55cdb0d5f7b6b05be64a2226a1ad050d3036f5609c1cdcf";
                    UnstakedEvent = "0x85082129d87b2fe11527cb1b3b7a520aeb5aa6913f88a3d8757fe40d1db02fdd";
                    claimedTotemPrize = ethers_1.BigNumber.from(0);
                    claimedWrappedTokenPrize = ethers_1.BigNumber.from(0);
                    claimedStakingPrize = ethers_1.BigNumber.from(0);
                    claimedTotalStakingReturn = ethers_1.BigNumber.from(0);
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < txDetails.length)) return [3 /*break*/, 4];
                    try {
                        spiInterface.decodeFunctionData(claimReward, txDetails[i].input);
                    }
                    catch (e) {
                        return [3 /*break*/, 3];
                    }
                    if (!(staker.stakerAddress.toLowerCase() === txDetails[i].from.toLowerCase())) return [3 /*break*/, 3];
                    console.log("*****************************************************");
                    console.log("tx a claimReward hash: " + txDetails[i].hash + ", from: " + txDetails[i].from);
                    return [4 /*yield*/, spiContract.provider.getTransactionReceipt(txDetails[i].hash)];
                case 2:
                    txReceipt = _a.sent();
                    data = void 0;
                    try {
                        for (j = 0; j < txReceipt.logs.length; j++) {
                            // console.log(`tx log ${j}: ${JSON.stringify(txReceipt.logs[j])}`);
                            // data = spiInterface.parseLog(txReceipt.logs[j])
                            // console.log(`tx arg[0]: ${data.args[0]}`);
                            // spiInterface.events["WithdrawTotemPrize(address,uint256)"].inputs[0].
                            if (withdrawTotemPrizeEvent === txReceipt.logs[j].topics[0]) {
                                data = spiInterface.decodeEventLog(withdrawTotemPrizeEvent, txReceipt.logs[j].data, txReceipt.logs[j].topics);
                                // console.log(`tx withdrawTotemPrizeEvent log data: ${JSON.stringify(data)} `);
                                // console.log(`tx withdrawTotemPrizeEvent log data: ${data[1]} `);
                                claimedTotemPrize = ethers_1.BigNumber.from(data[1]);
                            }
                            else if (WithdrawStakingReturnEvent === txReceipt.logs[j].topics[0]) {
                                data = spiInterface.decodeEventLog(WithdrawStakingReturnEvent, txReceipt.logs[j].data, txReceipt.logs[j].topics);
                                // console.log(`tx WithdrawStakingReturnEvent log data: ${JSON.stringify(data)} `);
                                // console.log(`tx WithdrawStakingReturnEvent log data: ${data[1]} `);
                                claimedStakingPrize = ethers_1.BigNumber.from(data[1]);
                            }
                            else if (WithdrawWrappedTokenPrizeEvent === txReceipt.logs[j].topics[0]) {
                                data = spiInterface.decodeEventLog(WithdrawWrappedTokenPrizeEvent, txReceipt.logs[j].data, txReceipt.logs[j].topics);
                                // console.log(`tx WithdrawWrappedTokenPrizeEvent log data: ${JSON.stringify(data)} `);
                                // console.log(`tx WithdrawWrappedTokenPrizeEvent log data: ${data[1]} `);
                                claimedWrappedTokenPrize = ethers_1.BigNumber.from(data[1]);
                            }
                            else if (UnstakedEvent === txReceipt.logs[j].topics[0]) {
                                data = spiInterface.decodeEventLog(UnstakedEvent, txReceipt.logs[j].data, txReceipt.logs[j].topics);
                                // console.log(`tx UnstakedEvent log data: ${JSON.stringify(data)} `);
                                // console.log(`tx UnstakedEvent log data: ${data[1]} `);
                                claimedTotalStakingReturn = ethers_1.BigNumber.from(data[1]);
                            }
                        }
                    }
                    catch (e) {
                        console.log("parse event error tx: " + txDetails[i].hash + ", from: " + txDetails[i].from);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, {
                        claimedTotemPrize: claimedTotemPrize,
                        claimedWrappedTokenPrize: claimedWrappedTokenPrize,
                        claimedStakingPrize: claimedStakingPrize,
                        claimedTotalStakingReturn: claimedTotalStakingReturn
                    }];
            }
        });
    });
}
function getSortedStakers(spiContract, mapStakers) {
    return __awaiter(this, void 0, void 0, function () {
        var sortedStakerList, i, stakerContract, staker, index, sortedStaker, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sortedStakerList = [];
                    console.log();
                    console.log("================================================");
                    console.log("Get Sorted Stakers . . . ");
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 25)) return [3 /*break*/, 6];
                    console.log("*************************************************");
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, spiContract.sortedStakers(ethers_1.ethers.BigNumber.from(i))];
                case 3:
                    stakerContract = _a.sent();
                    staker = mapStakers.get(stakerContract.stakerAddress);
                    if (!staker) {
                        console.log("sortedStakers inconsistent with stakers, stakerContract: " + stakerContract);
                        return [3 /*break*/, 5];
                    }
                    index = stakerContract.index.toNumber();
                    if (!staker.predications[index]) {
                        console.log("specific sortedStakers index not found in stakers, stakerContract: " + stakerContract);
                        return [3 /*break*/, 5];
                    }
                    sortedStaker = new SortedStaker(stakerContract.stakerAddress, index, staker.predications[index]);
                    sortedStakerList.push(sortedStaker);
                    console.log("Sorted Staker Rank: " + i);
                    console.log("Sorted Staker Prediction Index: " + index);
                    console.log("Sorted Staker Address: " + sortedStaker.stakerAddress);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log("spiContract.sortedStakers failed, " + err_1);
                    return [3 /*break*/, 6];
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6: 
                // console.log(`================================================`);
                // for (let i = 0; i < 25; i++) {
                //     for (let j = 0; j < 30; j++) {
                //         let staker = sortedStakerList[i];
                //         try {
                //             let prediction: StakeWithPrediction = await spiContract.predictions(staker.stakerAddress, ethers.BigNumber.from(j));
                //             staker.predications.push(prediction);
                //             console.log(`*************************************************`);
                //             console.log(`Sorted Staker Prediction Index: ${j}`);
                //             console.log(`Sorted Staker Prediction StakeBalance: ${prediction.stakedBalance}`);
                //             console.log(`Sorted Staker Prediction stakedTime: ${prediction.stakedTime}`);
                //             console.log(`Sorted Staker Prediction amountWithdrawn: ${prediction.amountWithdrawn}`);
                //             console.log(`Sorted Staker Prediction lastWithdrawalTime: ${prediction.lastWithdrawalTime}`);
                //             console.log(`Sorted Staker Prediction pricePrediction: ${prediction.pricePrediction}`);
                //             console.log(`Sorted Staker Prediction difference: ${prediction.difference}`);
                //             console.log(`Sorted Staker Prediction rank: ${prediction.rank}`);
                //             console.log(`Sorted Staker Prediction prizeRewardWithdrawn: ${prediction.prizeRewardWithdrawn}`);
                //             console.log(`Sorted Staker Prediction didUnstake: ${prediction.didUnstake}`);
                //         } catch (err) {
                //             console.log(`spiContract.predictions failed, ${err}`);
                //             break;
                //         }
                //     }
                // }
                return [2 /*return*/, sortedStakerList];
            }
        });
    });
}
function getStakers(spiContract) {
    return __awaiter(this, void 0, void 0, function () {
        var stakerMap, result, addresses, indexes, i, staker, index, _i, _a, staker, i, prediction, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    stakerMap = new Map();
                    console.log();
                    console.log("================================================");
                    console.log("Get Stakers . . . ");
                    return [4 /*yield*/, spiContract.getStakers()];
                case 1:
                    result = _b.sent();
                    addresses = result[0];
                    indexes = result[1];
                    console.log("number of stakers: " + addresses.length + " ");
                    for (i = 0; i < addresses.length; i++) {
                        console.log("*************************************************");
                        staker = stakerMap.get(addresses[i]);
                        index = ethers_1.BigNumber.from(indexes[i]).toNumber();
                        if (staker) {
                            staker.indexes.push(index);
                        }
                        else {
                            staker = new Staker(addresses[i]);
                            staker.indexes.push(index);
                            stakerMap.set(staker.stakerAddress, staker);
                        }
                        console.log("Staker Count: " + i);
                        console.log("Staker Stake Index: " + indexes[i]);
                        console.log("Staker Stake Indexes: " + staker.indexes);
                        console.log("Staker Address: " + staker.stakerAddress);
                    }
                    console.log("================================================");
                    _i = 0, _a = Array.from(stakerMap.values());
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    staker = _a[_i];
                    i = 0;
                    _b.label = 3;
                case 3:
                    if (!(i < staker.indexes.length)) return [3 /*break*/, 8];
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, spiContract.predictions(staker.stakerAddress, staker.indexes[i])];
                case 5:
                    prediction = _b.sent();
                    staker.predications.push(prediction);
                    console.log("*************************************************");
                    console.log("Staker Prediction Index: " + staker.indexes[i]);
                    console.log("Staker Address: " + staker.stakerAddress);
                    console.log("Staker Prediction StakeBalance: " + prediction.stakedBalance);
                    console.log("Staker Prediction stakedTime: " + prediction.stakedTime);
                    console.log("Staker Prediction amountWithdrawn: " + prediction.amountWithdrawn);
                    console.log("Staker Prediction lastWithdrawalTime: " + prediction.lastWithdrawalTime);
                    console.log("Staker Prediction pricePrediction: " + prediction.pricePrediction);
                    console.log("Staker Prediction difference: " + prediction.difference);
                    console.log("Staker Prediction rank: " + prediction.rank);
                    console.log("Staker Prediction prizeRewardWithdrawn: " + prediction.prizeRewardWithdrawn);
                    console.log("Staker Prediction didUnstake: " + prediction.didUnstake);
                    return [3 /*break*/, 7];
                case 6:
                    err_2 = _b.sent();
                    console.log("spiContract.predictions failed, " + err_2);
                    return [3 /*break*/, 8];
                case 7:
                    i++;
                    return [3 /*break*/, 3];
                case 8:
                    _i++;
                    return [3 /*break*/, 2];
                case 9: return [2 /*return*/, stakerMap];
            }
        });
    });
}
function getStakerRankPercentage(prizeRewardRateList, rank) {
    for (var i = 0; i < prizeRewardRateList.length; i++) {
        if (rank.lte(prizeRewardRateList[i].rank)) {
            return prizeRewardRateList[i].percentage;
        }
    }
    return ethers_1.BigNumber.from(0);
}
function getAveragePricePrediction(stakers, totalStaked) {
    if (totalStaked.eq(ethers_1.ethers.BigNumber.from(0)))
        return ethers_1.ethers.BigNumber.from(0);
    var avgPricePrediction = ethers_1.ethers.BigNumber.from(0);
    for (var i = 0; i < stakers.length; i++) {
        for (var j = 0; j < stakers[i].predications.length; j++) {
            avgPricePrediction = avgPricePrediction.add(stakers[i].predications[j].pricePrediction.mul(stakers[i].predications[j].stakedBalance));
        }
    }
    avgPricePrediction = avgPricePrediction.div(totalStaked);
    return avgPricePrediction;
}
function getDifference(prediction, range, maturingPrice) {
    if (range.gt(prediction))
        return ethers_1.BigNumber.from(0);
    if (prediction > maturingPrice) {
        if (prediction.sub(range) <= maturingPrice)
            return ethers_1.BigNumber.from(0);
        else
            return prediction.sub(range).sub(maturingPrice);
    }
    else {
        if (prediction.add(range) >= maturingPrice)
            return ethers_1.BigNumber.from(0);
        else
            return maturingPrice.sub(prediction.add(range));
    }
}
function calcRewardPerStake(totalRewardRate, timeDuration, stakedBalance) {
    var yearInSeconds = ethers_1.BigNumber.from(365).mul(24).mul(60).mul(60);
    var first = yearInSeconds.pow(2).mul(ethers_1.BigNumber.from(10).pow(8));
    var second = timeDuration.mul(totalRewardRate).mul(yearInSeconds).mul(5000);
    var third = totalRewardRate.mul(yearInSeconds.pow(2)).mul(5000);
    var forth = timeDuration.pow(2).mul(totalRewardRate.pow(2)).div(6);
    var fifth = timeDuration.mul(totalRewardRate.pow(2)).mul(yearInSeconds).div(2);
    var sixth = totalRewardRate.pow(2).mul(yearInSeconds.pow(2)).div(3);
    var rewardPerStake = first.add(second).add(forth).add(sixth);
    rewardPerStake = rewardPerStake.sub(third).sub(fifth);
    rewardPerStake = rewardPerStake.mul(totalRewardRate).mul(timeDuration);
    rewardPerStake = rewardPerStake
        .mul(stakedBalance)
        .div(yearInSeconds.pow(3))
        .div(ethers_1.BigNumber.from(10).pow(12));
    return rewardPerStake;
}
function getEnhancedRewardRate(stakedTime, lps) {
    if (!lps.isEnhancedEnabled) {
        return ethers_1.BigNumber.from(0);
    }
    var lockDate = lps.launchDate.add(lps.lockTime);
    var difference = lockDate.sub(stakedTime);
    if (difference.lt(ethers_1.BigNumber.from(48 * 60 * 60))) {
        return ethers_1.BigNumber.from(0);
    }
    else if (difference.lt(ethers_1.BigNumber.from(72 * 60 * 60))) {
        return ethers_1.BigNumber.from(100);
    }
    else if (difference.lt(ethers_1.BigNumber.from(96 * 60 * 60))) {
        return ethers_1.BigNumber.from(200);
    }
    else if (difference.lt(ethers_1.BigNumber.from(120 * 60 * 60))) {
        return ethers_1.BigNumber.from(300);
    }
    else if (difference.lt(ethers_1.BigNumber.from(144 * 60 * 60))) {
        return ethers_1.BigNumber.from(400);
    }
    else {
        return ethers_1.BigNumber.from(500);
    }
}
function getStakingRewardPerStake(prediction, lps) {
    var timeTo = prediction.lastWithdrawalTime;
    var enhancedApr = ethers_1.BigNumber.from(0);
    if (lps.isEnhancedEnabled) {
        enhancedApr = getEnhancedRewardRate(prediction.stakedTime, lps);
    }
    var rewardPerStake = calcRewardPerStake(lps.stakeApr.add(enhancedApr), timeTo.sub(prediction.stakedTime), prediction.stakedBalance);
    return rewardPerStake;
}
function calcStakingAprRewards(staker, lps) {
    var reward = ethers_1.BigNumber.from(0);
    for (var j = 0; j < staker.predications.length; j++) {
        var rewardPerStake = getStakingRewardPerStake(staker.predications[j], lps);
        reward = reward.add(rewardPerStake);
    }
    return reward;
}
function getPercentageReward(rank, prizeRewardRates) {
    for (var i = 0; i < prizeRewardRates.length; i++) {
        if (rank.lte(prizeRewardRates[i].rank)) {
            return prizeRewardRates[i].percentage;
        }
    }
    return ethers_1.BigNumber.from(0);
}
function getPrize(staker, lps, prizeRewardRates) {
    if (!lps.isMatured)
        return {
            totemReward: ethers_1.BigNumber.from(0),
            wrappedTokenReward: ethers_1.BigNumber.from(0)
        };
    var maturingWrappedTokenPrizeAmount = (lps.usdPrizeAmount.mul(ethers_1.BigNumber.from(10).pow(lps.oracleDecimals))).div(lps.maturingPrice);
    var reward = ethers_1.BigNumber.from(0);
    var wrappedTokenReward = ethers_1.BigNumber.from(0);
    for (var i = 0; i < staker.predications.length; i++) {
        var percent = getPercentageReward(staker.predications[i].rank, prizeRewardRates);
        reward = reward.add(lps.prizeAmount.mul(percent).div(10000));
        wrappedTokenReward = wrappedTokenReward.add(maturingWrappedTokenPrizeAmount.mul(percent).div(10000));
    }
    if (finalCollaborativeReward.gt("0")) {
        reward = reward.add(reward.mul(finalCollaborativeReward).div(10000));
        wrappedTokenReward = wrappedTokenReward.add(wrappedTokenReward.mul(finalCollaborativeReward).div(10000));
    }
    return {
        totemReward: reward,
        wrappedTokenReward: wrappedTokenReward
    };
}
function getTotalStakedBalance(staker) {
    if (staker.predications.length === 0)
        return ethers_1.BigNumber.from(0);
    var totalStakedBalance = ethers_1.BigNumber.from(0);
    for (var i = 0; i < staker.predications.length; i++) {
        totalStakedBalance = totalStakedBalance.add(staker.predications[i].stakedBalance);
    }
    return totalStakedBalance;
}
function calculateReward(staker, lps, prizeRewardRates) {
    var stakingAprReward = calcStakingAprRewards(staker, lps);
    var _a = getPrize(staker, lps, prizeRewardRates), totemReward = _a.totemReward, wrappedTokenReward = _a.wrappedTokenReward;
    var totalStakedBalance = getTotalStakedBalance(staker);
    return {
        stakerAprPrize: stakingAprReward,
        stakerTotemPrize: totemReward,
        stakerWrappedTokenPrize: wrappedTokenReward,
        stakerTotalStakedBalance: totalStakedBalance
    };
}
function getTransactions(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // Return new promise
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    // Do async job
                    https.get(url.href, function (res) {
                        if (res.statusCode != 200) {
                            reject(res.statusCode);
                        }
                        else {
                            var data_1 = '';
                            res.on('data', function (chunk) {
                                data_1 += chunk;
                            });
                            res.on('close', function () {
                                // console.log('Retrieved all data: ' + data);
                                resolve(data_1);
                            });
                        }
                    }).end();
                })];
        });
    });
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main();
// .then(() => process.exit(0))
// .catch((error) => {
//         console.error(error);
//         process.exit(1);
// });
// exports.module = main
