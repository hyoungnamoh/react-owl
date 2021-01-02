import * as React from 'react';
import { FC, useState } from 'react';
import BasicCheckBox from '../../components/BasicCheckBox';
import Buttons from '../../components/Buttons';
import styles from '../../styles/logInPage.module.scss';
import { useRouter } from 'next/router'
const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onChangeEmail = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, [email]);

  const onChangePassword = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, [password]);

  const onClickNaverLogIn = React.useCallback((e: React.MouseEvent): void => {
    e.preventDefault();
    alert('네이버 로그인');
    // router.push('/sign/logInPage');
  }, []);

  const onClicKakaoLogIn = React.useCallback((e: React.MouseEvent): void => {
    e.preventDefault();
    alert('네이버 로그인');
    // router.push('/sign/logInPage');
  }, []);

  const onClickGoogleLogIn = React.useCallback((e: React.MouseEvent): void => {
    e.preventDefault();
    alert('네이버 로그인');
    // router.push('/sign/logInPage');
  }, []);

  const items = [
    {
      image: '/images/login/naver.png',
      onClick: onClickNaverLogIn,
    },
    {
      image: '/images/login/kakao.png',
      onClick: onClicKakaoLogIn,
    },
    {
      image: '/images/login/google.png',
      onClick: onClickGoogleLogIn,
    },
  ]

  const itemStyle: React.CSSProperties = {
    width: 50,
    height: 50,
  }

  return (
    <div className={styles.page}>
      <div className={styles.logInBox}>
        <div className={styles.logInText}>LOGIN</div>
        <div className={styles.inputContainer}>
          <input type="email" className={styles.input} placeholder="Email" value={email} onChange={onChangeEmail} />
          <input type="password" className={styles.input} style={{ marginTop: '15px' }} placeholder="Password" value={password} onChange={onChangePassword} />
        </div>
        <BasicCheckBox />
        <button className={styles.loginButton} >LOGIN</button>
        <div className={styles.snsLogInText}>SNS LOGIN</div>
        <Buttons items={items} itemStyle={itemStyle} spacing={25} wrapperStyle={{marginTop: 15}} />
      </div>
    </div>
  )
}

export default LogInPage;