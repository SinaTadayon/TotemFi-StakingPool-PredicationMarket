import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ClaimRewardLib } from "../ClaimRewardLib";
export declare class ClaimRewardLib__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ClaimRewardLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ClaimRewardLib;
    connect(signer: Signer): ClaimRewardLib__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ClaimRewardLib;
}
