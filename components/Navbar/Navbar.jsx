"use client";

import s from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "..";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link href={"/"} className={s.logo}>
          <Image alt="logo" src={"/logo.png"} width={64} height={64} />
        </Link>

        <ul className={`${s.links} ${s[theme]}`}>
          <li>
            <Link href={"/"}>Use cases</Link>
          </li>
          <li>
            <Link href={"/"}>Features</Link>
          </li>
          <li>
            <Link href={"/"}>How to start</Link>
          </li>
        </ul>

        <div className={s.actions}>
          {theme === "light" ? (
            <Image
              src={"/sun.svg"}
              width={40}
              height={40}
              onClick={toggleTheme}
            />
          ) : (
            <Image
              src={"/moon.svg"}
              width={40}
              height={40}
              onClick={toggleTheme}
            />
          )}
          <CustomButton
            size={"large"}
            children={"Get started"}
            type={"secondary"}
            theme={theme}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
