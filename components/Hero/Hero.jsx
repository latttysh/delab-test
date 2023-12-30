import React from "react";
import s from "./Hero.module.css";
import { CirclesChain, CustomButton } from "..";
import { circlesChainUrls } from "@/constants";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.hero_info}>
        <div className={s.info_title}>
          Crypto payments for <span>telegram bots</span>
        </div>
        <div className={s.info_description}>
          Seamlessly accept crypto payments <br /> in your Telegram bots and
          services.
        </div>
        <CustomButton
          children={"Get started"}
          size={"large"}
          type={"primary"}
          customStyle={{ marginBottom: 56 }}
        />
        <CirclesChain imageUrls={circlesChainUrls} />
      </div>

      <div className={s.image}>
        <Image src={"/img_phone.png"} width={328} height={688} alt="phone" />
      </div>
    </div>
  );
};

export default Hero;
