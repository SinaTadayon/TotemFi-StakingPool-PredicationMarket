import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILocker } from "../ILocker";
export declare class ILocker__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILocker;
}
