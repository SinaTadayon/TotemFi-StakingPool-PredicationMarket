/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ClaimRewardLib } from "../ClaimRewardLib";

export class ClaimRewardLib__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClaimRewardLib> {
    return super.deploy(overrides || {}) as Promise<ClaimRewardLib>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ClaimRewardLib {
    return super.attach(address) as ClaimRewardLib;
  }
  connect(signer: Signer): ClaimRewardLib__factory {
    return super.connect(signer) as ClaimRewardLib__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClaimRewardLib {
    return new Contract(address, _abi, signerOrProvider) as ClaimRewardLib;
  }
}

const _abi = [
  {
    inputs: [],
    name: "foo",
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
];

const _bytecode =
  "0x610bb161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c806332a1b321146100715780634142c6521461009b57806347dc9eee146100bd578063c2985578146100dd578063d4675770146100f2578063f66d9a4d14610105575b600080fd5b61008461007f366004610973565b610125565b6040516100929291906109a7565b60405180910390f35b8180156100a757600080fd5b506100bb6100b6366004610952565b6102a4565b005b8180156100c957600080fd5b506100bb6100d836600461093a565b610391565b6100e5610401565b604051610092919061099e565b6100e5610100366004610952565b610406565b81801561011157600080fd5b506100bb61012036600461093a565b61045d565b60098201546000908190610100900460ff166101465750600090508061029c565b84546101575750600090508061029c565b600061018685600301546101808760080154600a6101759190610a33565b6004890154906104d1565b906104e4565b905060008060005b885481101561025e578881815481106101b757634e487b7160e01b600052603260045260246000fd5b600091825260209091206007600890920201015460ff1661024c57600061020f8a83815481106101f757634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160060154896104f0565b905061023261022b828b6005015461058b90919063ffffffff16565b859061059d565b9350610248610241868361058b565b849061059d565b9250505b8061025681610b4a565b91505061018e565b506007870154156102955760078701546102799083906105a9565b91506102928760070154826105a990919063ffffffff16565b90505b9093509150505b935093915050565b81546102af5761038d565b60005b825481101561038b5760006102c88483856105d1565b9050428483815481106102eb57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060080201600301819055506103448185848154811061032457634e487b7160e01b600052603260045260246000fd5b90600052602060002090600802016002015461059d90919063ffffffff16565b84838154811061036457634e487b7160e01b600052603260045260246000fd5b6000918252602090912060026008909202010155508061038381610b4a565b9150506102b2565b505b5050565b805461039c576103fe565b60005b815481101561038d5760018282815481106103ca57634e487b7160e01b600052603260045260246000fd5b60009182526020909120600890910201600701805460ff1916911515919091179055806103f681610b4a565b91505061039f565b50565b600081565b815460009061041757506000610457565b6000805b84548110156104535760006104318683876105d1565b905061043d838261059d565b925050808061044b90610b4a565b91505061041b565b5090505b92915050565b8054610468576103fe565b60005b815481101561038d57600182828154811061049657634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160070160016101000a81548160ff02191690831515021790555080806104c990610b4a565b91505061046b565b60006104dd8284610b14565b9392505050565b60006104dd82846109cd565b6000805b82548110156105815782818154811061051d57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160000154841161056f5782818154811061055557634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160010154915050610457565b8061057981610b4a565b9150506104f4565b5060009392505050565b60006104dd61271061018085856104d1565b60006104dd82846109b5565b6000826105b857506000610457565b816105c4575081610457565b6104dd610241848461058b565b6000808260020154836001015484600001546105ed91906109b5565b6105f791906109b5565b90506000814211610608574261060a565b815b600985015490915060009060ff161561065b5761065887878154811061064057634e487b7160e01b600052603260045260246000fd5b90600052602060002090600802016001015486610744565b90505b60006106f261067783886006015461059d90919063ffffffff16565b6106bb8a8a8154811061069a57634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160010154866107fb90919063ffffffff16565b8a8a815481106106db57634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160000154610807565b905061073888888154811061071757634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160020154826107fb90919063ffffffff16565b98975050505050505050565b600981015460009060ff1661075b57506000610457565b6001820154825460009161076f919061059d565b9050600061077d82866107fb565b90506202a30081101561079557600092505050610457565b6203f4808110156107ab57606492505050610457565b620546008110156107c15760c892505050610457565b620697808110156107d85761012c92505050610457565b6207e9008110156107ef5761019092505050610457565b6101f492505050610457565b60006104dd8284610b33565b60006301e13380816108286305f5e100610822600285610a42565b906104d1565b9050600061083e61138861082285818a8c6104d1565b9050600061085d611388610822610856600288610a42565b8b906104d1565b9050600061087f600661018061087460028d610a42565b61082260028d610a42565b905060006108a360026101808861082260028f61089c9190610a42565b8e906104d1565b905060006108c760036101806108ba60028b610a42565b60028f6108229190610a42565b905060006108e1826108db86818b8b61059d565b9061059d565b90506108f7836108f183886107fb565b906107fb565b90506109078b610822838f6104d1565b905061092a64e8d4a5100061018061092060038c610a42565b610180858f6104d1565b9c9b505050505050505050505050565b60006020828403121561094b578081fd5b5035919050565b60008060408385031215610964578081fd5b50508035926020909101359150565b600080600060608486031215610987578081fd5b505081359360208301359350604090920135919050565b90815260200190565b918252602082015260400190565b600082198211156109c8576109c8610b65565b500190565b6000826109e857634e487b7160e01b81526012600452602481fd5b500490565b80825b60018086116109ff5750610a2a565b818704821115610a1157610a11610b65565b80861615610a1e57918102915b9490941c9380026109f0565b94509492505050565b60006104dd6000198484610a50565b60006104dd60001960ff8516845b600082610a5f575060016104dd565b81610a6c575060006104dd565b8160018114610a825760028114610a8c57610ab9565b60019150506104dd565b60ff841115610a9d57610a9d610b65565b6001841b915084821115610ab357610ab3610b65565b506104dd565b5060208310610133831016604e8410600b8410161715610aec575081810a83811115610ae757610ae7610b65565b6104dd565b610af984848460016109ed565b808604821115610b0b57610b0b610b65565b02949350505050565b6000816000190483118215151615610b2e57610b2e610b65565b500290565b600082821015610b4557610b45610b65565b500390565b6000600019821415610b5e57610b5e610b65565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220593212036c3c7aad37a26f660e34f39ba28c311f7134a006a7004b2b8260f51d64736f6c63430008000033";
