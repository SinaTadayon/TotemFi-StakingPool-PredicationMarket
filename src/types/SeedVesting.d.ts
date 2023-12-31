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

interface SeedVestingInterface extends ethers.utils.Interface {
  functions: {
    "LOCK_PERIODS()": FunctionFragment;
    "RELEASE_PERIODS()": FunctionFragment;
    "TOTAL_AMOUNT()": FunctionFragment;
    "WITHDRAW_INTERVAL()": FunctionFragment;
    "addRecipient(address,uint256)": FunctionFragment;
    "isStartTimeSet()": FunctionFragment;
    "lockPeriods()": FunctionFragment;
    "owner()": FunctionFragment;
    "recipients(address)": FunctionFragment;
    "releasePeriods()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setStartTime(uint256)": FunctionFragment;
    "startTime()": FunctionFragment;
    "totalAmount()": FunctionFragment;
    "totemToken()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unallocatedAmount()": FunctionFragment;
    "vested(address)": FunctionFragment;
    "withdraw()": FunctionFragment;
    "withdrawInterval()": FunctionFragment;
    "withdrawable(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "LOCK_PERIODS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RELEASE_PERIODS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOTAL_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAW_INTERVAL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addRecipient",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isStartTimeSet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockPeriods",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "recipients", values: [string]): string;
  encodeFunctionData(
    functionFragment: "releasePeriods",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setStartTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totemToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unallocatedAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vested", values: [string]): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawInterval",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawable",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "LOCK_PERIODS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RELEASE_PERIODS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOTAL_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAW_INTERVAL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isStartTimeSet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockPeriods",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipients", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releasePeriods",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totemToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unallocatedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vested", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawable",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "StartTimeSet(uint256)": EventFragment;
    "VestingScheduleRegistered(address,uint256)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StartTimeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VestingScheduleRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class SeedVesting extends Contract {
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

  interface: SeedVestingInterface;

  functions: {
    LOCK_PERIODS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "LOCK_PERIODS()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    RELEASE_PERIODS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "RELEASE_PERIODS()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOTAL_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    "TOTAL_AMOUNT()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    WITHDRAW_INTERVAL(overrides?: CallOverrides): Promise<[BigNumber]>;

    "WITHDRAW_INTERVAL()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    addRecipient(
      _newRecipient: string,
      _totalAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addRecipient(address,uint256)"(
      _newRecipient: string,
      _totalAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isStartTimeSet(overrides?: CallOverrides): Promise<[boolean]>;

    "isStartTimeSet()"(overrides?: CallOverrides): Promise<[boolean]>;

    lockPeriods(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lockPeriods()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    recipients(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalAmount: BigNumber;
        amountWithdrawn: BigNumber;
      }
    >;

    "recipients(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalAmount: BigNumber;
        amountWithdrawn: BigNumber;
      }
    >;

    releasePeriods(overrides?: CallOverrides): Promise<[BigNumber]>;

    "releasePeriods()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStartTime(
      _newStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setStartTime(uint256)"(
      _newStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totemToken(overrides?: CallOverrides): Promise<[string]>;

    "totemToken()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unallocatedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "unallocatedAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    vested(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _amountVested: BigNumber }>;

    "vested(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _amountVested: BigNumber }>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawInterval(overrides?: CallOverrides): Promise<[BigNumber]>;

    "withdrawInterval()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawable(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;

    "withdrawable(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount: BigNumber }>;
  };

  LOCK_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

  "LOCK_PERIODS()"(overrides?: CallOverrides): Promise<BigNumber>;

  RELEASE_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

  "RELEASE_PERIODS()"(overrides?: CallOverrides): Promise<BigNumber>;

  TOTAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  "TOTAL_AMOUNT()"(overrides?: CallOverrides): Promise<BigNumber>;

  WITHDRAW_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

  "WITHDRAW_INTERVAL()"(overrides?: CallOverrides): Promise<BigNumber>;

  addRecipient(
    _newRecipient: string,
    _totalAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addRecipient(address,uint256)"(
    _newRecipient: string,
    _totalAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isStartTimeSet(overrides?: CallOverrides): Promise<boolean>;

  "isStartTimeSet()"(overrides?: CallOverrides): Promise<boolean>;

  lockPeriods(overrides?: CallOverrides): Promise<BigNumber>;

  "lockPeriods()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  recipients(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      totalAmount: BigNumber;
      amountWithdrawn: BigNumber;
    }
  >;

  "recipients(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      totalAmount: BigNumber;
      amountWithdrawn: BigNumber;
    }
  >;

  releasePeriods(overrides?: CallOverrides): Promise<BigNumber>;

