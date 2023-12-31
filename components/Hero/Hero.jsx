"use client";

import React from "react";
import s from "./Hero.module.scss";
import { CirclesChain, CustomButton } from "..";
import { circlesChainUrls } from "@/constants";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
const Hero = () => {
  const { theme } = useTheme();
  return (
    <div className={s.hero}>
      <div className={s.hero_info}>
        <div className={s.info}>
          <div className={`${s.info_title} ${s[theme]}`}>
            Crypto payments for <span>telegram bots</span>
          </div>
          <div className={`${s.info_description} ${s[theme]}`}>
            Seamlessly accept crypto payments <br /> in your Telegram bots and
            services.
          </div>
          <CustomButton
            children={"Get started"}
            type={"primary"}
            theme={"light"}
          />
        </div>
        <div className={s.bots}>
          <CirclesChain imageUrls={circlesChainUrls} theme={theme} />
          <div className={`${s.subdescription} ${s[theme]}`}>
            Popular bots use Crypto Pay
          </div>
        </div>
      </div>

      <div className={s.image}>
        {theme === "light" ? (
          <Image
            src={"/light.webp"}
            width={328}
            height={688}
            alt="phone"
            quality={100}
          />
        ) : (
          <Image
            src={"/dark.png"}
            width={328}
            height={688}
            alt="phone"
            quality={100}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
