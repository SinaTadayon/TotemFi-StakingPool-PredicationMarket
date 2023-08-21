import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRewardManager } from "../IRewardManager";
export declare class IRewardManager__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IRewardManager;
}
