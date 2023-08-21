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
exports.USDRetriever__factory = void 0;
var ethers_1 = require("ethers");
var USDRetriever__factory = /** @class */ (function (_super) {
    __extends(USDRetriever__factory, _super);
    function USDRetriever__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    USDRetriever__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    USDRetriever__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    USDRetriever__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    USDRetriever__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    USDRetriever__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return USDRetriever__factory;
}(ethers_1.ContractFactory));
exports.USDRetriever__factory = USDRetriever__factory;
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
        name: "ApproveTokens",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "ReceivedTokens",
        type: "event",
    },
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
        name: "TransferTokens",
        type: "event",
    },
    {
        inputs: [],
        name: "getUSDBalance",
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
        name: "getUSDToken",
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
var _bytecode = "0x608060405234801561001057600080fd5b5061016e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c12010541461003b578063f5e96fc914610059575b600080fd5b61004361006e565b604051610050919061012f565b60405180910390f35b6100616100f4565b604051610050919061011b565b600080546040516370a0823160e01b81526001600160a01b03909116906370a082319061009f90309060040161011b565b60206040518083038186803b1580156100b757600080fd5b505afa1580156100cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ef9190610103565b905090565b6000546001600160a01b031690565b600060208284031215610114578081fd5b5051919050565b6001600160a01b0391909116815260200190565b9081526020019056fea2646970667358221220313049e9907e7ff5b0ed2cfc89e3f9088d29de5ec21f9101ad52c9348aca208864736f6c63430008000033";
//# sourceMappingURL=USDRetriever__factory.js.map