import * as React from 'react';
import { FC } from 'react';
import styles from '../styles/header.module.scss';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { userStore } from '../store';
import { useObserver } from 'mobx-react';
const Header = () => {
  const router = useRouter()

  const moveLoginPage = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/sign/logInPage');
  }

  const logOut = (e: React.MouseEvent) => {
    e.preventDefault();
    userStore.logOut();
  }

  const getLogo = (): string => {
    return userStore.data ? '/images/owl_plz_beige.png' : '/images/owl_logo_real.png';
  }

  const getLogoStyle = (): React.CSSProperties => {
    return userStore.data ? { width: 100, height: 35, marginLeft: '10%' } : {};
  }

  const getWrapperStyle = (): React.CSSProperties => {
    return userStore.data ? { backgroundColor: '#326295' } : {};
  }
  return useObserver(() => (
    <>
      <div className={styles.wrapper} style={getWrapperStyle()}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <img src={getLogo()} style={getLogoStyle()} />
          </Link>
        </div>
        {
          userStore.data ?
            <div className={styles.rightButtonContainer}>
              <button className={styles.rightButton}>
                <img src="/images/profile.png" className={styles.profilePic} />
              </button>
              <button className={styles.rightButton}>
                <img src="/images/talk.png" className={styles.talk} />
              </button>
              <button className={styles.rightButton} onClick={logOut}>
                <img src="/images/noti.png" className={styles.noti} />
              </button>
            </div>
            :
            <div className={styles.moveLoginPageButtonContainer}>
              <button className={styles.moveLoginPageButton} onClick={moveLoginPage}>
                <p className={styles.moveLoginPageButtonText}>Login / Register</p>
              </button>
            </div>
        }
      </div>
    </>
  ));
}

export default Header;