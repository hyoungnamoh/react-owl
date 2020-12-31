import { useCallback, useEffect, useRef, useState, FC } from "react";
import { NextPage } from 'next'
import React from 'react';

interface Props {
  userAgent?: string;
}
const Index: NextPage<Props> = ({ userAgent }) => (
  <main>Your user agent: {userAgent}</main>
)

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}
export default Index;