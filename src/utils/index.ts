import { Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import CounterABI from "../abi/Counter.json";
import ERC20ABI from "../abi/ERC20.json";

export const Networks = {
  MainNet: 56,
  Testnet: 97,
  Ethereum: 1
};

interface ContractInfo {
  address: string;
  abi: any;
}

export const CONTRACTS_BY_NETWORK: {
  [key: number]: { [key: string]: ContractInfo };
} = {
  [Networks.MainNet || Networks.Ethereum]: {
    Counter: {
      address: "0x950bC0B2820e7182E3dAF45090a959A156ff3308",
      abi: CounterABI.abi
    }
  },
  [Networks.Testnet]: {
    Counter: {
      address: "0x950bC0B2820e7182E3dAF45090a959A156ff3308",
      abi: CounterABI.abi
    }
  }
};

export const ALL_SUPPORTED_CHAIN_IDS: number[] = [Networks.MainNet, Networks.Testnet, Networks.Ethereum];

export const currentNetwork: number = parseInt(process.env.REACT_APP_NETWORK_ID || "") || 56;

export const simpleProvider: Provider = new ethers.providers.JsonRpcBatchProvider(process.env.REACT_APP_NODE_1);
export const simpleMainProvider: Provider = new ethers.providers.JsonRpcBatchProvider(
  process.env.REACT_APP_NODE_MAIN_1
);

export function getContractInfo(name: string, chainId: number | undefined = undefined) {
  if (!chainId) chainId = currentNetwork;
  const contracts = CONTRACTS_BY_NETWORK?.[chainId];
  if (contracts) {
    return contracts?.[name];
  } else {
    return null;
  }
}

export function getContractObj(name: string, chainId: number | undefined) {
  const info = getContractInfo(name, chainId);
  if (chainId == Networks.MainNet) return info ? new Contract(info.address, info.abi, simpleMainProvider) : null;
  else return info ? new Contract(info.address, info.abi, simpleProvider) : null;
}

export async function getContractInstance(name: string, chainId: number | undefined) {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const info = getContractInfo(name, chainId);
  return info ? new ethers.Contract(info.address, info.abi, signer) : null;
}

export function getTokenContractObj(address: string, chainId: number | undefined) {
  if (chainId == Networks.MainNet) return new Contract(address, ERC20ABI, simpleMainProvider);
  else return new Contract(address, ERC20ABI, simpleProvider);
}

export function getTokenContractObjByName(name: string, chainId: number | undefined) {
  const info = getContractInfo(name, chainId);
  if (chainId == Networks.MainNet || chainId == undefined)
    return info ? new Contract(info.address, info.abi, simpleMainProvider) : null;
  else return info ? new Contract(info.address, info.abi, simpleProvider) : null;
}

export async function getTokenContractInstance(name: string, chainId: number | undefined) {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const info = getContractInfo(name, chainId);
  return info ? new ethers.Contract(info.address, ERC20ABI, signer) : null;
}
