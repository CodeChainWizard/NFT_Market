import React, { useState, useEffect, useContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import Router from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

// INTERNAL IMPORT

// ---- FETCHING SMART CONTRACT
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants.js";

const fetchContract = (signeerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signeerOrProvider
  );

// ---- CONNECTING WITH SMART CONTARCT
const connectToSmartContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contarct = fetchContract(signer);
    return contarct;
  } catch (error) {
    console.error("Error connecting to smart contract:", error);
  }
};

export const NFTMarketplaceContext = React.createContext();

export const NFTMarketplaceProvider = ({ children }) => {
  const titleData = "Discover, collect, and sell NFTs";

  const checkContract = async () => {
    const contract = await connectToSmartContract();
    console.log(contract);
  };

  return (
    <NFTMarketplaceContext.Provider value={{ checkContract, titleData }}>
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
