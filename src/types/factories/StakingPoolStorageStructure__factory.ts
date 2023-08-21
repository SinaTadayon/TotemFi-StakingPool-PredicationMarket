/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { StakingPoolStorageStructure } from "../StakingPoolStorageStructure";

export class StakingPoolStorageStructure__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakingPoolStorageStructure> {
    return super.deploy(
      overrides || {}
    ) as Promise<StakingPoolStorageStructure>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StakingPoolStorageStructure {
    return super.attach(address) as StakingPoolStorageStructure;
  }
  connect(signer: Signer): StakingPoolStorageStructure__factory {
    return super.connect(signer) as StakingPoolStorageStructure__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingPoolStorageStructure {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakingPoolStorageStructure;
  }
}

const _abi = [
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
    inputs: [],
    name: "averagePricePrediction",
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
    name: "collaborativeRange",
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
    name: "collaborativeReward",
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
  {
    inputs: [],
    name: "isActive",
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
    name: "isAnEmergency",
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
    name: "isDeleted",
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
    name: "isEnhancedEnabled",
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
    name: "isLocked",
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
    name: "isMatured",
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
    name: "launchDate",
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
    name: "lockTime",
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
    name: "lps",
    outputs: [
      {
        internalType: "uint256",
        name: "launchDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturityTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maturingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usdPrizeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prizeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakeApr",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collaborativeReward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oracleDecimals",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isEnhancedEnabled",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isMatured",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maturingPrice",
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
    name: "maturityTime",
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
    name: "oracleContract",
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
    name: "oracleDecimals",
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
    inputs: [],
    name: "poolCreator",
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
    name: "poolType",
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
    name: "potentialCollabReward",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "predictions",
    outputs: [
      {
        internalType: "uint256",
        name: "stakedBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakedTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountWithdrawn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastWithdrawalTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePrediction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "difference",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rank",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "prizeRewardWithdrawn",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "didUnstake",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "prizeAmount",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "prizeRewardRates",
    outputs: [
      {
        internalType: "uint256",
        name: "rank",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "percentage",
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
    inputs: [],
    name: "sizeAllocation",
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
    name: "sizeLimitRangeRate",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sortedStakers",
    outputs: [
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeApr",
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
    name: "stakeTaxRate",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakers",
    outputs: [
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingPoolImplementation",
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
    name: "totalStaked",
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
        internalType: "contract ITotemToken",
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
    name: "upgradeEnabled",
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
    name: "usdPrizeAmount",
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
    name: "wrappedToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedTokenSymbol",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061103c806100206000396000f3fe608060405234801561001057600080fd5b506004361061028a5760003560e01c8063a08b2c791161015c578063de09ee20116100ce578063f1b17a8b11610087578063f1b17a8b14610481578063f2fde38b146104a2578063f3d9dc0d146104b5578063f5e96fc9146104bd578063f8eeed62146104c5578063fd5e6dd1146104cd5761028a565b8063de09ee2014610421578063e081866914610442578063e425df8c14610461578063e68b52e714610469578063e8153c9314610471578063eb850ae1146104795761028a565b8063b1dd61b611610120578063b1dd61b6146103f1578063bece7532146103f9578063c120105414610401578063c6c1decd14610409578063d025188b14610411578063d7efb6b7146104195761028a565b8063a08b2c79146103b1578063a35ef3a7146103b9578063a4e2d634146103ce578063a8f7b346146103d6578063aa7bcb57146103e95761028a565b8063715018a611610200578063817b1cd2116101b9578063817b1cd214610361578063850fa7cb146103695780638cf0e21e146103915780638da5cb5b1461039957806395c2ba47146103a1578063996c6cc3146103a95761028a565b8063715018a61461032f578063725c9c491461033957806373f3170314610341578063785df1f814610349578063785fa627146103515780637f2b6a0d146103595761028a565b80633fcdd82c116102525780633fcdd82c146102f45780634bc4eeb2146103075780634e8bfdaa1461030f57806351eacbf0146103175780636847d0c51461031f5780636b036f45146103275761028a565b80630d6680871461028f5780630f4ef8a6146102ad57806322f3e2d4146102c2578063238a6c74146102d75780632aa8195e146102ec575b600080fd5b6102976104e0565b6040516102a49190610ee8565b60405180910390f35b6102b56104e6565b6040516102a49190610d81565b6102ca6104f5565b6040516102a49190610dc1565b6102df610505565b6040516102a49190610dcc565b6102b5610593565b610297610302366004610d0e565b6105a2565b6102ca610666565b610297610676565b61029761067c565b610297610682565b610297610688565b61033761068e565b005b6102b56106e2565b6102976106f1565b6102976106f7565b6102976106fd565b6102ca610703565b610297610713565b61037c610377366004610c2b565b610719565b6040516102a499989796959493929190610f20565b6102ca610787565b6102b5610797565b6102976107a6565b6102b56107ab565b6102ca6107ba565b6103c16107ca565b6040516102a49190610dae565b6102ca610879565b6103376103e4366004610be9565b610889565b61029761093e565b6102df610944565b6102b5610951565b610297610960565b6102b56109e6565b6102976109f5565b6102ca6109fb565b61043461042f366004610d0e565b610a0b565b6040516102a4929190610d95565b61044a610a43565b6040516102a49b9a99989796959493929190610f63565b610297610a70565b610297610a76565b6102b5610a7c565b610297610a8b565b61049461048f366004610d0e565b610a91565b6040516102a4929190610f12565b6103376104b0366004610bc8565b610abf565b610297610b30565b6102b5610b36565b610297610b45565b6104346104db366004610d0e565b610b4b565b606a5481565b608d546001600160a01b031681565b607b54600160b01b900460ff1681565b607c805461051290610fb5565b80601f016020809104026020016040519081016040528092919081815260200182805461053e90610fb5565b801561058b5780601f106105605761010080835404028352916020019161058b565b820191906000526020600020905b81548152906001019060200180831161056e57829003601f168201915b505050505081565b6079546001600160a01b031681565b60665460009081906001600160a01b031663d06ca61f846105c16107ca565b6040518363ffffffff1660e01b81526004016105de929190610ef1565b60006040518083038186803b1580156105f657600080fd5b505afa15801561060a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106329190810190610c54565b90508060018151811061065557634e487b7160e01b600052603260045260246000fd5b60200260200101519150505b919050565b607b54600160a81b900460ff1681565b606b5481565b606c5481565b60705481565b60715481565b610696610b5b565b6001600160a01b03166106a7610797565b6001600160a01b0316146106d65760405162461bcd60e51b81526004016106cd90610eb3565b60405180910390fd5b6106e06000610b5f565b565b6066546001600160a01b031690565b606f5481565b60785481565b606e5481565b607b54600160c01b900460ff1681565b60725481565b608b602052816000526040600020818154811061073557600080fd5b6000918252602090912060089091020180546001820154600283015460038401546004850154600586015460068701546007909701549598509396509194909391929160ff8082169161010090041689565b607b54600160d01b900460ff1681565b6033546001600160a01b031690565b600581565b608e546001600160a01b031681565b607b54600160a01b900460ff1681565b60408051600280825260608083018452926000929190602083019080368337505060675482519293506001600160a01b03169183915060009061081d57634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260685482519116908290600190811061085c57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209283029190910190910152905090565b607b54600160b81b900460ff1681565b600054610100900460ff16806108a2575060005460ff16155b6108be5760405162461bcd60e51b81526004016106cd90610e65565b600054610100900460ff161580156108e9576000805460ff1961ff0019909116610100171660011790555b606680546001600160a01b038087166001600160a01b0319928316179092556067805486841690831617905560688054928516929091169190911790558015610938576000805461ff00191690555b50505050565b606d5481565b607d805461051290610fb5565b607b546001600160a01b031681565b6065546040516370a0823160e01b81526000916001600160a01b0316906370a0823190610991903090600401610d81565b60206040518083038186803b1580156109a957600080fd5b505afa1580156109bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e19190610d26565b905090565b607a546001600160a01b031681565b60735481565b607b54600160c81b900460ff1681565b608a8181548110610a1b57600080fd5b6000918252602090912060029091020180546001909101546001600160a01b03909116915082565b607e54607f5460805460815460825460835460845460855460865460875460ff808216916101009004168b565b60745481565b60775481565b608c546001600160a01b031681565b60755481565b60888181548110610aa157600080fd5b60009182526020909120600290910201805460019091015490915082565b610ac7610b5b565b6001600160a01b0316610ad8610797565b6001600160a01b031614610afe5760405162461bcd60e51b81526004016106cd90610eb3565b6001600160a01b038116610b245760405162461bcd60e51b81526004016106cd90610e1f565b610b2d81610b5f565b50565b60765481565b6065546001600160a01b031690565b60695481565b60898181548110610a1b57600080fd5b3390565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b038116811461066157600080fd5b600060208284031215610bd9578081fd5b610be282610bb1565b9392505050565b600080600060608486031215610bfd578182fd5b610c0684610bb1565b9250610c1460208501610bb1565b9150610c2260408501610bb1565b90509250925092565b60008060408385031215610c3d578182fd5b610c4683610bb1565b946020939093013593505050565b60006020808385031215610c66578182fd5b825167ffffffffffffffff80821115610c7d578384fd5b818501915085601f830112610c90578384fd5b815181811115610ca257610ca2610ff0565b83810260405185828201018181108582111715610cc157610cc1610ff0565b604052828152858101935084860182860187018a1015610cdf578788fd5b8795505b83861015610d01578051855260019590950194938601938601610ce3565b5098975050505050505050565b600060208284031215610d1f578081fd5b5035919050565b600060208284031215610d37578081fd5b5051919050565b6000815180845260208085019450808401835b83811015610d765781516001600160a01b031687529582019590820190600101610d51565b509495945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b600060208252610be26020830184610d3e565b901515815260200190565b6000602080835283518082850152825b81811015610df857858101830151858201604001528201610ddc565b81811115610e095783604083870101525b50601f01601f1916929092016040019392505050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b90815260200190565b600083825260406020830152610f0a6040830184610d3e565b949350505050565b918252602082015260400190565b988952602089019790975260408801959095526060870193909352608086019190915260a085015260c0840152151560e083015215156101008201526101200190565b9a8b5260208b019990995260408a01979097526060890195909552608088019390935260a087019190915260c086015260e0850152610100840152151561012083015215156101408201526101600190565b600281046001821680610fc957607f821691505b60208210811415610fea57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212207a464cf27ce02c32a5ea9ff7a0fb35e819c8fde5159ae568e01ac161289b406a64736f6c63430008000033";