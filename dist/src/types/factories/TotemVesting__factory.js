"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotemVesting__factory = void 0;
var ethers_1 = require("ethers");
var TotemVesting__factory = /** @class */ (function (_super) {
    __extends(TotemVesting__factory, _super);
    function TotemVesting__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    TotemVesting__factory.prototype.deploy = function (_totemToken, _totalAmount, _withdrawInterval, _releasePeriods, _lockPeriods, overrides) {
        return _super.prototype.deploy.call(this, _totemToken, _totalAmount, _withdrawInterval, _releasePeriods, _lockPeriods, overrides || {});
    };
    TotemVesting__factory.prototype.getDeployTransaction = function (_totemToken, _totalAmount, _withdrawInterval, _releasePeriods, _lockPeriods, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _totemToken, _totalAmount, _withdrawInterval, _releasePeriods, _lockPeriods, overrides || {});
    };
    TotemVesting__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TotemVesting__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TotemVesting__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return TotemVesting__factory;
}(ethers_1.ContractFactory));
exports.TotemVesting__factory = TotemVesting__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "contract TotemToken",
                name: "_totemToken",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_totalAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_withdrawInterval",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_releasePeriods",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_lockPeriods",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
            },
        ],
        name: "StartTimeSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "registeredAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
            },
        ],
        name: "VestingScheduleRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "registeredAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amountWithdrawn",
                type: "uint256",
            },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newRecipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_totalAmount",
                type: "uint256",
            },
        ],
        name: "addRecipient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isStartTimeSet",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lockPeriods",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "recipients",
        outputs: [
            {
                internalType: "uint256",
                name: "totalAmount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amountWithdrawn",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "releasePeriods",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_newStartTime",
                type: "uint256",
            },
        ],
        name: "setStartTime",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "startTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totemToken",
        outputs: [
            {
                internalType: "contract TotemToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unallocatedAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "beneficiary",
                type: "address",
            },
        ],
        name: "vested",
        outputs: [
            {
                internalType: "uint256",
                name: "_amountVested",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "withdrawInterval",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "beneficiary",
                type: "address",
            },
        ],
        name: "withdrawable",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50604051610c54380380610c5483398101604081905261002f916100fe565b61003f61003a6100aa565b6100ae565b6000841161004c57600080fd5b6000831161005957600080fd5b6000821161006657600080fd5b600980546001600160a01b0319166001600160a01b03969096169590951790945560078390556008929092556004556005556006556003805460ff19169055610151565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080600060a08688031215610115578081fd5b85516001600160a01b038116811461012b578182fd5b602087015160408801516060890151608090990151929a91995097965090945092505050565b610af4806101606000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806378e97925116100a2578063eb82031211610071578063eb820312146101b6578063f2fde38b146101d7578063f361c59b146101ea578063f57c8cdf146101ff578063f7982243146102075761010b565b806378e979251461017e5780638da5cb5b14610186578063ce513b6f1461019b578063e8153c93146101ae5761010b565b80633e0a322d116100de5780633e0a322d146101485780634afe5bf31461015b5780637102b72814610163578063715018a6146101765761010b565b8063162075d8146101105780631a39d8ef1461012e5780632509e086146101365780633ccfd60b1461013e575b600080fd5b61011861021a565b6040516101259190610a23565b60405180910390f35b610118610220565b610118610226565b61014661022c565b005b610146610156366004610958565b610366565b610118610423565b6101186101713660046108f5565b610429565b6101466105c5565b61011861060e565b61018e610614565b6040516101259190610970565b6101186101a93660046108f5565b610623565b61018e610658565b6101c96101c43660046108f5565b610667565b604051610125929190610a2c565b6101466101e53660046108f5565b610680565b6101f26106f1565b604051610125919061099d565b6101186106fa565b61014661021536600461090f565b610700565b60045481565b60075481565b60065481565b60006001600061023a610853565b6001600160a01b03168152602081019190915260400160002080549091506102625750610364565b600061026f610171610853565b9050600061027e6101a9610853565b6001840183905590508015610360576009546001600160a01b031663a9059cbb6102a6610853565b836040518363ffffffff1660e01b81526004016102c4929190610984565b602060405180830381600087803b1580156102de57600080fd5b505af11580156102f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103169190610938565b61031f57600080fd5b7f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364610348610853565b82604051610357929190610984565b60405180910390a15b5050505b565b61036e610853565b6001600160a01b031661037f610614565b6001600160a01b0316146103ae5760405162461bcd60e51b81526004016103a5906109ee565b60405180910390fd5b60035460ff1615806103c1575042600254115b6103ca57600080fd5b4281116103d657600080fd5b60028190556003805460ff191660011790556040517faad53c4362ef2fe5a5390cc046e71fd8423a0a8dceebc156ac9bbcd15997eec290610418908390610a23565b60405180910390a150565b60085481565b6001600160a01b0381166000908152600160208181526040808420815180830190925280548252909201549082015260035460ff16158061046957508051155b8061047f575060065415801561047f5750600554155b8061048b575060025442105b1561049a5760009150506105c0565b60006104b360065460045461085790919063ffffffff16565b6002549091506104c3908261086a565b4210156104d5576000925050506105c0565b60006104fa6104f160055460065461086a90919063ffffffff16565b60045490610857565b60025490915061050a908261086a565b421061051a5750505190506105c0565b600061053d6004546105376002544261087690919063ffffffff16565b90610882565b610548906001610a3a565b905060065481116105605760009450505050506105c0565b60055460065461056f9161086a565b8110610582575050905191506105c09050565b60055484516000916105949190610882565b905060006105b7826105b16006548661087690919063ffffffff16565b90610857565b96505050505050505b919050565b6105cd610853565b6001600160a01b03166105de610614565b6001600160a01b0316146106045760405162461bcd60e51b81526004016103a5906109ee565b610364600061088e565b60025481565b6000546001600160a01b031690565b6001600160a01b0381166000908152600160208190526040822001546106529061064c84610429565b90610876565b92915050565b6009546001600160a01b031681565b6001602081905260009182526040909120805491015482565b610688610853565b6001600160a01b0316610699610614565b6001600160a01b0316146106bf5760405162461bcd60e51b81526004016103a5906109ee565b6001600160a01b0381166106e55760405162461bcd60e51b81526004016103a5906109a8565b6106ee8161088e565b50565b60035460ff1681565b60055481565b610708610853565b6001600160a01b0316610719610614565b6001600160a01b03161461073f5760405162461bcd60e51b81526004016103a5906109ee565b60035460ff161580610752575042600254115b61075b57600080fd5b6001600160a01b03821661076e57600080fd5b6001600160a01b038216600090815260016020526040902054156107b5576001600160a01b0382166000908152600160205260409020546008546107b19161086a565b6008555b6000811180156107c757506008548111155b6107d057600080fd5b604080518082018252828152600060208083018281526001600160a01b0387168352600191829052939091209151825591519101556008546108129082610876565b6008556040517f16e42921daee38136dc17f8420c371163ec8299e5299fb480d7aeff85cfac3eb906108479084908490610984565b60405180910390a15050565b3390565b60006108638284610a72565b9392505050565b60006108638284610a3a565b60006108638284610a91565b60006108638284610a52565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146105c057600080fd5b600060208284031215610906578081fd5b610863826108de565b60008060408385031215610921578081fd5b61092a836108de565b946020939093013593505050565b600060208284031215610949578081fd5b81518015158114610863578182fd5b600060208284031215610969578081fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b918252602082015260400190565b60008219821115610a4d57610a4d610aa8565b500190565b600082610a6d57634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610a8c57610a8c610aa8565b500290565b600082821015610aa357610aa3610aa8565b500390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212202ede136d383316f7297a3f5134649722daaafd570f047ffff7e15535af2cbf3464736f6c63430008000033";
//# sourceMappingURL=TotemVesting__factory.js.map