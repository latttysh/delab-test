"use client";
import React from "react";
import Image from "next/image";
import s from "./CirclesChain.module.scss";

// imageUrls: string[]

const CirclesChain = ({ imageUrls, theme = "light" }) => {
  return (
    <div className={s.wrapper}>
      {imageUrls.map((item, i) => (
        <Image
          key={i}
          src={item}
          width={88}
          height={88}
          sizes="(max-width:1035px) 100px, 100px"
          alt="emoji"
          className={`${s.image} ${s[theme]}`}
        />
      ))}
    </div>
  );
};

export default CirclesChain;
