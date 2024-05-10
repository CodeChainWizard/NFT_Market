import React, { useState, useContext, useEffect } from "react";

// INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  Brand,
  Video,
} from "components/component_index";
import AudioLive from "components/AudioLive/AudioLive";
import Slider from "components/Slider/Slider";
import { NFTMarketplaceContext } from "Context/NFTMarketplaceContext";

const Home = () => {
  const { checkContract } = useContext(NFTMarketplaceContext);

  useEffect(() => {
    checkContract();
  }, []);

  return (
    <div className={Style.homepage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading={"New Collection"}
        paragraph={
          "NFTs are unique digital assets that are stored on a blockchain, a decentralized and secure digital ledger. "
        }
      />
      <FollowerTab />
      <Collection />
      <Title
        heading={"Featured NFTs"}
        paragraph={
          "NFTs are unique digital assets that are stored on a blockchain, a decentralized and secure digital ledger. "
        }
      />
      <AudioLive />
      <Video />
      <Filter />
      <NFTCard />
      <Slider />

      <Title
        heading={"Browse by category"}
        paraghaph={"Explore the NFTs is the most featured categories..."}
      />
      <Category />
      <Subscribe />
      <Brand />
    </div>
  );
};

export default Home;
