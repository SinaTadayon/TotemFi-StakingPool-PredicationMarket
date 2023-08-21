import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TotemTokenManager } from "../TotemTokenManager";
export declare class TotemTokenManager__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TotemTokenManager>;
    getDeployTransaction(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TotemTokenManager;
    connect(signer: Signer): TotemTokenManager__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TotemTokenManager;
}
