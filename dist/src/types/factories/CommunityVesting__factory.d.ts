import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CommunityVesting } from "../CommunityVesting";
export declare class CommunityVesting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CommunityVesting>;
    getDeployTransaction(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CommunityVesting;
    connect(signer: Signer): CommunityVesting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): CommunityVesting;
}
