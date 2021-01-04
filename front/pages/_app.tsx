import React, { useEffect } from 'react';
import { NextPage } from 'next'
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from "axios";
import { AppProps, AppContext } from 'next/app';
import '../styles.scss'
import Layout from '../components/Layout';
import { baseURL } from '../config/config';

//공용으로 사용할 axios base url
axios.defaults.baseURL = baseURL;

const Owl = ({ Component, pageProps }: AppProps) => {
  return (
    // <Provider store={store}>
    <>
      <Head>
        <title>Owl</title>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script>Kakao.init('004942d0dc28bd056f8da4b10e000bce');</script>
      </Head>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
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