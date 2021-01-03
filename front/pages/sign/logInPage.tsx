import * as React from 'react';
import { FC, useState } from 'react';
import BasicCheckBox from '../../components/BasicCheckBox';
import Buttons from '../../components/Buttons';
import styles from '../../styles/logInPage.module.scss';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios';
interface item {
  image: string,
  onClick(e: React.MouseEvent): void;
}

const globalAny: any = global;
let Kakao: any;
if (process.browser) {
  Kakao = globalAny.window.Kakao;
}

const LogInPage = () => {
  // const { Kakao } = global.window as any;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {

  }, []);
  const onChangeEmail = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, [email]);

  const onChangePassword = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, [password]);

  const onClickNaverLogIn = React.useCallback((e: React.MouseEvent): void => {
    e.preventDefault();
    alert('네이버 로그인');
  }, []);

  const onClicKakaoLogIn = React.useCallback((e: React.MouseEvent): void => {
    e.preventDefault();
    alert('카카오 로그인');
  }, []);

  const onClickGoogleLogIn = React.useCallback((e: React.MouseEvent): void => {
    e.preventDefault();
    alert('구글 로그인');
  }, []);

  const loginWithKakao = () => {
    Kakao.Auth.login({
      success: function (authObj: any) {
        axios.post('/v1/sign/signIn', authObj, { withCredentials: true });
      },
      fail: function (err: any) {
        console.log('fail~!', err)
        alert(JSON.stringify(err))
      },
    });
    // Kakao.Auth.authorize({
    //   redirectUri: 'https://developers.kakao.com/kakaoLogin.jsp'
    // });
  }

  const items: item[] = [
    {
      image: '/images/login/naver.png',
      onClick: loginWithKakao,
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
        <BasicCheckBox style={{ marginTop: 15 }} />
        <button className={styles.loginButton} >LOGIN</button>
        <div className={styles.snsLogInText}>SNS LOGIN</div>
        <Buttons items={items} itemStyle={itemStyle} spacing={25} wrapperStyle={{ marginTop: 15 }} />
        <div className={styles.forgotPasswordText}>Forgot password?</div>
        <div className={styles.signUpText}>Don't have account? <Link href='/sign/signUpPage'><a style={{ textDecoration: 'none', color: '#7460ee' }}>Sign Up</a></Link> now</div>
      </div>
    </div>
  )
}

export default LogInPage;