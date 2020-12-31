import React, { useEffect } from 'react';
import { NextPage } from 'next'
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from "axios";
import { AppProps, AppContext } from 'next/app';


const Owl = ({ Component, pageProps }: AppProps) => {
  return (
    // <Provider store={store}>
    <>
      <Head>
        <title>Owl</title>
      </Head>
      {/* <Latout> */}
        <Component {...pageProps} />
      {/* </Latout> */}
    </>
    // </Provider>
  );
};

Owl.propTypes = {
  Component: PropTypes.elementType,
};

Owl.getInitialProps = async (context: AppContext) => {
  // const { ctx } = context;
  let pageProps = {};
  // const state = ctx.store.getState();
  // const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
  // if (ctx.isServer && cookie) {
  //   axios.defaults.headers.Cookie = cookie;
  // }
  // if (context.Component.getInitialProps) {
  //   pageProps = await context.Component.getInitialProps(ctx) || {};
  // }

  return { pageProps };
}

export default Owl;