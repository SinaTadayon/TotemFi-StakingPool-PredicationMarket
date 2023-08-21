/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RewardManager } from "../RewardManager";

export class RewardManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _totemToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardManager> {
    return super.deploy(_totemToken, overrides || {}) as Promise<RewardManager>;
  }
  getDeployTransaction(
    _totemToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_totemToken, overrides || {});
  }
  attach(address: string): RewardManager {
    return super.attach(address) as RewardManager;
  }
  connect(signer: Signer): RewardManager__factory {
    return super.connect(signer) as RewardManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardManager {
    return new Contract(address, _abi, signerOrProvider) as RewardManager;
  }
}

const _abi = [
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
        name: "account",
        type: "address",
      },
    ],
    name: "OperatorAdded",
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
    name: "OperatorRemoved",
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
        name: "account",
        type: "address",
      },
    ],
    name: "RewarderAdded",
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
    name: "RewarderRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "SetOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "rewarder",
        type: "address",
      },
    ],
    name: "SetRewarder",
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
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "addPool",
    outputs: [],
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
    name: "addRewarder",
    outputs: [],
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
    name: "isOperator",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isRewarder",
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
    name: "renounceOperator",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renounceRewarder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "rewardUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOperator",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
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
  "0x60806040523480156200001157600080fd5b5060405162000e4438038062000e448339810160408190526200003491620002a5565b6200004862000042620000c8565b620000cc565b6200005c62000056620000c8565b6200011c565b6200007557620000756200006f620000c8565b6200013f565b6200008962000083620000c8565b62000191565b620000a257620000a26200009c620000c8565b620001ae565b600380546001600160a01b0319166001600160a01b03929092169190911790556200034e565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001398260016200020060201b620005171790919060201c565b92915050565b6200015a8160016200025460201b6200055f1790919060201c565b6040516001600160a01b038216907fac6fa858e9350a46cec16539926e0fde25b7629f84b5a72bffaae4df888ae86d90600090a250565b6000620001398260026200020060201b620005171790919060201c565b620001c98160026200025460201b6200055f1790919060201c565b6040516001600160a01b038216907f9dfd431959d2d3358e3eb909555ad574123ea5881ff0e05a80f66d4984710c1b90600090a250565b60006001600160a01b038216620002345760405162461bcd60e51b81526004016200022b906200030c565b60405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b62000260828262000200565b15620002805760405162461bcd60e51b81526004016200022b90620002d5565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b600060208284031215620002b7578081fd5b81516001600160a01b0381168114620002ce578182fd5b9392505050565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604082015261737360f01b606082015260800190565b610ae6806200035e6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638e478cab116100715780638e478cab146101245780639870d7fe14610137578063b3ab15fb1461014a578063d914cd4b1461015d578063e4e103dc14610170578063f2fde38b14610183576100b4565b80632ab6f8db146100b957806340cc8518146100c357806356d3590b146100cb5780636d70f7ae146100de578063715018a6146101075780638da5cb5b1461010f575b600080fd5b6100c1610196565b005b6100c16101a8565b6100c16100d9366004610766565b6101b8565b6100f16100ec366004610766565b6101f4565b6040516100fe91906107fd565b60405180910390f35b6100c1610209565b610117610252565b6040516100fe91906107d0565b6100f1610132366004610766565b610261565b6100c1610145366004610766565b61026e565b6100c1610158366004610766565b61029e565b6100c161016b366004610766565b610346565b6100c161017e366004610787565b6103cb565b6100c1610191366004610766565b6104a9565b6101a66101a16105ab565b6105af565b565b6101a66101b36105ab565b6105f1565b6101c36101326105ab565b6101e85760405162461bcd60e51b81526004016101df90610a5c565b60405180910390fd5b6101f181610633565b50565b6000610201600183610517565b90505b919050565b6102116105ab565b6001600160a01b0316610222610252565b6001600160a01b0316146102485760405162461bcd60e51b81526004016101df906109e5565b6101a66000610675565b6000546001600160a01b031690565b6000610201600283610517565b6102796100ec6105ab565b6102955760405162461bcd60e51b81526004016101df90610907565b6101f1816106c5565b6102a66105ab565b6001600160a01b03166102b7610252565b6001600160a01b0316146102dd5760405162461bcd60e51b81526004016101df906109e5565b6001600160a01b0381166103035760405162461bcd60e51b81526004016101df9061095b565b61030c8161026e565b7fdbebfba65bd6398fb722063efc10c99f624f9cd8ba657201056af918a676d5ee8160405161033b91906107d0565b60405180910390a150565b6103516100ec6105ab565b61036d5760405162461bcd60e51b81526004016101df90610907565b6001600160a01b0381166103935760405162461bcd60e51b81526004016101df9061083f565b61039c816101b8565b7fcf0aff36caea97f7ad632b334936cb196014c193ac1a790b578f12a70d9836db8160405161033b91906107d0565b6103d66101326105ab565b6103f25760405162461bcd60e51b81526004016101df90610a5c565b6001600160a01b0382166104185760405162461bcd60e51b81526004016101df906108c6565b60035460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb9061044a90859085906004016107e4565b602060405180830381600087803b15801561046457600080fd5b505af1158015610478573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049c91906107b0565b6104a557600080fd5b5050565b6104b16105ab565b6001600160a01b03166104c2610252565b6001600160a01b0316146104e85760405162461bcd60e51b81526004016101df906109e5565b6001600160a01b03811661050e5760405162461bcd60e51b81526004016101df90610880565b6101f181610675565b60006001600160a01b03821661053f5760405162461bcd60e51b81526004016101df90610a1a565b506001600160a01b03166000908152602091909152604090205460ff1690565b6105698282610517565b156105865760405162461bcd60e51b81526004016101df90610808565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3390565b6105ba600182610707565b6040516001600160a01b038216907f80c0b871b97b595b16a7741c1b06fed0c6f6f558639f18ccbce50724325dc40d90600090a250565b6105fc600282610707565b6040516001600160a01b038216907fce699c579f0b70ea4ccd6a4b38be26726a2c248b89c7102ccbc5d0f3060ef6d090600090a250565b61063e60028261055f565b6040516001600160a01b038216907f9dfd431959d2d3358e3eb909555ad574123ea5881ff0e05a80f66d4984710c1b90600090a250565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6106d060018261055f565b6040516001600160a01b038216907fac6fa858e9350a46cec16539926e0fde25b7629f84b5a72bffaae4df888ae86d90600090a250565b6107118282610517565b61072d5760405162461bcd60e51b81526004016101df906109a4565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b80356001600160a01b038116811461020457600080fd5b600060208284031215610777578081fd5b6107808261074f565b9392505050565b60008060408385031215610799578081fd5b6107a28361074f565b946020939093013593505050565b6000602082840312156107c1578081fd5b81518015158114610780578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526021908201527f3032313020506f6f6c20616464726573732063616e6e6f74206265207a65726f6040820152601760f91b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526021908201527f30323330205573657220616464726573732063616e6e6f74206265207a65726f6040820152601760f91b606082015260800190565b60208082526034908201527f4f70657261746f72526f6c653a2063616c6c657220646f6573206e6f74206861604082015273766520746865204f70657261746f7220726f6c6560601b606082015260800190565b60208082526029908201527f30323030204e6577204f70657261746f7220616464726573732063616e6e6f74604082015268103132903d32b9379760b91b606082015260800190565b60208082526021908201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6040820152606560f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526034908201527f5265776172646572526f6c653a2063616c6c657220646f6573206e6f7420686160408201527376652074686520526577617264657220726f6c6560601b60608201526080019056fea264697066735822122012cdb68020836bf1e9f19d14189f70a141038cc830eb5ec12577335f35f6468664736f6c63430008000033";
