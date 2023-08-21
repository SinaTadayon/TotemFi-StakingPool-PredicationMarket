import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingPoolStorageStructure } from "../StakingPoolStorageStructure";
export declare class StakingPoolStorageStructure__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StakingPoolStorageStructure>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StakingPoolStorageStructure;
    connect(signer: Signer): StakingPoolStorageStructure__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingPoolStorageStructure;
}
