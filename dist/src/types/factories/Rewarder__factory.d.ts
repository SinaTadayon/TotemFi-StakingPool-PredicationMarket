import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Rewarder } from "../Rewarder";
export declare class Rewarder__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Rewarder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Rewarder;
    connect(signer: Signer): Rewarder__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Rewarder;
}
