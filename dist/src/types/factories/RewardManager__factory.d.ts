import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardManager } from "../RewardManager";
export declare class RewardManager__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RewardManager>;
    getDeployTransaction(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RewardManager;
    connect(signer: Signer): RewardManager__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RewardManager;
}
