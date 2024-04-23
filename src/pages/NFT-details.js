import React from "react";

// INERNAL IMPORT
import Style from "../styles/nftDetails.module.css";
import { Button, Brand, Category } from "components/component_index";
import { NFTDetailsPage } from "../../NFTDetailsPage/componentsIndex";

const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
