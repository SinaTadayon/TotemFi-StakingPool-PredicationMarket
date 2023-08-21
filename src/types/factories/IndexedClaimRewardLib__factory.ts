/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { IndexedClaimRewardLib } from "../IndexedClaimRewardLib";

export class IndexedClaimRewardLib__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IndexedClaimRewardLib> {
    return super.deploy(overrides || {}) as Promise<IndexedClaimRewardLib>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IndexedClaimRewardLib {
    return super.attach(address) as IndexedClaimRewardLib;
  }
  connect(signer: Signer): IndexedClaimRewardLib__factory {
    return super.connect(signer) as IndexedClaimRewardLib__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IndexedClaimRewardLib {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IndexedClaimRewardLib;
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
  "0x610c8d61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c8063c298557811610065578063c2985578146100ea578063eaff3050146100f2578063ec8ecc0214610112578063f7ac9cba1461013257610087565b80634f1604231461008c5780635eac7af3146100b557806393aaeaf9146100c8575b600080fd5b61009f61009a366004610a27565b610153565b6040516100ac9190610a83565b60405180910390f35b61009f6100c3366004610a06565b61019a565b8180156100d457600080fd5b506100e86100e3366004610a06565b610247565b005b61009f6102dc565b8180156100fe57600080fd5b506100e861010d366004610a27565b6102e1565b81801561011e57600080fd5b506100e861012d366004610a06565b6103be565b610145610140366004610a52565b610424565b6040516100ac929190610a8c565b825460009061016457506000610193565b8354831061017457506000610193565b6000806101828686866105a4565b905061018e8282610717565b925050505b9392505050565b81546000906101ab57506000610241565b825482106101bb57506000610241565b60008383815481106101dd57634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160070160019054906101000a900460ff1661023e5761023b84848154811061022357634e487b7160e01b600052603260045260246000fd5b60009182526020909120600890910201548290610717565b90505b90505b92915050565b8154610252576102d8565b81818154811061027257634e487b7160e01b600052603260045260246000fd5b600091825260209091206007600890920201015460ff1615610293576102d8565b60018282815481106102b557634e487b7160e01b600052603260045260246000fd5b60009182526020909120600890910201600701805460ff19169115159190911790555b5050565b600081565b82546102ec576103b9565b825482106102f9576103b9565b60006103068484846105a4565b90504284848154811061032957634e487b7160e01b600052603260045260246000fd5b9060005260206000209060080201600301819055506103828185858154811061036257634e487b7160e01b600052603260045260246000fd5b90600052602060002090600802016002015461071790919063ffffffff16565b8484815481106103a257634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160020181905550505b505050565b81546103c9576102d8565b815481106103d6576102d8565b60018282815481106103f857634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160070160016101000a81548160ff0219169083151502179055505050565b60098201546000908190610100900460ff166104455750600090508061059b565b85546104565750600090508061059b565b855485106104695750600090508061059b565b85858154811061048957634e487b7160e01b600052603260045260246000fd5b600091825260209091206007600890920201015460ff16156104b05750600090508061059b565b60006104df85600301546104d98760080154600a6104ce9190610b0f565b600489015490610723565b9061072f565b905060008060006105218a8a8154811061050957634e487b7160e01b600052603260045260246000fd5b9060005260206000209060080201600601548861073b565b905061054461053d828a600501546107d690919063ffffffff16565b8490610717565b925061055a61055385836107d6565b8390610717565b6007890154909250156105935760078801546105779084906107e8565b92506105908860070154836107e890919063ffffffff16565b91505b509093509150505b94509492505050565b6000808260020154836001015484600001546105c09190610a9a565b6105ca9190610a9a565b905060008142116105db57426105dd565b815b600985015490915060009060ff161561062e5761062b87878154811061061357634e487b7160e01b600052603260045260246000fd5b90600052602060002090600802016001015486610810565b90505b60006106c561064a83886006015461071790919063ffffffff16565b61068e8a8a8154811061066d57634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160010154866108c790919063ffffffff16565b8a8a815481106106ae57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060080201600001546108d3565b905061070b8888815481106106ea57634e487b7160e01b600052603260045260246000fd5b906000526020600020906008020160020154826108c790919063ffffffff16565b98975050505050505050565b600061023e8284610a9a565b600061023e8284610bf0565b600061023e8284610ab2565b6000805b82548110156107cc5782818154811061076857634e487b7160e01b600052603260045260246000fd5b90600052602060002090600202016000015484116107ba578281815481106107a057634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160010154915050610241565b806107c481610c26565b91505061073f565b5060009392505050565b600061023e6127106104d98585610723565b6000826107f757506000610241565b81610803575081610241565b61023e61053d84846107d6565b600981015460009060ff1661082757506000610241565b6001820154825460009161083b9190610717565b9050600061084982866108c7565b90506202a30081101561086157600092505050610241565b6203f48081101561087757606492505050610241565b6205460081101561088d5760c892505050610241565b620697808110156108a45761012c92505050610241565b6207e9008110156108bb5761019092505050610241565b6101f492505050610241565b600061023e8284610c0f565b60006301e13380816108f46305f5e1006108ee600285610b1e565b90610723565b9050600061090a6113886108ee85818a8c610723565b905060006109296113886108ee610922600288610b1e565b8b90610723565b9050600061094b60066104d961094060028d610b1e565b6108ee60028d610b1e565b9050600061096f60026104d9886108ee60028f6109689190610b1e565b8e90610723565b9050600061099360036104d961098660028b610b1e565b60028f6108ee9190610b1e565b905060006109ad826109a786818b8b610717565b90610717565b90506109c3836109bd83886108c7565b906108c7565b90506109d38b6108ee838f610723565b90506109f664e8d4a510006104d96109ec60038c610b1e565b6104d9858f610723565b9c9b505050505050505050505050565b60008060408385031215610a18578182fd5b50508035926020909101359150565b600080600060608486031215610a3b578081fd5b505081359360208301359350604090920135919050565b60008060008060808587031215610a67578081fd5b5050823594602084013594506040840135936060013592509050565b90815260200190565b918252602082015260400190565b60008219821115610aad57610aad610c41565b500190565b600082610acd57634e487b7160e01b81526012600452602481fd5b500490565b80825b6001808611610ae4575061059b565b818704821115610af657610af6610c41565b80861615610b0357918102915b9490941c938002610ad5565b600061023e6000198484610b2c565b600061023e60001960ff8516845b600082610b3b57506001610193565b81610b4857506000610193565b8160018114610b5e5760028114610b6857610b95565b6001915050610193565b60ff841115610b7957610b79610c41565b6001841b915084821115610b8f57610b8f610c41565b50610193565b5060208310610133831016604e8410600b8410161715610bc8575081810a83811115610bc357610bc3610c41565b610193565b610bd58484846001610ad2565b808604821115610be757610be7610c41565b02949350505050565b6000816000190483118215151615610c0a57610c0a610c41565b500290565b600082821015610c2157610c21610c41565b500390565b6000600019821415610c3a57610c3a610c41565b5060010190565b634e487b7160e01b600052601160045260246000fdfea264697066735822122057a54ebf1ac1c1ae4c5643a3955b58ab7145407dc48e2cfdb52c7cb900006fb164736f6c63430008000033";
