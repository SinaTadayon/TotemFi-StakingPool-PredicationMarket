import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WrappedTokenDistributorUpgradeable } from "../WrappedTokenDistributorUpgradeable";
export declare class WrappedTokenDistributorUpgradeable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WrappedTokenDistributorUpgradeable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WrappedTokenDistributorUpgradeable;
    connect(signer: Signer): WrappedTokenDistributorUpgradeable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WrappedTokenDistributorUpgradeable;
}
