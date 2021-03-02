import * as React from 'react';
import { FC, useState } from 'react';
import BasicCheckBox from '../../components/BasicCheckBox';
import LogInButtons from '../../components/LogInButtons';
import styles from '../../styles/logInPage.module.scss';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios';
import Buttons from '../../components/Buttons';
import { userStore } from '../../store';

const dummyUser: User = {
  email: 'zzzsh789@naver.com',
  password: '1234',
  enabled: true,
  name: '오형남',
  profilePic: null,
  signFrom: 'owl',
  authOk: true,
};

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
        console.log(authObj);
        fetch('http://localhost:3603/v1/sign/kakao', {
          //백엔드에서 원하는 형태의 endpoint로 입력해서 fetch한다. 
          method: 'GET',
          headers: {
            authorization: authObj.access_token,
            //받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다. 
          },
        })
          .then((res) => res.json())
          .then((res) => localStorage.setItem('token', res.token)
            //백엔드에서 요구하는 key 값(token)으로 저장해서 localStorage에 저장한다.
            //여기서 중요한것은 처음에 console.log(res)해서 들어오는 
            //access_token 값을 백엔드에 전달해줘서 백엔드에 저장 해두는 
            //절차가 있으므로 까먹지 말 것! 
          )
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

  const items: ButtonItem[] = [
    {
      image: '/images/login/naver.png',
      onClick: loginWithKakao,
    },
    {
      image: '/images/login/kakao.png',
      href: 'http://localhost:3603/v1/sign/kakao',
    },
    {
      image: '/images/login/google.png',
      href: 'http://localhost:3603/v1/sign/kakao',
    },
  ]

  const itemStyle: React.CSSProperties = {
    width: 50,
    height: 50,
  }

  const onClickLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    userStore.logIn(dummyUser);
    router.push('/home');
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
        <button className={styles.loginButton} onClick={onClickLogin}>LOGIN</button>
        <div className={styles.snsLogInText}>SNS LOGIN</div>
        <LogInButtons items={items} itemStyle={itemStyle} spacing={25} wrapperStyle={{ marginTop: 15 }} />
        <div className={styles.forgotPasswordText}>Forgot password?</div>
        <div className={styles.signUpText}>Don't have account? <Link href='/sign/signUpPage'><a style={{ textDecoration: 'none', color: '#7460ee' }}>Sign Up</a></Link> now</div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return { props: { a: 'a' } };
  // // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // // By returning { props: { posts } }, the Blog component
  // // will receive `posts` as a prop at build time
  // return {
  //   props: {
  //     posts,
  //   },
  // }
}
export default LogInPage;