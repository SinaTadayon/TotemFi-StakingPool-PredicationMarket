import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WrappedERC20Token2 } from "../WrappedERC20Token2";
export declare class WrappedERC20Token2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(NAME: string, SYMBOL: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<WrappedERC20Token2>;
    getDeployTransaction(NAME: string, SYMBOL: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): WrappedERC20Token2;
    connect(signer: Signer): WrappedERC20Token2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): WrappedERC20Token2;
}