  "releasePeriods()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStartTime(
    _newStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setStartTime(uint256)"(
    _newStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  totemToken(overrides?: CallOverrides): Promise<string>;

  "totemToken()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unallocatedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "unallocatedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  vested(beneficiary: string, overrides?: CallOverrides): Promise<BigNumber>;

  "vested(address)"(
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawInterval(overrides?: CallOverrides): Promise<BigNumber>;

  "withdrawInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawable(
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "withdrawable(address)"(
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    LOCK_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

    "LOCK_PERIODS()"(overrides?: CallOverrides): Promise<BigNumber>;

    RELEASE_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

    "RELEASE_PERIODS()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    "TOTAL_AMOUNT()"(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAW_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

    "WITHDRAW_INTERVAL()"(overrides?: CallOverrides): Promise<BigNumber>;

    addRecipient(
      _newRecipient: string,
      _totalAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addRecipient(address,uint256)"(
      _newRecipient: string,
      _totalAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isStartTimeSet(overrides?: CallOverrides): Promise<boolean>;

    "isStartTimeSet()"(overrides?: CallOverrides): Promise<boolean>;

    lockPeriods(overrides?: CallOverrides): Promise<BigNumber>;

    "lockPeriods()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    recipients(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalAmount: BigNumber;
        amountWithdrawn: BigNumber;
      }
    >;

    "recipients(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        totalAmount: BigNumber;
        amountWithdrawn: BigNumber;
      }
    >;

    releasePeriods(overrides?: CallOverrides): Promise<BigNumber>;

    "releasePeriods()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setStartTime(
      _newStartTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setStartTime(uint256)"(
      _newStartTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    totemToken(overrides?: CallOverrides): Promise<string>;

    "totemToken()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unallocatedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "unallocatedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    vested(beneficiary: string, overrides?: CallOverrides): Promise<BigNumber>;

    "vested(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(overrides?: CallOverrides): Promise<void>;

    "withdraw()"(overrides?: CallOverrides): Promise<void>;

    withdrawInterval(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawable(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdrawable(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    StartTimeSet(
      startTime: null
    ): TypedEventFilter<[BigNumber], { startTime: BigNumber }>;

    VestingScheduleRegistered(
      registeredAddress: null,
      totalAmount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { registeredAddress: string; totalAmount: BigNumber }
    >;

    Withdraw(
      registeredAddress: null,
      amountWithdrawn: null
    ): TypedEventFilter<
      [string, BigNumber],
      { registeredAddress: string; amountWithdrawn: BigNumber }
    >;
  };

  estimateGas: {
    LOCK_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

    "LOCK_PERIODS()"(overrides?: CallOverrides): Promise<BigNumber>;

    RELEASE_PERIODS(overrides?: CallOverrides): Promise<BigNumber>;

    "RELEASE_PERIODS()"(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    "TOTAL_AMOUNT()"(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAW_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

    "WITHDRAW_INTERVAL()"(overrides?: CallOverrides): Promise<BigNumber>;

    addRecipient(
      _newRecipient: string,
      _totalAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addRecipient(address,uint256)"(
      _newRecipient: string,
      _totalAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isStartTimeSet(overrides?: CallOverrides): Promise<BigNumber>;

    "isStartTimeSet()"(overrides?: CallOverrides): Promise<BigNumber>;

    lockPeriods(overrides?: CallOverrides): Promise<BigNumber>;

    "lockPeriods()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    recipients(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "recipients(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    releasePeriods(overrides?: CallOverrides): Promise<BigNumber>;

    "releasePeriods()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStartTime(
      _newStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setStartTime(uint256)"(
      _newStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    totemToken(overrides?: CallOverrides): Promise<BigNumber>;

    "totemToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unallocatedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "unallocatedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    vested(beneficiary: string, overrides?: CallOverrides): Promise<BigNumber>;

    "vested(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawInterval(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawInterval()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawable(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdrawable(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LOCK_PERIODS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LOCK_PERIODS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RELEASE_PERIODS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "RELEASE_PERIODS()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TOTAL_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TOTAL_AMOUNT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WITHDRAW_INTERVAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WITHDRAW_INTERVAL()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addRecipient(
      _newRecipient: string,
      _totalAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addRecipient(address,uint256)"(
      _newRecipient: string,
      _totalAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isStartTimeSet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isStartTimeSet()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockPeriods(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lockPeriods()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipients(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "recipients(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    releasePeriods(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "releasePeriods()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStartTime(
      _newStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setStartTime(uint256)"(
      _newStartTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totemToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totemToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unallocatedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "unallocatedAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vested(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vested(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "withdrawInterval()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawable(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "withdrawable(address)"(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
