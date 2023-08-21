import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingPoolImplementation } from "../StakingPoolImplementation";
export declare class StakingPoolImplementation__factory extends ContractFactory {
    constructor(linkLibraryAddresses: StakingPoolImplementationLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: StakingPoolImplementationLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StakingPoolImplementation>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StakingPoolImplementation;
    connect(signer: Signer): StakingPoolImplementation__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingPoolImplementation;
}
export interface StakingPoolImplementationLibraryAddresses {
    ["__$7fd944d8f8efff7c575121b9e933203c2c$__"]: string;
    ["__$171d2da81d2a08eb52330533595f0c4998$__"]: string;
    ["__$60b6e19b11029f04c25a43d0435d86b2be$__"]: string;
}
