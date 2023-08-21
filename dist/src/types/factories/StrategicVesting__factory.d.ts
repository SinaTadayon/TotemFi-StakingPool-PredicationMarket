import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StrategicVesting } from "../StrategicVesting";
export declare class StrategicVesting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StrategicVesting>;
    getDeployTransaction(_totemToken: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StrategicVesting;
    connect(signer: Signer): StrategicVesting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StrategicVesting;
}
