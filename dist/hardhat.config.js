"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require("hardhat-typechain");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("@tenderly/hardhat-tenderly");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-abi-exporter");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-contract-sizer");
// read MNEMONIC from env variable
var mnemonic = process.env.MNEMONIC;
var privateKey = process.env.PRIVATE_KEY;
var etherscanKey = process.env.ETHERSCAN_KEY;
var accounts = mnemonic
    ? { mnemonic: mnemonic }
    : privateKey
        ? ["0x" + privateKey]
        : undefined;
var infuraNetwork = function (network, chainId, gas) {
    return {
        url: "https://" + network + ".infura.io/v3/" + process.env.PROJECT_ID,
        chainId: chainId,
        gas: gas,
        accounts: accounts,
        gasPrice: 200000000000,
    };
};
var config = {
    networks: {
        hardhat: mnemonic ? { accounts: { mnemonic: mnemonic } } : {},
        localhost: {
            url: "http://localhost:8545",
            accounts: accounts,
        },
        mainnet: infuraNetwork("mainnet", 1, 6283185),
        ropsten: infuraNetwork("ropsten", 3, 6283185),
        rinkeby: infuraNetwork("rinkeby", 4, 6283185),
        kovan: infuraNetwork("kovan", 42, 6283185),
        goerli: infuraNetwork("goerli", 5, 6283185),
        matic: {
            url: "https://rpc-mainnet.maticvigil.com/",
            chainId: 137,
            accounts: accounts,
        },
        matic_testnet: {
            url: "https://rpc-mumbai.matic.today",
            chainId: 80001,
            accounts: accounts,
        },
        bsc: {
            url: "https://bsc-dataseed1.binance.org/",
            chainId: 56,
            gasPrice: 20000000000,
            accounts: accounts,
        },
        bsc_testnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545",
            chainId: 97,
            accounts: accounts,
        },
        // This was used to test deployments of proxy contracts on ropsten
        ropsten_proxy: {
            url: "https://ropsten.infura.io/v3/af6c4e2d4920466e830c915a2ec874c7",
            chainId: 3,
            accounts: accounts,
        },
    },
    etherscan: {
        apiKey: etherscanKey,
    },
    solidity: {
        compilers: [
            {
                version: "0.8.0",
                settings: {
                    optimizer: {
                        enabled: true,
                    },
                },
            }
        ],
    },
    abiExporter: {
        path: './pkg/abi',
        clear: false,
        flat: true,
        // only: [':ERC20$'],
        spacing: 2
    },
    paths: {
        artifacts: "artifacts",
        deploy: "deploy",
        deployments: "deployments",
        sources: "contracts",
        tests: "test",
        cache: "cache",
        root: ".",
    },
    typechain: {
        outDir: "src/types",
        target: "ethers-v5",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
};
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map