import "../styles/globalStyles.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}

