import { Asap_Condensed } from "next/font/google";
import s from "./CustomButton.module.css";

// size: "large" | "small"
// type: "primary" | "secondary"
// children: React.node
// onClick: ()=>void
// customStyle: {}
const CustomButton = ({ size, type, children, onClick, customStyle }) => {
  return (
    <button
      className={`${s[size]} ${s[type]}`}
      onClick={onClick}
      style={customStyle}
    >
      {children}
    </button>
  );
};

export default CustomButton;
