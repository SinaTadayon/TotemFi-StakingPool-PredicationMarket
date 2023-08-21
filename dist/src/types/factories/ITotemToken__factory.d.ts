import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITotemToken } from "../ITotemToken";
export declare class ITotemToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ITotemToken;
}
