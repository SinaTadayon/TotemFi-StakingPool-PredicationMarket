import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CalculateRewardLib } from "../CalculateRewardLib";
export declare class CalculateRewardLib__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CalculateRewardLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CalculateRewardLib;
    connect(signer: Signer): CalculateRewardLib__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CalculateRewardLib;
}
