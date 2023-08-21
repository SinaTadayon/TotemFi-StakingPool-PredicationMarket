import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPancakeRouter01 } from "../IPancakeRouter01";
export declare class IPancakeRouter01__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IPancakeRouter01;
}
