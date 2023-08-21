import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AdvisorsVesting } from "../AdvisorsVesting";
export declare class AdvisorsVesting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AdvisorsVesting>;
    getDeployTransaction(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AdvisorsVesting;
    connect(signer: Signer): AdvisorsVesting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AdvisorsVesting;
}
