import '@babel/polyfill';
import React, { useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from "axios";

const Owl = ({ Component, store, pageProps }) => {
  return (
    // <Provider store={store}>
      // <Head>
      //   <title>Owl</title>
      // </Head>
      <Component {...pageProps} />
    // </Provider>
  );
};

Owl.propTypes = {
  Component: PropTypes.elementType,
};

Owl.getInitialProps = async (context) => {
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