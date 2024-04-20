import React, { useState } from "react";
import Image from "next/image";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./AuthorProfileCard.module.css";
import images from "../../img";
import { Button } from "../../components/component_index";

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const data_copy = document.getElementById("myInput");
    data_copy.select();
    navigator.clipboard.writeText(data_copy.value);
  };

  const openReport = () => {
    if (!report) {
      setShare(false);
      setReport(true);
    } else {
      setReport(false);
    }
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  return (
    <div className={Style.AuthorProfileCard}>
      <div className={Style.AuthorProfileCard_box}>
        <div className={Style.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image_2}
            className={Style.AuthorProfileCard_box_img_img}
            alt="NFT Image"
            width={220}
            height={220}
          />
        </div>

        <div className={Style.AuthorProfileCard_box_info}>
          <h2>
            CodeChainWizard{" "}
            <span>
              <MdVerified />
            </span>
          </h2>

          <div className={Style.AuthorProfileCard_box_info_address}>
            <input
              type="text"
              value="0xfe89983bBfB8B95647c52a8CACB8e80222CC1F00"
              id="myInput"
            />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfileCard_box_info_address_icon}
            />
          </div>

          <div>
            <p>
              Punk #4785 / An OG Cryptopunk Collector, hoarder of NFTs.
              Contributing to @codeChainWizard, an NFT Monetization Platfrom
            </p>
            <div className={Style.AuthorProfileCard_box_info_social}>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialGithub />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className={Style.AuthorProfileCard_box_share}>
          <Button btnName={"Follow"} handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={Style.AuthorProfileCard_box_share_icon}
          />
          {share && (
            <div className={Style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                {""}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialGithub />
                </span>{" "}
                {""}
                Github
              </p>
              <p>
                <span>
                  <TiSocialTwitter />
                </span>{" "}
                {""}
                Twitter
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>{" "}
                {""}
                Youtube
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                {""}
                LinkedIn
              </p>
            </div>
          )}
          <BsThreeDots
            onClick={() => openReport()}
            className={Style.AuthorProfileCard_box_share_icon}
          />
          {report && (
            <p className={Style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              Report abouse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
