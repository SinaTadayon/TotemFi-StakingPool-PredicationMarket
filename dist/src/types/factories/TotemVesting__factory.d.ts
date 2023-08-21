import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TotemVesting } from "../TotemVesting";
export declare class TotemVesting__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_totemToken: string, _totalAmount: BigNumberish, _withdrawInterval: BigNumberish, _releasePeriods: BigNumberish, _lockPeriods: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TotemVesting>;
    getDeployTransaction(_totemToken: string, _totalAmount: BigNumberish, _withdrawInterval: BigNumberish, _releasePeriods: BigNumberish, _lockPeriods: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TotemVesting;
    connect(signer: Signer): TotemVesting__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TotemVesting;
}
