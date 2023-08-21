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
exports.AdvisorsVesting__factory = void 0;
var ethers_1 = require("ethers");
var AdvisorsVesting__factory = /** @class */ (function (_super) {
    __extends(AdvisorsVesting__factory, _super);
    function AdvisorsVesting__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    AdvisorsVesting__factory.prototype.deploy = function (_totemToken, overrides) {
        return _super.prototype.deploy.call(this, _totemToken, overrides || {});
    };
    AdvisorsVesting__factory.prototype.getDeployTransaction = function (_totemToken, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _totemToken, overrides || {});
    };
    AdvisorsVesting__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AdvisorsVesting__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AdvisorsVesting__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return AdvisorsVesting__factory;
}(ethers_1.ContractFactory));
exports.AdvisorsVesting__factory = AdvisorsVesting__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "contract TotemToken",
                name: "_totemToken",
                type: "address",
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
        inputs: [],
        name: "LOCK_PERIODS",
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
        name: "RELEASE_PERIODS",
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
        name: "TOTAL_AMOUNT",
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
        name: "WITHDRAW_INTERVAL",
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
var _bytecode = "0x608060405234801561001057600080fd5b50604051610cae380380610cae83398101604081905261002f91610113565b8069b3fe97a2fafd2f40000062278d00600c600061005361004e6100bf565b6100c3565b6000841161006057600080fd5b6000831161006d57600080fd5b6000821161007a57600080fd5b600980546001600160a01b0319166001600160a01b0396909616959095179094556007839055600892909255600455600555600655506003805460ff19169055610141565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610124578081fd5b81516001600160a01b038116811461013a578182fd5b9392505050565b610b5e806101506000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063715018a6116100b8578063e8153c931161007c578063e8153c93146101f9578063eb82031214610201578063f2fde38b14610222578063f361c59b14610235578063f57c8cdf1461024a578063f79822431461025257610136565b8063715018a6146101b957806378e97925146101c15780638da5cb5b146101c9578063a2d7f5e3146101de578063ce513b6f146101e657610136565b80633ccfd60b116100ff5780633ccfd60b146101795780633e0a322d14610183578063494051a0146101965780634afe5bf31461019e5780637102b728146101a657610136565b8062ad3a231461013b578063162075d8146101595780631a39d8ef146101615780632509e0861461016957806330c6b5eb14610171575b600080fd5b610143610265565b6040516101509190610a8d565b60405180910390f35b61014361026a565b610143610270565b610143610276565b61014361027c565b610181610283565b005b6101816101913660046109c2565b6103bd565b61014361047a565b61014361047f565b6101436101b436600461095f565b610485565b610181610621565b61014361066a565b6101d1610670565b60405161015091906109da565b61014361067f565b6101436101f436600461095f565b61068d565b6101d16106c2565b61021461020f36600461095f565b6106d1565b604051610150929190610a96565b61018161023036600461095f565b6106ea565b61023d61075b565b6040516101509190610a07565b610143610764565b610181610260366004610979565b61076a565b600c81565b60045481565b60075481565b60065481565b62278d0081565b6000600160006102916108bd565b6001600160a01b03168152602081019190915260400160002080549091506102b957506103bb565b60006102c66101b46108bd565b905060006102d56101f46108bd565b60018401839055905080156103b7576009546001600160a01b031663a9059cbb6102fd6108bd565b836040518363ffffffff1660e01b815260040161031b9291906109ee565b602060405180830381600087803b15801561033557600080fd5b505af1158015610349573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036d91906109a2565b61037657600080fd5b7f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a942436461039f6108bd565b826040516103ae9291906109ee565b60405180910390a15b5050505b565b6103c56108bd565b6001600160a01b03166103d6610670565b6001600160a01b0316146104055760405162461bcd60e51b81526004016103fc90610a58565b60405180910390fd5b60035460ff161580610418575042600254115b61042157600080fd5b42811161042d57600080fd5b60028190556003805460ff191660011790556040517faad53c4362ef2fe5a5390cc046e71fd8423a0a8dceebc156ac9bbcd15997eec29061046f908390610a8d565b60405180910390a150565b600081565b60085481565b6001600160a01b0381166000908152600160208181526040808420815180830190925280548252909201549082015260035460ff1615806104c557508051155b806104db57506006541580156104db5750600554155b806104e7575060025442105b156104f657600091505061061c565b600061050f6006546004546108c190919063ffffffff16565b60025490915061051f90826108d4565b4210156105315760009250505061061c565b600061055661054d6005546006546108d490919063ffffffff16565b600454906108c1565b60025490915061056690826108d4565b421061057657505051905061061c565b6000610599600454610593600254426108e090919063ffffffff16565b906108ec565b6105a4906001610aa4565b905060065481116105bc57600094505050505061061c565b6005546006546105cb916108d4565b81106105de5750509051915061061c9050565b60055484516000916105f091906108ec565b905060006106138261060d600654866108e090919063ffffffff16565b906108c1565b96505050505050505b919050565b6106296108bd565b6001600160a01b031661063a610670565b6001600160a01b0316146106605760405162461bcd60e51b81526004016103fc90610a58565b6103bb60006108f8565b60025481565b6000546001600160a01b031690565b69b3fe97a2fafd2f40000081565b6001600160a01b0381166000908152600160208190526040822001546106bc906106b684610485565b906108e0565b92915050565b6009546001600160a01b031681565b6001602081905260009182526040909120805491015482565b6106f26108bd565b6001600160a01b0316610703610670565b6001600160a01b0316146107295760405162461bcd60e51b81526004016103fc90610a58565b6001600160a01b03811661074f5760405162461bcd60e51b81526004016103fc90610a12565b610758816108f8565b50565b60035460ff1681565b60055481565b6107726108bd565b6001600160a01b0316610783610670565b6001600160a01b0316146107a95760405162461bcd60e51b81526004016103fc90610a58565b60035460ff1615806107bc575042600254115b6107c557600080fd5b6001600160a01b0382166107d857600080fd5b6001600160a01b0382166000908152600160205260409020541561081f576001600160a01b03821660009081526001602052604090205460085461081b916108d4565b6008555b60008111801561083157506008548111155b61083a57600080fd5b604080518082018252828152600060208083018281526001600160a01b03871683526001918290529390912091518255915191015560085461087c90826108e0565b6008556040517f16e42921daee38136dc17f8420c371163ec8299e5299fb480d7aeff85cfac3eb906108b190849084906109ee565b60405180910390a15050565b3390565b60006108cd8284610adc565b9392505050565b60006108cd8284610aa4565b60006108cd8284610afb565b60006108cd8284610abc565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461061c57600080fd5b600060208284031215610970578081fd5b6108cd82610948565b6000806040838503121561098b578081fd5b61099483610948565b946020939093013593505050565b6000602082840312156109b3578081fd5b815180151581146108cd578182fd5b6000602082840312156109d3578081fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b918252602082015260400190565b60008219821115610ab757610ab7610b12565b500190565b600082610ad757634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610af657610af6610b12565b500290565b600082821015610b0d57610b0d610b12565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220004229d1a3c7adaa27f83c89322905b098957cd4deda2fa061cec89e6c6ceff264736f6c63430008000033";
//# sourceMappingURL=AdvisorsVesting__factory.js.map