/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface PoolCreatorInterface extends ethers.utils.Interface {
  functions: {
    "addPoolCreator(address)": FunctionFragment;
    "isPoolCreator(address)": FunctionFragment;
    "renouncePoolCreator()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPoolCreator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPoolCreator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renouncePoolCreator",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addPoolCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPoolCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renouncePoolCreator",
    data: BytesLike
  ): Result;

  events: {
    "PoolCreatorAdded(address)": EventFragment;
    "PoolCreatorRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreatorAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreatorRemoved"): EventFragment;
}

export class PoolCreator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PoolCreatorInterface;

  functions: {
    addPoolCreator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addPoolCreator(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isPoolCreator(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isPoolCreator(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renouncePoolCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renouncePoolCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addPoolCreator(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addPoolCreator(address)"(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isPoolCreator(account: string, overrides?: CallOverrides): Promise<boolean>;

  "isPoolCreator(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renouncePoolCreator(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renouncePoolCreator()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addPoolCreator(account: string, overrides?: CallOverrides): Promise<void>;

    "addPoolCreator(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isPoolCreator(account: string, overrides?: CallOverrides): Promise<boolean>;

    "isPoolCreator(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renouncePoolCreator(overrides?: CallOverrides): Promise<void>;

    "renouncePoolCreator()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    PoolCreatorAdded(
      account: string | null
    ): TypedEventFilter<[string], { account: string }>;

    PoolCreatorRemoved(
      account: string | null
    ): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    addPoolCreator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addPoolCreator(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isPoolCreator(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isPoolCreator(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renouncePoolCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renouncePoolCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPoolCreator(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addPoolCreator(address)"(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isPoolCreator(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPoolCreator(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renouncePoolCreator(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renouncePoolCreator()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
