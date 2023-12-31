import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/reset.css";
import { Navbar } from "@/components";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Pay",
  description: "Crypto payments for telegram bots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
