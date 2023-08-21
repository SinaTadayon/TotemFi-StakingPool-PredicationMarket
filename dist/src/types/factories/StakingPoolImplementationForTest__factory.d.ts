import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StakingPoolImplementationForTest } from "../StakingPoolImplementationForTest";
export declare class StakingPoolImplementationForTest__factory extends ContractFactory {
    constructor(linkLibraryAddresses: StakingPoolImplementationForTestLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: StakingPoolImplementationForTestLibraryAddresses): string;
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StakingPoolImplementationForTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StakingPoolImplementationForTest;
    connect(signer: Signer): StakingPoolImplementationForTest__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakingPoolImplementationForTest;
}
export interface StakingPoolImplementationForTestLibraryAddresses {
    ["__$7fd944d8f8efff7c575121b9e933203c2c$__"]: string;
    ["__$171d2da81d2a08eb52330533595f0c4998$__"]: string;
    ["__$60b6e19b11029f04c25a43d0435d86b2be$__"]: string;
}
