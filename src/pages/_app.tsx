import ContactListProvider from "@/context/appContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactListProvider>
      <Component {...pageProps} />
    </ContactListProvider>
  );
}
