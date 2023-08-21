// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package contracts

import (
	"errors"
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = errors.New
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
)

// ILockerMetaData contains all meta data concerning the ILocker contract.
var ILockerMetaData = &bind.MetaData{
	ABI: "[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"source\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"dest\",\"type\":\"address\"}],\"name\":\"lockOrGetPenalty\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
}

// ILockerABI is the input ABI used to generate the binding from.
// Deprecated: Use ILockerMetaData.ABI instead.
var ILockerABI = ILockerMetaData.ABI

// ILocker is an auto generated Go binding around an Ethereum contract.
type ILocker struct {
	ILockerCaller     // Read-only binding to the contract
	ILockerTransactor // Write-only binding to the contract
	ILockerFilterer   // Log filterer for contract events
}

// ILockerCaller is an auto generated read-only Go binding around an Ethereum contract.
type ILockerCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ILockerTransactor is an auto generated write-only Go binding around an Ethereum contract.
type ILockerTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ILockerFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type ILockerFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// ILockerSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type ILockerSession struct {
	Contract     *ILocker          // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// ILockerCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type ILockerCallerSession struct {
	Contract *ILockerCaller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts  // Call options to use throughout this session
}

// ILockerTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type ILockerTransactorSession struct {
	Contract     *ILockerTransactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts  // Transaction auth options to use throughout this session
}

// ILockerRaw is an auto generated low-level Go binding around an Ethereum contract.
type ILockerRaw struct {
	Contract *ILocker // Generic contract binding to access the raw methods on
}

// ILockerCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type ILockerCallerRaw struct {
	Contract *ILockerCaller // Generic read-only contract binding to access the raw methods on
}

// ILockerTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type ILockerTransactorRaw struct {
	Contract *ILockerTransactor // Generic write-only contract binding to access the raw methods on
}

// NewILocker creates a new instance of ILocker, bound to a specific deployed contract.
func NewILocker(address common.Address, backend bind.ContractBackend) (*ILocker, error) {
	contract, err := bindILocker(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &ILocker{ILockerCaller: ILockerCaller{contract: contract}, ILockerTransactor: ILockerTransactor{contract: contract}, ILockerFilterer: ILockerFilterer{contract: contract}}, nil
}

// NewILockerCaller creates a new read-only instance of ILocker, bound to a specific deployed contract.
func NewILockerCaller(address common.Address, caller bind.ContractCaller) (*ILockerCaller, error) {
	contract, err := bindILocker(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &ILockerCaller{contract: contract}, nil
}

// NewILockerTransactor creates a new write-only instance of ILocker, bound to a specific deployed contract.
func NewILockerTransactor(address common.Address, transactor bind.ContractTransactor) (*ILockerTransactor, error) {
	contract, err := bindILocker(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &ILockerTransactor{contract: contract}, nil
}

// NewILockerFilterer creates a new log filterer instance of ILocker, bound to a specific deployed contract.
func NewILockerFilterer(address common.Address, filterer bind.ContractFilterer) (*ILockerFilterer, error) {
	contract, err := bindILocker(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &ILockerFilterer{contract: contract}, nil
}

// bindILocker binds a generic wrapper to an already deployed contract.
func bindILocker(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(ILockerABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_ILocker *ILockerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _ILocker.Contract.ILockerCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_ILocker *ILockerRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _ILocker.Contract.ILockerTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_ILocker *ILockerRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _ILocker.Contract.ILockerTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_ILocker *ILockerCallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _ILocker.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_ILocker *ILockerTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _ILocker.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_ILocker *ILockerTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _ILocker.Contract.contract.Transact(opts, method, params...)
}

// LockOrGetPenalty is a paid mutator transaction binding the contract method 0xaa61a9dd.
//
// Solidity: function lockOrGetPenalty(address source, address dest) returns(bool, uint256)
func (_ILocker *ILockerTransactor) LockOrGetPenalty(opts *bind.TransactOpts, source common.Address, dest common.Address) (*types.Transaction, error) {
	return _ILocker.contract.Transact(opts, "lockOrGetPenalty", source, dest)
}

// LockOrGetPenalty is a paid mutator transaction binding the contract method 0xaa61a9dd.
//
// Solidity: function lockOrGetPenalty(address source, address dest) returns(bool, uint256)
func (_ILocker *ILockerSession) LockOrGetPenalty(source common.Address, dest common.Address) (*types.Transaction, error) {
	return _ILocker.Contract.LockOrGetPenalty(&_ILocker.TransactOpts, source, dest)
}

// LockOrGetPenalty is a paid mutator transaction binding the contract method 0xaa61a9dd.
//
// Solidity: function lockOrGetPenalty(address source, address dest) returns(bool, uint256)
func (_ILocker *ILockerTransactorSession) LockOrGetPenalty(source common.Address, dest common.Address) (*types.Transaction, error) {
	return _ILocker.Contract.LockOrGetPenalty(&_ILocker.TransactOpts, source, dest)
}
