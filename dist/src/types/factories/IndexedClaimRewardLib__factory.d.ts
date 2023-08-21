import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IndexedClaimRewardLib } from "../IndexedClaimRewardLib";
export declare class IndexedClaimRewardLib__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<IndexedClaimRewardLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): IndexedClaimRewardLib;
    connect(signer: Signer): IndexedClaimRewardLib__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): IndexedClaimRewardLib;
}
