import React from "react";

// INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
} from "components/component_index";

const Home = () => {
  return (
    <div className={Style.homepage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading={"Browse by category"}
        paraghaph={"Explore the NFTs is the most featured categories..."}
      />
      <Subscribe />
    </div>
  );
};

export default Home;
