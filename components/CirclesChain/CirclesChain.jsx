"use client";
import React from "react";
import Image from "next/image";
import s from "./CirclesChain.module.css";

// imageUrls: string[]

const CirclesChain = ({ imageUrls }) => {
  return (
    <div className={s.wrapper}>
      {imageUrls.map((item, i) => (
        <Image
          src={item}
          width={88}
          height={88}
          alt="emoji"
          className={s.image}
          style={{ marginLeft: i * 60 }}
        />
      ))}
    </div>
  );
};

export default CirclesChain;
