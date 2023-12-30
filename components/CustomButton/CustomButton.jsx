import { Asap_Condensed } from "next/font/google";
import s from "./CustomButton.module.css";

// size: "large" | "small"
// type: "primary" | "secondary"
// children: React.node
// onClick: ()=>void
const CustomButton = ({ size, type, children, onClick }) => {
  return (
    <button className={`${s[size]} ${s[type]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
