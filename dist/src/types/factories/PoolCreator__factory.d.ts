import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoolCreator } from "../PoolCreator";
export declare class PoolCreator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PoolCreator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PoolCreator;
    connect(signer: Signer): PoolCreator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PoolCreator;
}
