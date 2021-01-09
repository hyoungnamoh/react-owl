import { useObserver } from 'mobx-react';
import * as React from 'react';
import { } from 'react';
import { userStore } from '../../store';
import styles from '../../styles/home.module.scss';
const Home = () => {
  console.log(userStore.data);
  const getWrappStyle = (): React.CSSProperties => {
    return userStore.data ? { backgroundColor: '#fff' } : {}
  }
  return useObserver(() =>
    <div className={styles.wrapper} style={getWrappStyle()}>
      하이 홈
    </div>
  )
};

export default Home;