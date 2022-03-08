import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../app/store'
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {

  const Router = useRouter();

  return (
    <Provider store={store}>
      {Router.pathname == `/login` ?
      <Component {...pageProps} /> :
      <Layout>
        <Component {...pageProps} />
      </Layout> }
    </Provider>
  ); 
}

export default MyApp
