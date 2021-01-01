import { useCallback, useEffect, useRef, useState, FC } from "react";
import { NextPage } from 'next'
import React from 'react';
import styles from '../styles/first.module.scss';

interface Props {
  // userAgent?: string;
}
const Index: NextPage<Props> = ({ }) => {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
    >
      Destroy
    </button>
  )
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}
export default Index;