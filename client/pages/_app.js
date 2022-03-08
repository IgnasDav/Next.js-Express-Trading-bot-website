import { Provider } from "react-redux";
import store from "../store";
//Layout
import Layout from "../components/Layout";
import GlobalStyle from "../GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </Provider>
    </>
  );
}

export default MyApp;
