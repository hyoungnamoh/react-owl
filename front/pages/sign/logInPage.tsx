import * as React from 'react';
import { FC, useState } from 'react';
import BasicCheckBox from '../../components/BasicCheckBox';
import styles from '../../styles/logInPage.module.scss';
const LogInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, [email]);

  const onChangePassword = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, [password]);

  return (
    <div className={styles.page}>
      <div className={styles.logInBox}>
        <div className={styles.logInText}>LOGIN</div>
        <input type="email" className={styles.emailInput} placeholder="Email" value={email} onChange={onChangeEmail} />
        <input type="password" className={styles.emailInput} placeholder="password" value={password} onChange={onChangePassword} />
        <BasicCheckBox />
        <button className={styles.loginButton} >LOGIN</button>
        <div className={styles.snsLogInText}>SNS LOGIN</div>
      </div>
    </div>
  )
}

export default LogInPage;