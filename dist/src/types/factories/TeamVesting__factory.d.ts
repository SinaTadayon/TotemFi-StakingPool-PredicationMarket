import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TeamVesting } from "../TeamVesting";
export declare class TeamVesting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TeamVesting>;
    getDeployTransaction(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TeamVesting;
    connect(signer: Signer): TeamVesting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TeamVesting;
}
