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

// PriceConsumerUpgradeableMetaData contains all meta data concerning the PriceConsumerUpgradeable contract.
var PriceConsumerUpgradeableMetaData = &bind.MetaData{
	ABI: "[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_oracle\",\"type\":\"address\"}],\"name\":\"__PriceConsumer_initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDecimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLatestPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]",
}

// PriceConsumerUpgradeableABI is the input ABI used to generate the binding from.
// Deprecated: Use PriceConsumerUpgradeableMetaData.ABI instead.
var PriceConsumerUpgradeableABI = PriceConsumerUpgradeableMetaData.ABI

// PriceConsumerUpgradeable is an auto generated Go binding around an Ethereum contract.
type PriceConsumerUpgradeable struct {
	PriceConsumerUpgradeableCaller     // Read-only binding to the contract
	PriceConsumerUpgradeableTransactor // Write-only binding to the contract
	PriceConsumerUpgradeableFilterer   // Log filterer for contract events
}

// PriceConsumerUpgradeableCaller is an auto generated read-only Go binding around an Ethereum contract.
type PriceConsumerUpgradeableCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// PriceConsumerUpgradeableTransactor is an auto generated write-only Go binding around an Ethereum contract.
type PriceConsumerUpgradeableTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// PriceConsumerUpgradeableFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type PriceConsumerUpgradeableFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// PriceConsumerUpgradeableSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type PriceConsumerUpgradeableSession struct {
	Contract     *PriceConsumerUpgradeable // Generic contract binding to set the session for
	CallOpts     bind.CallOpts             // Call options to use throughout this session
	TransactOpts bind.TransactOpts         // Transaction auth options to use throughout this session
}

// PriceConsumerUpgradeableCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type PriceConsumerUpgradeableCallerSession struct {
	Contract *PriceConsumerUpgradeableCaller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts                   // Call options to use throughout this session
}

// PriceConsumerUpgradeableTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type PriceConsumerUpgradeableTransactorSession struct {
	Contract     *PriceConsumerUpgradeableTransactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts                   // Transaction auth options to use throughout this session
}

// PriceConsumerUpgradeableRaw is an auto generated low-level Go binding around an Ethereum contract.
type PriceConsumerUpgradeableRaw struct {
	Contract *PriceConsumerUpgradeable // Generic contract binding to access the raw methods on
}

// PriceConsumerUpgradeableCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type PriceConsumerUpgradeableCallerRaw struct {
	Contract *PriceConsumerUpgradeableCaller // Generic read-only contract binding to access the raw methods on
}

// PriceConsumerUpgradeableTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type PriceConsumerUpgradeableTransactorRaw struct {
	Contract *PriceConsumerUpgradeableTransactor // Generic write-only contract binding to access the raw methods on
}

