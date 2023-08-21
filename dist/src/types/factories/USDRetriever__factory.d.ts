import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { USDRetriever } from "../USDRetriever";
export declare class USDRetriever__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<USDRetriever>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): USDRetriever;
    connect(signer: Signer): USDRetriever__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): USDRetriever;
}
