import { Asap_Condensed } from "next/font/google";
import s from "./CustomButton.module.scss";
import { useTheme } from "@/context/ThemeContext";

// type: "primary" | "secondary"
// children: React.node
// onClick: ()=>void
// customStyle: {}
const CustomButton = ({
  size,
  type,
  children,
  onClick,
  customStyle,
  theme,
}) => {
  return (
    <button
      className={`${s.button} ${s[type]} ${s[theme]}`}
      onClick={onClick}
      style={customStyle}
    >
      {children}
    </button>
  );
};

export default CustomButton;
