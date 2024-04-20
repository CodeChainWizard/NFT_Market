import React from "react";
import Image from "next/image";

//INTERNA IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/component_index";

const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <Image src={images.logo} alt="Logo" width={100} height={100} />
          <h1>Earn Free crypto with Cicryp.</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={Style.Brand_box_left_Btn}>
            <Button btnName="Create" handleClick={() => {}} />
            <Button btnName="Discover" handleClick={() => {}} />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
