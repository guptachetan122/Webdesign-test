import "antd/dist/antd.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  const Router = useRouter();

  return (
    <Provider store={store}>
      {Router.pathname == `/login` ||
      Router.pathname == `/changepassword` ||
      Router.pathname == `/forgotpassword` ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
