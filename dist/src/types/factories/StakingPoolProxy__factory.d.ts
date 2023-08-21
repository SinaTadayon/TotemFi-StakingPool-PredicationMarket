import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingPoolProxy } from "../StakingPoolProxy";
export declare class StakingPoolProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StakingPoolProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StakingPoolProxy;
    connect(signer: Signer): StakingPoolProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingPoolProxy;
}
