import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILockerUser } from "../ILockerUser";
export declare class ILockerUser__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILockerUser;
}
