import type { AppProps } from 'next/app'
import App from "next/app";
import Layout from '../components/Layout'
import React from 'react'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { createWrapper } from "next-redux-wrapper";
import Page from '../components/Page';

// default component from Next JS
class ClientApp extends App {
  render() {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <Provider store={store}>
        {/* <Layout>
          <Component {...pageProps} />
        </Layout> */}
        <Page title='PINUS Tech' children={
          <Component {...pageProps}/>
        }/>
      </Provider>
    );
  }
}


const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(ClientApp);