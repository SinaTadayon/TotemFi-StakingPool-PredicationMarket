import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SeedVesting } from "../SeedVesting";
export declare class SeedVesting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SeedVesting>;
    getDeployTransaction(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SeedVesting;
    connect(signer: Signer): SeedVesting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SeedVesting;
}
