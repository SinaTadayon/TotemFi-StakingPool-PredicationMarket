import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PrivateSaleVesting } from "../PrivateSaleVesting";
export declare class PrivateSaleVesting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PrivateSaleVesting>;
    getDeployTransaction(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PrivateSaleVesting;
    connect(signer: Signer): PrivateSaleVesting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PrivateSaleVesting;
}
