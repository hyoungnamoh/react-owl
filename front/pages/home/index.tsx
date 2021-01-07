import { useObserver } from 'mobx-react';
import * as React from 'react';
import { } from 'react';
import { userStore } from '../../store';
import styles from '../../styles/home.module.scss';
const Home = () => {
  console.log(userStore.data);
  return useObserver(() =>
    <div className={styles.wrapper}>
      하이 홈
    </div>
  )
};

export default Home;