// NewPriceConsumerUpgradeable creates a new instance of PriceConsumerUpgradeable, bound to a specific deployed contract.
func NewPriceConsumerUpgradeable(address common.Address, backend bind.ContractBackend) (*PriceConsumerUpgradeable, error) {
	contract, err := bindPriceConsumerUpgradeable(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &PriceConsumerUpgradeable{PriceConsumerUpgradeableCaller: PriceConsumerUpgradeableCaller{contract: contract}, PriceConsumerUpgradeableTransactor: PriceConsumerUpgradeableTransactor{contract: contract}, PriceConsumerUpgradeableFilterer: PriceConsumerUpgradeableFilterer{contract: contract}}, nil
}

// NewPriceConsumerUpgradeableCaller creates a new read-only instance of PriceConsumerUpgradeable, bound to a specific deployed contract.
func NewPriceConsumerUpgradeableCaller(address common.Address, caller bind.ContractCaller) (*PriceConsumerUpgradeableCaller, error) {
	contract, err := bindPriceConsumerUpgradeable(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &PriceConsumerUpgradeableCaller{contract: contract}, nil
}

// NewPriceConsumerUpgradeableTransactor creates a new write-only instance of PriceConsumerUpgradeable, bound to a specific deployed contract.
func NewPriceConsumerUpgradeableTransactor(address common.Address, transactor bind.ContractTransactor) (*PriceConsumerUpgradeableTransactor, error) {
	contract, err := bindPriceConsumerUpgradeable(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &PriceConsumerUpgradeableTransactor{contract: contract}, nil
}

// NewPriceConsumerUpgradeableFilterer creates a new log filterer instance of PriceConsumerUpgradeable, bound to a specific deployed contract.
func NewPriceConsumerUpgradeableFilterer(address common.Address, filterer bind.ContractFilterer) (*PriceConsumerUpgradeableFilterer, error) {
	contract, err := bindPriceConsumerUpgradeable(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &PriceConsumerUpgradeableFilterer{contract: contract}, nil
}

// bindPriceConsumerUpgradeable binds a generic wrapper to an already deployed contract.
func bindPriceConsumerUpgradeable(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := abi.JSON(strings.NewReader(PriceConsumerUpgradeableABI))
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _PriceConsumerUpgradeable.Contract.PriceConsumerUpgradeableCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _PriceConsumerUpgradeable.Contract.PriceConsumerUpgradeableTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _PriceConsumerUpgradeable.Contract.PriceConsumerUpgradeableTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableCallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _PriceConsumerUpgradeable.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _PriceConsumerUpgradeable.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _PriceConsumerUpgradeable.Contract.contract.Transact(opts, method, params...)
}

// GetDecimals is a free data retrieval call binding the contract method 0xf0141d84.
//
// Solidity: function getDecimals() view returns(uint8)
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableCaller) GetDecimals(opts *bind.CallOpts) (uint8, error) {
	var out []interface{}
	err := _PriceConsumerUpgradeable.contract.Call(opts, &out, "getDecimals")

	if err != nil {
		return *new(uint8), err
	}

	out0 := *abi.ConvertType(out[0], new(uint8)).(*uint8)

	return out0, err

}

// GetDecimals is a free data retrieval call binding the contract method 0xf0141d84.
//
// Solidity: function getDecimals() view returns(uint8)
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableSession) GetDecimals() (uint8, error) {
	return _PriceConsumerUpgradeable.Contract.GetDecimals(&_PriceConsumerUpgradeable.CallOpts)
}

// GetDecimals is a free data retrieval call binding the contract method 0xf0141d84.
//
// Solidity: function getDecimals() view returns(uint8)
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableCallerSession) GetDecimals() (uint8, error) {
	return _PriceConsumerUpgradeable.Contract.GetDecimals(&_PriceConsumerUpgradeable.CallOpts)
}

// GetLatestPrice is a free data retrieval call binding the contract method 0x8e15f473.
//
// Solidity: function getLatestPrice() view returns(uint256)
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableCaller) GetLatestPrice(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _PriceConsumerUpgradeable.contract.Call(opts, &out, "getLatestPrice")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// GetLatestPrice is a free data retrieval call binding the contract method 0x8e15f473.
//
// Solidity: function getLatestPrice() view returns(uint256)
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableSession) GetLatestPrice() (*big.Int, error) {
	return _PriceConsumerUpgradeable.Contract.GetLatestPrice(&_PriceConsumerUpgradeable.CallOpts)
}

// GetLatestPrice is a free data retrieval call binding the contract method 0x8e15f473.
//
// Solidity: function getLatestPrice() view returns(uint256)
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableCallerSession) GetLatestPrice() (*big.Int, error) {
	return _PriceConsumerUpgradeable.Contract.GetLatestPrice(&_PriceConsumerUpgradeable.CallOpts)
}

// PriceConsumerInitialize is a paid mutator transaction binding the contract method 0x37c4f6a4.
//
// Solidity: function __PriceConsumer_initialize(address _oracle) returns()
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableTransactor) PriceConsumerInitialize(opts *bind.TransactOpts, _oracle common.Address) (*types.Transaction, error) {
	return _PriceConsumerUpgradeable.contract.Transact(opts, "__PriceConsumer_initialize", _oracle)
}

// PriceConsumerInitialize is a paid mutator transaction binding the contract method 0x37c4f6a4.
//
// Solidity: function __PriceConsumer_initialize(address _oracle) returns()
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableSession) PriceConsumerInitialize(_oracle common.Address) (*types.Transaction, error) {
	return _PriceConsumerUpgradeable.Contract.PriceConsumerInitialize(&_PriceConsumerUpgradeable.TransactOpts, _oracle)
}

// PriceConsumerInitialize is a paid mutator transaction binding the contract method 0x37c4f6a4.
//
// Solidity: function __PriceConsumer_initialize(address _oracle) returns()
func (_PriceConsumerUpgradeable *PriceConsumerUpgradeableTransactorSession) PriceConsumerInitialize(_oracle common.Address) (*types.Transaction, error) {
	return _PriceConsumerUpgradeable.Contract.PriceConsumerInitialize(&_PriceConsumerUpgradeable.TransactOpts, _oracle)
}
