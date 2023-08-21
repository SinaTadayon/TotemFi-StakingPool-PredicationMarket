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
exports.WrappedTokenDistributorUpgradeable__factory = void 0;
var ethers_1 = require("ethers");
var WrappedTokenDistributorUpgradeable__factory = /** @class */ (function (_super) {
    __extends(WrappedTokenDistributorUpgradeable__factory, _super);
    function WrappedTokenDistributorUpgradeable__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    WrappedTokenDistributorUpgradeable__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    WrappedTokenDistributorUpgradeable__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    WrappedTokenDistributorUpgradeable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    WrappedTokenDistributorUpgradeable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    WrappedTokenDistributorUpgradeable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return WrappedTokenDistributorUpgradeable__factory;
}(ethers_1.ContractFactory));
exports.WrappedTokenDistributorUpgradeable__factory = WrappedTokenDistributorUpgradeable__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "DistributedBTC",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "swapRouterAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "BUSDContractAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "WrappedTokenContractAddress",
                type: "address",
            },
        ],
        name: "__WrappedTokenDistributor_initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "getEstimatedWrappedTokenForUSD",
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
        name: "getPathForUSDToWrappedToken",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSwapRouter",
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
var _bytecode = "0x608060405234801561001057600080fd5b50610577806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633fcdd82c14610051578063725c9c491461007a578063a35ef3a71461008f578063a8f7b346146100a4575b600080fd5b61006461005f36600461042a565b6100b9565b6040516100719190610501565b60405180910390f35b610082610181565b6040516100719190610485565b610097610196565b6040516100719190610499565b6100b76100b236600461032e565b610245565b005b6000805481906201000090046001600160a01b031663d06ca61f846100dc610196565b6040518363ffffffff1660e01b81526004016100f992919061050a565b60006040518083038186803b15801561011157600080fd5b505afa158015610125573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261014d9190810190610370565b90508060018151811061017057634e487b7160e01b600052603260045260246000fd5b60200260200101519150505b919050565b6000546201000090046001600160a01b031690565b60408051600280825260608083018452926000929190602083019080368337505060015482519293506001600160a01b0316918391506000906101e957634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260025482519116908290600190811061022857634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209283029190910190910152905090565b600054610100900460ff168061025e575060005460ff16155b6102835760405162461bcd60e51b815260040161027a906104b3565b60405180910390fd5b600054610100900460ff161580156102ae576000805460ff1961ff0019909116610100171660011790555b600080546001600160a01b03808716620100000262010000600160b01b031990921691909117909155600180548583166001600160a01b03199182161790915560028054928516929091169190911790558015610311576000805461ff00191690555b50505050565b80356001600160a01b038116811461017c57600080fd5b600080600060608486031215610342578283fd5b61034b84610317565b925061035960208501610317565b915061036760408501610317565b90509250925092565b60006020808385031215610382578182fd5b825167ffffffffffffffff80821115610399578384fd5b818501915085601f8301126103ac578384fd5b8151818111156103be576103be61052b565b838102604051858282010181811085821117156103dd576103dd61052b565b604052828152858101935084860182860187018a10156103fb578788fd5b8795505b8386101561041d5780518552600195909501949386019386016103ff565b5098975050505050505050565b60006020828403121561043b578081fd5b5035919050565b6000815180845260208085019450808401835b8381101561047a5781516001600160a01b031687529582019590820190600101610455565b509495945050505050565b6001600160a01b0391909116815260200190565b6000602082526104ac6020830184610442565b9392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b90815260200190565b6000838252604060208301526105236040830184610442565b949350505050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f3597afa530847829ae7d80989bd8ce5e70ffcfefe98f01a90ced5b71bcf862d64736f6c63430008000033";
//# sourceMappingURL=WrappedTokenDistributorUpgradeable__factory.js.map