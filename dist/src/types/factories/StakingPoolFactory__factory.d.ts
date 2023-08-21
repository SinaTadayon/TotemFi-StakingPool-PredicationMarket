import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingPoolFactory } from "../StakingPoolFactory";
export declare class StakingPoolFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, _rewardManager: string, _swapRouter: string, _usdToken: string, _stakingPoolImplementation: string, _superAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StakingPoolFactory>;
    getDeployTransaction(_totemToken: string, _rewardManager: string, _swapRouter: string, _usdToken: string, _stakingPoolImplementation: string, _superAdmin: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StakingPoolFactory;
    connect(signer: Signer): StakingPoolFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingPoolFactory;
}
