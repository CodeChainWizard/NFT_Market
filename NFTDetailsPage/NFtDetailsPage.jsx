import React from "react";

//INTERNAL IMPORT
import Style from "./NFTDetailsPage.module.css";
import { NFTDescription, NFTDetailsImage, NFTTaps } from "./componentsIndex";

const NFTDetailsPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NFTDetailsImage />
        <NFTDescription />
      </div>
    </div>
  );
};

export default NFTDetailsPage;
