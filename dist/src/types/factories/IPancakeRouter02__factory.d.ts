import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeRouter02 } from "../IPancakeRouter02";
export declare class IPancakeRouter02__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeRouter02;
}
