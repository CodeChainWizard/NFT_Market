import React from "react";

// IMTERNAL IMPORT
import Style from "../styles/search.module.css";
import { Slider, Brand, Filter } from "components/component_index";
import { SearchBar } from "../../SearchPage/SearchBar/SearchPageIndex";
import { NFTCardTwo, Banner } from "../../collectionPage/collectionIndex";
import images from "../../img";

const SearchPage = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
  ];
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground1} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default SearchPage;
