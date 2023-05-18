import { wrapper } from "@/stores/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
