import "../styles/Home.module.css";
import "../styles/globals.css";

// import { MoralisProvider } from "react-moralis";
import React from "react";
import Layout from "../layouts/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
// import { wrapper } from "../redux/store";
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  );
}
export default MyApp;
