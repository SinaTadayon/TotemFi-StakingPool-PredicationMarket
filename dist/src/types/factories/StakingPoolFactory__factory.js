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
exports.StakingPoolFactory__factory = void 0;
var ethers_1 = require("ethers");
var StakingPoolFactory__factory = /** @class */ (function (_super) {
    __extends(StakingPoolFactory__factory, _super);
    function StakingPoolFactory__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    StakingPoolFactory__factory.prototype.deploy = function (_totemToken, _rewardManager, _swapRouter, _usdToken, _stakingPoolImplementation, _superAdmin, overrides) {
        return _super.prototype.deploy.call(this, _totemToken, _rewardManager, _swapRouter, _usdToken, _stakingPoolImplementation, _superAdmin, overrides || {});
    };
    StakingPoolFactory__factory.prototype.getDeployTransaction = function (_totemToken, _rewardManager, _swapRouter, _usdToken, _stakingPoolImplementation, _superAdmin, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _totemToken, _rewardManager, _swapRouter, _usdToken, _stakingPoolImplementation, _superAdmin, overrides || {});
    };
    StakingPoolFactory__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    StakingPoolFactory__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    StakingPoolFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return StakingPoolFactory__factory;
}(ethers_1.ContractFactory));
exports.StakingPoolFactory__factory = StakingPoolFactory__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "contract ITotemToken",
                name: "_totemToken",
                type: "address",
            },
            {
                internalType: "contract IRewardManager",
                name: "_rewardManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "_swapRouter",
                type: "address",
            },
            {
                internalType: "address",
                name: "_usdToken",
                type: "address",
            },
            {
                internalType: "address",
                name: "_stakingPoolImplementation",
                type: "address",
            },
            {
                internalType: "address",
                name: "_superAdmin",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [],
        name: "NewStakingPoolImplemnetationWasSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "NewSuperAdminWasSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "pool",
                type: "address",
            },
            {
                indexed: false,
                internalType: "string",
                name: "wrappedTokenSymbol",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "poolType",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256[12]",
                name: "variables",
                type: "uint256[12]",
            },
            {
                indexed: false,
                internalType: "uint256[8]",
                name: "ranks",
                type: "uint256[8]",
            },
            {
                indexed: false,
                internalType: "uint256[8]",
                name: "percentages",
                type: "uint256[8]",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isEnhancedEnabled",
                type: "bool",
            },
        ],
        name: "PoolCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "PoolCreatorAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "PoolCreatorRemoved",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addPoolCreator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_oracleContract",
                type: "address",
            },
            {
                internalType: "address",
                name: "_wrappedTokenContract",
                type: "address",
            },
            {
                internalType: "string",
                name: "_wrappedTokenSymbol",
                type: "string",
            },
            {
                internalType: "string",
                name: "_poolType",
                type: "string",
            },
            {
                internalType: "uint256[12]",
                name: "_variables",
                type: "uint256[12]",
            },
            {
                internalType: "uint256[8]",
                name: "_ranks",
                type: "uint256[8]",
            },
            {
                internalType: "uint256[8]",
                name: "_percentages",
                type: "uint256[8]",
            },
            {
                internalType: "bool",
                name: "isEnhancedEnabled",
                type: "bool",
            },
        ],
        name: "createPoolProxy",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "isPoolCreator",
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
        name: "minimumStakeAmount",
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
        name: "renouncePoolCreator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "rewardManager",
        outputs: [
            {
                internalType: "contract IRewardManager",
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
                internalType: "uint256",
                name: "newStakingPoolTaxRate",
                type: "uint256",
            },
        ],
        name: "setDefaultTaxRate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_ImpAdr",
                type: "address",
            },
        ],
        name: "setNewStakingPoolImplementationAdr",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_superAdmin",
                type: "address",
            },
        ],
        name: "setNewSuperAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_swapRouter",
                type: "address",
            },
        ],
        name: "setSwapRouter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "stakingPoolImplementationAdr",
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
        inputs: [],
        name: "stakingPoolTaxRate",
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
        name: "superAdmin",
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
        inputs: [],
        name: "swapRouter",
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
        inputs: [],
        name: "totemToken",
        outputs: [
            {
                internalType: "contract ITotemToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "usdToken",
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
];
var _bytecode = "0x60806040523480156200001157600080fd5b5060405162003622380380620036228339810160408190526200003491620001f8565b6200004862000042620000da565b620000de565b6200006157620000616200005b620000da565b62000101565b600180546001600160a01b03199081166001600160a01b039889161790915560028054821696881696909617909555600580548616948716949094179093556006805485169286169290921790915560048054841691851691909117905560038054909216921691909117905561012c6007556200031d565b3390565b6000620000fb8260006200015360201b6200067f1790919060201c565b92915050565b6200011c816000620001a760201b620006c71790919060201c565b6040516001600160a01b038216907fac89bb7b3d0c5a763a97f31bc75f8faee00426e7b235f02ca76897d55caf7b6190600090a250565b60006001600160a01b038216620001875760405162461bcd60e51b81526004016200017e90620002c2565b60405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b620001b3828262000153565b15620001d35760405162461bcd60e51b81526004016200017e906200028b565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60008060008060008060c0878903121562000211578182fd5b86516200021e8162000304565b6020880151909650620002318162000304565b6040880151909550620002448162000304565b6060880151909450620002578162000304565b60808801519093506200026a8162000304565b60a08801519092506200027d8162000304565b809150509295509295509295565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604082015261737360f01b606082015260800190565b6001600160a01b03811681146200031a57600080fd5b50565b6132f5806200032d6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063b6c3ef2711610097578063d53b245b11610066578063d53b245b146101d9578063e281cc7e146101ec578063e8153c93146101f4578063f897a22b146101fc57610100565b8063b6c3ef27146101a3578063bc8a0669146101b6578063c31c9c07146101be578063ceba6f8d146101c657610100565b806349a84429116100d357806349a84429146101555780636b036f45146101685780638c2d741c146101705780639a94775d1461018357610100565b80630f4ef8a61461010557806329575f6a14610123578063412736571461012b578063441f5c6514610140575b600080fd5b61010d610204565b60405161011a9190610bc5565b60405180910390f35b61010d610213565b61013e6101393660046109d8565b610222565b005b61014861029a565b60405161011a9190610ee6565b61013e6101633660046109d8565b6102a0565b61014861033c565b61013e61017e3660046109d8565b610342565b6101966101913660046109d8565b610375565b60405161011a9190610bd9565b61013e6101b13660046109d8565b610389565b61010d6103f7565b61010d610406565b61010d6101d43660046109f9565b610415565b61013e6101e7366004610b10565b610602565b61013e61064f565b61010d610661565b61010d610670565b6002546001600160a01b031681565b6003546001600160a01b031681565b61022d610191610713565b6102525760405162461bcd60e51b815260040161024990610da9565b60405180910390fd5b6001600160a01b0381166102785760405162461bcd60e51b815260040161024990610d8b565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60075481565b6102ab610191610713565b6102c75760405162461bcd60e51b815260040161024990610da9565b6004546001600160a01b03828116911614156102f55760405162461bcd60e51b815260040161024990610e06565b600480546001600160a01b0319166001600160a01b0383161790556040517f3199ab49607559567913d4714288fee1e692c31829ed4722a6fd064adbdc5b5490600090a150565b60085481565b61034d610191610713565b6103695760405162461bcd60e51b815260040161024990610da9565b61037281610717565b50565b6000610381818361067f565b90505b919050565b610394610191610713565b6103b05760405162461bcd60e51b815260040161024990610da9565b600380546001600160a01b0319166001600160a01b0383161790556040517fb25686d5de2544aa0f0235ea99dd20e962286bc9cec2fb371b226a637be461f790600090a150565b6004546001600160a01b031681565b6005546001600160a01b031681565b6000610422610191610713565b61043e5760405162461bcd60e51b815260040161024990610da9565b610120850151610452576007546101208601525b6000604051610460906108c2565b604051809103906000f08015801561047c573d6000803e3d6000fd5b5060048054604051631b2ce7f360e11b815292935083926001600160a01b0380851693633659cfe6936104b29392169101610bc5565b600060405180830381600087803b1580156104cc57600080fd5b505af11580156104e0573d6000803e3d6000fd5b5050604080516080810182526005546001600160a01b039081168252600654811660208301528f811692820192909252908d166060820152915061052c9050818b8b8b8b8b8b8a610759565b60035460405163f2fde38b60e01b81526001600160a01b038581169263f2fde38b9261055e9290911690600401610bc5565b600060405180830381600087803b15801561057857600080fd5b505af115801561058c573d6000803e3d6000fd5b505060025460405163d914cd4b60e01b81526001600160a01b03909116925063d914cd4b91506105c0908590600401610bc5565b600060405180830381600087803b1580156105da57600080fd5b505af11580156105ee573d6000803e3d6000fd5b50939e9d5050505050505050505050505050565b61060d610191610713565b6106295760405162461bcd60e51b815260040161024990610da9565b612710811061064a5760405162461bcd60e51b815260040161024990610d44565b600755565b61065f61065a610713565b610838565b565b6001546001600160a01b031681565b6006546001600160a01b031681565b60006001600160a01b0382166106a75760405162461bcd60e51b815260040161024990610ea4565b506001600160a01b03166000908152602091909152604090205460ff1690565b6106d1828261067f565b156106ee5760405162461bcd60e51b815260040161024990610d0d565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3390565b6107226000826106c7565b6040516001600160a01b038216907fac89bb7b3d0c5a763a97f31bc75f8faee00426e7b235f02ca76897d55caf7b6190600090a250565b6001546002546001600160a01b038084169263869eb310928b928b9281169116610781610713565b8e8c8c8c8c6040518b63ffffffff1660e01b81526004016107ab9a99989796959493929190610c4c565b600060405180830381600087803b1580156107c557600080fd5b505af11580156107d9573d6000803e3d6000fd5b505050506000819050806001600160a01b03167fd69cf3c5f6280df773a744806dc6920bc09109ef4a352c0846f5ef35965dca1289898989898960405161082596959493929190610be4565b60405180910390a2505050505050505050565b61084360008261087a565b6040516001600160a01b038216907f2bc71cc60b543df5fdd80ef5a45e1cdb344843769b649e9d901de3be24aeb24e90600090a250565b610884828261067f565b6108a05760405162461bcd60e51b815260040161024990610e63565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b61236f80610f5183390190565b80356001600160a01b038116811461038457600080fd5b600082601f8301126108f6578081fd5b60405161010080820182811067ffffffffffffffff8211171561091b5761091b610f3a565b604052818482810187101561092e578485fd5b8492505b600883101561095257803582526001929092019160209182019101610932565b509195945050505050565b8035801515811461038457600080fd5b600082601f83011261097d578081fd5b813567ffffffffffffffff81111561099757610997610f3a565b6109aa601f8201601f1916602001610eef565b8181528460208386010111156109be578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156109e9578081fd5b6109f2826108cf565b9392505050565b600080600080600080600080610420898b031215610a15578384fd5b610a1e896108cf565b97506020610a2d818b016108cf565b975060408a013567ffffffffffffffff80821115610a49578687fd5b610a558d838e0161096d565b985060608c0135915080821115610a6a578687fd5b50610a778c828d0161096d565b9650508a609f8b0112610a88578485fd5b610a9a610a95600c610f19565b610eef565b8060808c016102008d018e811115610ab0578889fd5b885b600c811015610acf57823585529385019391850191600101610ab2565b50829850610add8f826108e6565b97505050505050610af28a6103008b016108e6565b9150610b016104008a0161095d565b90509295985092959890939650565b600060208284031215610b21578081fd5b5035919050565b8060005b600c811015610b4b578151845260209384019390910190600101610b2c565b50505050565b8060005b6008811015610b4b578151845260209384019390910190600101610b55565b15159052565b60008151808452815b81811015610b9f57602081850181015186830182015201610b83565b81811115610bb05782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b901515815260200190565b60006103e0808352610bf88184018a610b7a565b90508281036020840152610c0c8189610b7a565b915050610c1c6040830187610b28565b610c2a6101c0830186610b51565b610c386102c0830185610b51565b8215156103c0830152979650505050505050565b60006104c0808352610c608184018e610b7a565b9050602083820381850152610c75828e610b7a565b6001600160a01b038d811660408701528c811660608701528b81166080870152909350915060a084018960005b6004811015610cc1578151851683529183019190830190600101610ca2565b5050505050610cd4610120830187610b28565b610ce26102a0830186610b51565b610cf06103a0830185610b51565b610cfe6104a0830184610b74565b9b9a5050505050505050505050565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526027908201527f303432302054617820636f6e6e6f74206265206f7665722031303025202831306040820152663030302042502960c81b606082015260800190565b6020808252600490820152630303431360e41b604082015260600190565b6020808252603a908201527f506f6f6c43726561746f72526f6c653a2063616c6c657220646f6573206e6f7460408201527f20686176652074686520506f6f6c43726561746f7220726f6c65000000000000606082015260800190565b6020808252603d908201527f5468697320616464726573732069732074686520696d706c656d656e7461746960408201527f6f6e207468617420697320616c7265616479206265696e672075736564000000606082015260800190565b60208082526021908201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6040820152606560f81b606082015260800190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604082015261737360f01b606082015260800190565b90815260200190565b60405181810167ffffffffffffffff81118282101715610f1157610f11610f3a565b604052919050565b600067ffffffffffffffff821115610f3357610f33610f3a565b5060200290565b634e487b7160e01b600052604160045260246000fdfe608060405234801561001057600080fd5b50607a80546001600160a01b03191633179055607b805460ff60d01b1916600160d01b17905561232a806100456000396000f3fe6080604052600436106102cd5760003560e01c806395c2ba4711610175578063d7efb6b7116100dc578063eb850ae111610095578063f3d9dc0d1161006f578063f3d9dc0d146107c0578063f5e96fc9146107d5578063f8eeed62146107ea578063fd5e6dd1146107ff576102d4565b8063eb850ae11461075d578063f1b17a8b14610772578063f2fde38b146107a0576102d4565b8063d7efb6b7146106af578063de09ee20146106c4578063e0818669146106f2578063e425df8c1461071e578063e68b52e714610733578063e8153c9314610748576102d4565b8063aa7bcb571161012e578063aa7bcb5714610631578063b1dd61b614610646578063bece75321461065b578063c120105414610670578063c6c1decd14610685578063d025188b1461069a576102d4565b806395c2ba471461059b578063996c6cc3146105b0578063a08b2c79146105c5578063a35ef3a7146105da578063a4e2d634146105fc578063a8f7b34614610611576102d4565b80636847d0c511610234578063785fa627116101ed578063850fa7cb116101c7578063850fa7cb1461051c578063869eb310146105515780638cf0e21e146105715780638da5cb5b14610586576102d4565b8063785fa627146104dd5780637f2b6a0d146104f2578063817b1cd214610507576102d4565b80636847d0c51461045f5780636b036f4514610474578063715018a614610489578063725c9c491461049e57806373f31703146104b3578063785df1f8146104c8576102d4565b80633659cfe6116102865780633659cfe6146103cb5780633fcdd82c146103eb5780634bc4eeb21461040b5780634e8bfdaa1461042057806351eacbf01461043557806367fc91381461044a576102d4565b80630d6680871461030e5780630f4ef8a61461033957806322f3e2d41461035b578063238a6c741461037d57806328016f9a1461039f5780632aa8195e146103b6576102d4565b366102d457005b6079546001600160a01b0316806102ea57600080fd5b3660008037600080366000845af43d6000803e808015610309573d6000f35b3d6000fd5b34801561031a57600080fd5b5061032361081f565b6040516103309190612120565b60405180910390f35b34801561034557600080fd5b5061034e610825565b6040516103309190611ddb565b34801561036757600080fd5b50610370610834565b6040516103309190611e1b565b34801561038957600080fd5b50610392610844565b6040516103309190611e26565b3480156103ab57600080fd5b506103b46108d2565b005b3480156103c257600080fd5b5061034e61092f565b3480156103d757600080fd5b506103b46103e6366004611b21565b61093e565b3480156103f757600080fd5b50610323610406366004611d47565b6109d8565b34801561041757600080fd5b50610370610a9c565b34801561042c57600080fd5b50610323610aac565b34801561044157600080fd5b50610323610ab2565b34801561045657600080fd5b506103b4610ab8565b34801561046b57600080fd5b50610323610b06565b34801561048057600080fd5b50610323610b0c565b34801561049557600080fd5b506103b4610b12565b3480156104aa57600080fd5b5061034e610b5d565b3480156104bf57600080fd5b50610323610b6c565b3480156104d457600080fd5b50610323610b72565b3480156104e957600080fd5b50610323610b78565b3480156104fe57600080fd5b50610370610b7e565b34801561051357600080fd5b50610323610b8e565b34801561052857600080fd5b5061053c610537366004611b87565b610b94565b60405161033099989796959493929190612150565b34801561055d57600080fd5b506103b461056c366004611c59565b610c02565b34801561057d57600080fd5b5061037061119f565b34801561059257600080fd5b5061034e6111af565b3480156105a757600080fd5b506103236111be565b3480156105bc57600080fd5b5061034e6111c3565b3480156105d157600080fd5b506103706111d2565b3480156105e657600080fd5b506105ef6111e2565b6040516103309190611e08565b34801561060857600080fd5b50610370611291565b34801561061d57600080fd5b506103b461062c366004611b3d565b6112a1565b34801561063d57600080fd5b50610323611356565b34801561065257600080fd5b5061039261135c565b34801561066757600080fd5b5061034e611369565b34801561067c57600080fd5b50610323611378565b34801561069157600080fd5b5061034e6113fe565b3480156106a657600080fd5b5061032361140d565b3480156106bb57600080fd5b50610370611413565b3480156106d057600080fd5b506106e46106df366004611d47565b611423565b604051610330929190611def565b3480156106fe57600080fd5b5061070761145b565b6040516103309b9a99989796959493929190612193565b34801561072a57600080fd5b50610323611488565b34801561073f57600080fd5b5061032361148e565b34801561075457600080fd5b5061034e611494565b34801561076957600080fd5b506103236114a3565b34801561077e57600080fd5b5061079261078d366004611d47565b6114a9565b604051610330929190612142565b3480156107ac57600080fd5b506103b46107bb366004611b21565b6114d7565b3480156107cc57600080fd5b50610323611548565b3480156107e157600080fd5b5061034e61154e565b3480156107f657600080fd5b5061032361155d565b34801561080b57600080fd5b506106e461081a366004611d47565b611563565b606a5481565b608d546001600160a01b031681565b607b54600160b01b900460ff1681565b607c80546108519061225d565b80601f016020809104026020016040519081016040528092919081815260200182805461087d9061225d565b80156108ca5780601f1061089f576101008083540402835291602001916108ca565b820191906000526020600020905b8154815290600101906020018083116108ad57829003601f168201915b505050505081565b6108da611573565b6001600160a01b03166108eb6111af565b6001600160a01b03161461091a5760405162461bcd60e51b815260040161091190611ff3565b60405180910390fd5b607b805460ff60d01b1916600160d01b179055565b6079546001600160a01b031681565b607a546001600160a01b031633146109685760405162461bcd60e51b8152600401610911906120e9565b607b54600160d01b900460ff166109915760405162461bcd60e51b815260040161091190611e79565b6079546001600160a01b03828116911614156109bf5760405162461bcd60e51b815260040161091190611f6e565b6109c881611577565b50607b805460ff60d01b19169055565b60665460009081906001600160a01b031663d06ca61f846109f76111e2565b6040518363ffffffff1660e01b8152600401610a14929190612129565b60006040518083038186803b158015610a2c57600080fd5b505afa158015610a40573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a689190810190611bb2565b905080600181518110610a8b57634e487b7160e01b600052603260045260246000fd5b60200260200101519150505b919050565b607b54600160a81b900460ff1681565b606b5481565b606c5481565b610ac0611573565b6001600160a01b0316610ad16111af565b6001600160a01b031614610af75760405162461bcd60e51b815260040161091190611ff3565b607b805460ff60d01b19169055565b60705481565b60715481565b610b1a611573565b6001600160a01b0316610b2b6111af565b6001600160a01b031614610b515760405162461bcd60e51b815260040161091190611ff3565b610b5b60006115be565b565b6066546001600160a01b031690565b606f5481565b60785481565b606e5481565b607b54600160c01b900460ff1681565b60725481565b608b6020528160005260406000208181548110610bb057600080fd5b6000918252602090912060089091020180546001820154600283015460038401546004850154600586015460068701546007909701549598509396509194909391929160ff8082169161010090041689565b600054610100900460ff1680610c1b575060005460ff16155b610c375760405162461bcd60e51b815260040161091190611fa5565b600054610100900460ff16158015610c62576000805460ff1961ff0019909116610100171660011790555b607a546001600160a01b03163314610c8c5760405162461bcd60e51b8152600401610911906120e9565b610c94611610565b610c9c611694565b855160208701516060880151610cb39291906112a1565b84514210610cd35760405162461bcd60e51b815260040161091190612028565b8a51610ce690607c9060208e01906118ad565b508951610cfa90607d9060208d01906118ad565b50608c80546001600160a01b03808c166001600160a01b031992831617909255608d80548b8416908316179055607a8054928a1692909116919091179055610d4886600160200201516116fc565b604086810151607b80546001600160a01b03199081166001600160a01b039384169081179092556060808b0151608e8054909316941693909317905587516069556020880151606b5591870151606a55860151606c556080860151606d5560a0860151606e5560c0860151606f5560e0860151607455610100860151607555610120860151607055610140860151607155610deb57610160850151607755610e07565b607b54610e00906001600160a01b031661171e565b60ff166077555b607b805460ff60a81b1916600160a81b8415150217905582518451600091610e2f919061179f565b905060005b600881101561104b57858160088110610e5d57634e487b7160e01b600052603260045260246000fd5b6020020151610e6b5761104b565b85610e7782600161220f565b60088110610e9557634e487b7160e01b600052603260045260246000fd5b602002015115610fb25785610eab82600161220f565b60088110610ec957634e487b7160e01b600052603260045260246000fd5b6020020151868260088110610eee57634e487b7160e01b600052603260045260246000fd5b602002015110610f105760405162461bcd60e51b815260040161091190611ef6565b610faf610fa886610f2284600161220f565b60088110610f4057634e487b7160e01b600052603260045260246000fd5b6020020151610fa2898560088110610f6857634e487b7160e01b600052603260045260246000fd5b60200201518a610f7987600161220f565b60088110610f9757634e487b7160e01b600052603260045260246000fd5b6020020151906117b2565b9061179f565b83906117be565b91505b60886040518060400160405280888460088110610fdf57634e487b7160e01b600052603260045260246000fd5b6020020151815260200187846008811061100957634e487b7160e01b600052603260045260246000fd5b6020908102919091015190915282546001818101855560009485529382902083516002909202019081559101519101558061104381612298565b915050610e34565b601986611059600184612246565b6008811061107757634e487b7160e01b600052603260045260246000fd5b6020020151111561109a5760405162461bcd60e51b815260040161091190611f24565b846110a6600183612246565b600881106110c457634e487b7160e01b600052603260045260246000fd5b6020020151158015906110f957508481600881106110f257634e487b7160e01b600052603260045260246000fd5b6020020151155b6111155760405162461bcd60e51b8152600401610911906120a4565b81612710146111365760405162461bcd60e51b81526004016109119061206d565b5050606954607e55606a54607f55606b54608055606f54608255606e54608355606d54608455607654608555607b546087805460ff1916600160a81b90920460ff1615159190911790558015611192576000805461ff00191690555b5050505050505050505050565b607b54600160d01b900460ff1681565b6033546001600160a01b031690565b600581565b608e546001600160a01b031681565b607b54600160a01b900460ff1681565b60408051600280825260608083018452926000929190602083019080368337505060675482519293506001600160a01b03169183915060009061123557634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260685482519116908290600190811061127457634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209283029190910190910152905090565b607b54600160b81b900460ff1681565b600054610100900460ff16806112ba575060005460ff16155b6112d65760405162461bcd60e51b815260040161091190611fa5565b600054610100900460ff16158015611301576000805460ff1961ff0019909116610100171660011790555b606680546001600160a01b038087166001600160a01b0319928316179092556067805486841690831617905560688054928516929091169190911790558015611350576000805461ff00191690555b50505050565b606d5481565b607d80546108519061225d565b607b546001600160a01b031681565b6065546040516370a0823160e01b81526000916001600160a01b0316906370a08231906113a9903090600401611ddb565b60206040518083038186803b1580156113c157600080fd5b505afa1580156113d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f99190611d5f565b905090565b607a546001600160a01b031681565b60735481565b607b54600160c81b900460ff1681565b608a818154811061143357600080fd5b6000918252602090912060029091020180546001909101546001600160a01b03909116915082565b607e54607f5460805460815460825460835460845460855460865460875460ff808216916101009004168b565b60745481565b60775481565b608c546001600160a01b031681565b60755481565b608881815481106114b957600080fd5b60009182526020909120600290910201805460019091015490915082565b6114df611573565b6001600160a01b03166114f06111af565b6001600160a01b0316146115165760405162461bcd60e51b815260040161091190611ff3565b6001600160a01b03811661153c5760405162461bcd60e51b815260040161091190611eb0565b611545816115be565b50565b60765481565b6065546001600160a01b031690565b60695481565b6089818154811061143357600080fd5b3390565b607980546001600160a01b0319166001600160a01b0383161790556040517f3dab95f89f74034beeac9f9fe9bec350186cb958223e1791afb0dbb64859cabd90600090a150565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff1680611629575060005460ff16155b6116455760405162461bcd60e51b815260040161091190611fa5565b600054610100900460ff16158015611670576000805460ff1961ff0019909116610100171660011790555b6116786117ca565b61168061183d565b8015611545576000805461ff001916905550565b600054610100900460ff16806116ad575060005460ff16155b6116c95760405162461bcd60e51b815260040161091190611fa5565b600054610100900460ff161580156116f4576000805460ff1961ff0019909116610100171660011790555b6116806117ca565b606580546001600160a01b0319166001600160a01b0392909216919091179055565b6000808290506000816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561175f57600080fd5b505afa158015611773573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117979190611d77565b949350505050565b60006117ab8284612227565b9392505050565b60006117ab8284612246565b60006117ab828461220f565b600054610100900460ff16806117e3575060005460ff16155b6117ff5760405162461bcd60e51b815260040161091190611fa5565b600054610100900460ff16158015611680576000805460ff1961ff0019909116610100171660011790558015611545576000805461ff001916905550565b600054610100900460ff1680611856575060005460ff16155b6118725760405162461bcd60e51b815260040161091190611fa5565b600054610100900460ff1615801561189d576000805460ff1961ff0019909116610100171660011790555b6116806118a8611573565b6115be565b8280546118b99061225d565b90600052602060002090601f0160209004810192826118db5760008555611921565b82601f106118f457805160ff1916838001178555611921565b82800160010185558215611921579182015b82811115611921578251825591602001919060010190611906565b5061192d929150611931565b5090565b5b8082111561192d5760008155600101611932565b8035610a97816122df565b600082601f830112611961578081fd5b6040516080810181811067ffffffffffffffff82111715611984576119846122c9565b604052808360808101861015611998578384fd5b835b60048110156119c35781356119ae816122df565b8352602092830192919091019060010161199a565b509195945050505050565b600082601f8301126119de578081fd5b60405161018080820182811067ffffffffffffffff82111715611a0357611a036122c9565b6040528184828101871015611a16578485fd5b8492505b600c8310156119c357803582526001929092019160209182019101611a1a565b600082601f830112611a4a578081fd5b60405161010080820182811067ffffffffffffffff82111715611a6f57611a6f6122c9565b6040528184828101871015611a82578485fd5b8492505b60088310156119c357803582526001929092019160209182019101611a86565b80358015158114610a9757600080fd5b600082601f830112611ac6578081fd5b813567ffffffffffffffff811115611ae057611ae06122c9565b611af3601f8201601f19166020016121e5565b818152846020838601011115611b07578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611b32578081fd5b81356117ab816122df565b600080600060608486031215611b51578182fd5b8335611b5c816122df565b92506020840135611b6c816122df565b91506040840135611b7c816122df565b809150509250925092565b60008060408385031215611b99578182fd5b8235611ba4816122df565b946020939093013593505050565b60006020808385031215611bc4578182fd5b825167ffffffffffffffff80821115611bdb578384fd5b818501915085601f830112611bee578384fd5b815181811115611c0057611c006122c9565b8381029150611c108483016121e5565b8181528481019084860184860187018a1015611c2a578788fd5b8795505b83861015611c4c578051835260019590950194918601918601611c2e565b5098975050505050505050565b6000806000806000806000806000806104c08b8d031215611c78578586fd5b8a3567ffffffffffffffff80821115611c8f578788fd5b611c9b8e838f01611ab6565b9b5060208d0135915080821115611cb0578788fd5b50611cbd8d828e01611ab6565b995050611ccc60408c01611946565b9750611cda60608c01611946565b9650611ce860808c01611946565b9550611cf78c60a08d01611951565b9450611d078c6101208d016119ce565b9350611d178c6102a08d01611a3a565b9250611d278c6103a08d01611a3a565b9150611d366104a08c01611aa6565b90509295989b9194979a5092959850565b600060208284031215611d58578081fd5b5035919050565b600060208284031215611d70578081fd5b5051919050565b600060208284031215611d88578081fd5b815160ff811681146117ab578182fd5b6000815180845260208085019450808401835b83811015611dd05781516001600160a01b031687529582019590820190600101611dab565b509495945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6000602082526117ab6020830184611d98565b901515815260200190565b6000602080835283518082850152825b81811015611e5257858101830151858201604001528201611e36565b81811115611e635783604083870101525b50601f01601f1916929092016040019392505050565b6020808252601a908201527f55706772616465206973206e6f7420656e61626c656420796574000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526014908201527377726f6e67206f72646572206f662072616e6b7360601b604082015260600190565b6020808252602a908201527f6c6173742072616e6b206d757374206265206c657373207468616e206f7220656040820152697175616c20746f20323560b01b606082015260800190565b6020808252601d908201527f497320616c72656164792074686520696d706c656d656e746174696f6e000000604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526025908201527f30333031206c61756e636820646174652063616e277420626520696e20746865604082015264081c185cdd60da1b606082015260800190565b6020808252601f908201527f7265776172642070657263656e7461676573206d757374206265203130302500604082015260600190565b60208082526025908201527f72616e6b7320616e642070657263656e7461676573206c656e677468206d69736040820152640dac2e8c6d60db1b606082015260800190565b6020808252601a908201527f6d73672e73656e646572206973206e6f7420616e206f776e6572000000000000604082015260600190565b90815260200190565b6000838252604060208301526117976040830184611d98565b918252602082015260400190565b988952602089019790975260408801959095526060870193909352608086019190915260a085015260c0840152151560e083015215156101008201526101200190565b9a8b5260208b019990995260408a01979097526060890195909552608088019390935260a087019190915260c086015260e0850152610100840152151561012083015215156101408201526101600190565b60405181810167ffffffffffffffff81118282101715612207576122076122c9565b604052919050565b60008219821115612222576122226122b3565b500190565b6000816000190483118215151615612241576122416122b3565b500290565b600082821015612258576122586122b3565b500390565b60028104600182168061227157607f821691505b6020821081141561229257634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156122ac576122ac6122b3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461154557600080fdfea26469706673582212204cf02edaa85f9281ad6061d63e21a0dbecb8a90e0dbd22e01476a7e5dd9052bd64736f6c63430008000033a264697066735822122047f2187c3ecb8163d87b412447c73c724cbcab63dcf0a7958b1e4d3ecf6fd63b64736f6c63430008000033";
//# sourceMappingURL=StakingPoolFactory__factory.js.map