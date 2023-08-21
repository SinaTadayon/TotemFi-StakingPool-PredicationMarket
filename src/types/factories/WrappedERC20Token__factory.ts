/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { WrappedERC20Token } from "../WrappedERC20Token";

export class WrappedERC20Token__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    NAME: string,
    SYMBOL: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WrappedERC20Token> {
    return super.deploy(
      NAME,
      SYMBOL,
      overrides || {}
    ) as Promise<WrappedERC20Token>;
  }
  getDeployTransaction(
    NAME: string,
    SYMBOL: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(NAME, SYMBOL, overrides || {});
  }
  attach(address: string): WrappedERC20Token {
    return super.attach(address) as WrappedERC20Token;
  }
  connect(signer: Signer): WrappedERC20Token__factory {
    return super.connect(signer) as WrappedERC20Token__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WrappedERC20Token {
    return new Contract(address, _abi, signerOrProvider) as WrappedERC20Token;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "NAME",
        type: "string",
      },
      {
        internalType: "string",
        name: "SYMBOL",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200104038038062001040833981016040819052620000349162000335565b8151829082906200004d906003906020850190620001e4565b50805162000063906004906020840190620001e4565b505050620000806200007a620000a760201b60201c565b620000ab565b6200009f6200008e620000a7565b69152d02c7e14af6800000620000fd565b505062000454565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166200012f5760405162461bcd60e51b815260040162000126906200039c565b60405180910390fd5b6200013d60008383620001df565b8060026000828254620001519190620003dc565b90915550506001600160a01b0382166000908152602081905260408120805483929062000180908490620003dc565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90620001c5908590620003d3565b60405180910390a3620001db60008383620001df565b5050565b505050565b828054620001f29062000401565b90600052602060002090601f01602090048101928262000216576000855562000261565b82601f106200023157805160ff191683800117855562000261565b8280016001018555821562000261579182015b828111156200026157825182559160200191906001019062000244565b506200026f92915062000273565b5090565b5b808211156200026f576000815560010162000274565b600082601f8301126200029b578081fd5b81516001600160401b0380821115620002b857620002b86200043e565b6040516020601f8401601f1916820181018381118382101715620002e057620002e06200043e565b6040528382528584018101871015620002f7578485fd5b8492505b838310156200031a5785830181015182840182015291820191620002fb565b838311156200032b57848185840101525b5095945050505050565b6000806040838503121562000348578182fd5b82516001600160401b03808211156200035f578384fd5b6200036d868387016200028a565b9350602085015191508082111562000383578283fd5b5062000392858286016200028a565b9150509250929050565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60008219821115620003fc57634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806200041657607f821691505b602082108114156200043857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610bdc80620004646000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063715018a61161008c578063a457c2d711610066578063a457c2d7146101b7578063a9059cbb146101ca578063dd62ed3e146101dd578063f2fde38b146101f0576100ea565b8063715018a6146101905780638da5cb5b1461019a57806395d89b41146101af576100ea565b806323b872dd116100c857806323b872dd14610142578063313ce56714610155578063395093511461016a57806370a082311461017d576100ea565b806306fdde03146100ef578063095ea7b31461010d57806318160ddd1461012d575b600080fd5b6100f7610203565b6040516101049190610881565b60405180910390f35b61012061011b366004610839565b610295565b6040516101049190610876565b6101356102b2565b6040516101049190610b30565b6101206101503660046107fe565b6102b8565b61015d610351565b6040516101049190610b39565b610120610178366004610839565b610356565b61013561018b3660046107ab565b6103aa565b6101986103c9565b005b6101a2610414565b6040516101049190610862565b6100f7610423565b6101206101c5366004610839565b610432565b6101206101d8366004610839565b6104ab565b6101356101eb3660046107cc565b6104bf565b6101986101fe3660046107ab565b6104ea565b60606003805461021290610b6b565b80601f016020809104026020016040519081016040528092919081815260200182805461023e90610b6b565b801561028b5780601f106102605761010080835404028352916020019161028b565b820191906000526020600020905b81548152906001019060200180831161026e57829003601f168201915b5050505050905090565b60006102a96102a261055b565b848461055f565b50600192915050565b60025490565b60006102c5848484610613565b6001600160a01b0384166000908152600160205260408120816102e661055b565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156103325760405162461bcd60e51b8152600401610329906109e5565b60405180910390fd5b6103468561033e61055b565b85840361055f565b506001949350505050565b601290565b60006102a961036361055b565b84846001600061037161055b565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103a59190610b47565b61055f565b6001600160a01b0381166000908152602081905260409020545b919050565b6103d161055b565b6001600160a01b03166103e2610414565b6001600160a01b0316146104085760405162461bcd60e51b815260040161032990610a2d565b610412600061073d565b565b6005546001600160a01b031690565b60606004805461021290610b6b565b6000806001600061044161055b565b6001600160a01b039081168252602080830193909352604091820160009081209188168152925290205490508281101561048d5760405162461bcd60e51b815260040161032990610aeb565b6104a161049861055b565b8585840361055f565b5060019392505050565b60006102a96104b861055b565b8484610613565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6104f261055b565b6001600160a01b0316610503610414565b6001600160a01b0316146105295760405162461bcd60e51b815260040161032990610a2d565b6001600160a01b03811661054f5760405162461bcd60e51b815260040161032990610917565b6105588161073d565b50565b3390565b6001600160a01b0383166105855760405162461bcd60e51b815260040161032990610aa7565b6001600160a01b0382166105ab5760405162461bcd60e51b81526004016103299061095d565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610606908590610b30565b60405180910390a3505050565b6001600160a01b0383166106395760405162461bcd60e51b815260040161032990610a62565b6001600160a01b03821661065f5760405162461bcd60e51b8152600401610329906108d4565b61066a83838361078f565b6001600160a01b038316600090815260208190526040902054818110156106a35760405162461bcd60e51b81526004016103299061099f565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106da908490610b47565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107249190610b30565b60405180910390a361073784848461078f565b50505050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b505050565b80356001600160a01b03811681146103c457600080fd5b6000602082840312156107bc578081fd5b6107c582610794565b9392505050565b600080604083850312156107de578081fd5b6107e783610794565b91506107f560208401610794565b90509250929050565b600080600060608486031215610812578081fd5b61081b84610794565b925061082960208501610794565b9150604084013590509250925092565b6000806040838503121561084b578182fd5b61085483610794565b946020939093013593505050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b818110156108ad57858101830151858201604001528201610891565b818111156108be5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b90815260200190565b60ff91909116815260200190565b60008219821115610b6657634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680610b7f57607f821691505b60208210811415610ba057634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220450f50cda5b5d1b0d539065440ff579ff6b52c3750595b3c6a892ab4ce090d8864736f6c63430008000033";