import s from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "..";

const Navbar = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link href={"/"} className={s.logo}>
          <Image alt="logo" src={"/logo.svg"} width={64} height={64} />
        </Link>

        <ul className={s.links}>
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
          <CustomButton
            size={"large"}
            children={"Get started"}
            type={"secondary"}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
