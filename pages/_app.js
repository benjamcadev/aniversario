import "@/styles/globals.css";

import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes ajustar según necesites
});



export default function App({ Component, pageProps }) {
  return (
    <main className={caveat.className}>
      <Component {...pageProps} />
    </main>
  );
}
