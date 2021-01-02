import * as React from 'react';
import { FC } from 'react';
import styles from '../styles/header.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router'
const Header = () => {
  const router = useRouter()
  const moveLoginPage = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/sign/logInPage');
  }
  return (
    <>
      <div className={styles.wrapper}>
        <Link href="/">
          <img src='/images/owl_logo_real.png' />
        </Link>
        <button className={styles.moveLoginPageButton} onClick={moveLoginPage}>
          <div className={styles.moveLoginPageButtonText}>Login / Register</div>
        </button>
      </div>
    </>
  );
}

export default Header;