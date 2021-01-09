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
    return userStore.data ? { width: 100, height: 35 } : {};
  }

  const getWrapperStyle = (): React.CSSProperties => {
    return userStore.data ? { backgroundColor: '#326295' } : {};
  }
  return useObserver(() => (
    <>
      <div className={styles.wrapper} style={getWrapperStyle()}>
        <Link href="/">
          <img src={getLogo()} style={getLogoStyle()} />
        </Link>
        <div className={styles.rightButton}>
          {
            userStore.data ?
              <>
                <button className={styles.profilePicButton} style={{ marginRight: 20 }}>
                  <img src="/images/profile.png" className={styles.profilePic} />
                </button>
                <button className={styles.profilePicButton} style={{ marginRight: 20 }}>
                  <img src="/images/talk.png" className={styles.talk} />
                </button>
                <button className={styles.profilePicButton} onClick={logOut}>
                  <img src="/images/noti.png" className={styles.noti} />
                </button>
              </>
              :
              <button className={styles.moveLoginPageButton} onClick={moveLoginPage}>
                <p className={styles.moveLoginPageButtonText}>Login / Register</p>
              </button>
          }

        </div>
      </div>
    </>
  ));
}

export default Header;