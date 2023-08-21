import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TotemToken } from "../TotemToken";
export declare class TotemToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TotemToken>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TotemToken;
    connect(signer: Signer): TotemToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TotemToken;
}
