// import deployedContracts from '../contracts/hardhat_contracts.json';
// import externalContracts from '../contracts/external_contracts';
// import { ethers } from 'ethers';

// export const getContractConfigWithInjected = (
//   contractName: string,
//   abi: ethers.utils.Interface,
//   contractAddress: string,
//   chainId: number
// ) => {
//   const deployed = deployedContracts;

//   const deployedCopy = deployed ? copy(deployed) : {};
//   Object.values(deployedCopy[localChainId])[0].contracts[contractName] = {
//     address: contractAddress,
//     abi,
//   };

//   return {
//     deployedContracts: deployedCopy,
//     externalContracts: externalContracts || {},
//   };
// };

// const copy = (obj) => JSON.parse(JSON.stringify(obj));
