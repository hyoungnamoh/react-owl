import { useCallback, useEffect, useRef, useState, FC } from "react";
import { NextPage } from 'next'
import React from 'react';
import styles from '../styles/index.module.scss';

interface Props {
  // userAgent?: string;
}
const Index: NextPage<Props> = ({ }) => {
  return (
    <div className={styles.main}>
      <h1 className={styles.mainText}>OWL</h1>
      <h5 className={styles.mainSubText}>Our Work Leader</h5>
      <p className={styles.mainSubSmallText}>효과적인 팀워크와 가벼워진 업무를 이끌어내는 공간, OWL</p>
    </div>
  )
}

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}
export default Index;