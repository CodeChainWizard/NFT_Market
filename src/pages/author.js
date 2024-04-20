import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import Style from "../styles/author.module.css";
import { Banner, NFTCardTwo } from "collectionPage/collectionIndex";
import { Brand, Title } from "components/component_index";
import images from "../../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  TapCard,
  AuthorNFTCard,
} from "../../authorPage/componentsIndex";
import FollowerTabCard from "components/FollowerTab/FollowerTabCard/FollowerTabCard";

const author = () => {
  const popularArray = [
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
    images.user9,
    images.user10,
  ];

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];

  const [collectioables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  return (
    <div className={Style.banner}>
      <Banner bannerImage={images.creatorbackground1} />
      <AuthorProfileCard />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />

      <AuthorNFTCard
        collectioables={collectioables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />

      <Title
        heading={"Popular Creater"}
        paragraph={"Click on music icon and enjoy NFT music or audio"}
      />
      {/* {popularArray.map((el, i) => (
        <FollowerTabCard key={(i = 1)} i={i} el={el} />
      ))} */}

      {/* Show a Follower Card  */}
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default author;
