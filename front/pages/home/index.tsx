import { useObserver } from 'mobx-react';
import * as React from 'react';
import { } from 'react';
import { userStore } from '../../store';
import styles from '../../styles/home.module.scss';

const homeData = null;
const Home = () => {
  const getWrappStyle = (): React.CSSProperties => {
    return userStore.data ? { backgroundColor: '#fff' } : {}
  }
  return useObserver(() =>
    <div className={styles.wrapper} >
      <div className={styles.firstRow}>
        <div className={styles.firstRowItem}>
          <div className={styles.title}>Issue Task</div>
          {
            homeData ?
              <div></div>
              :
              <div className={styles.noAssignTextContainer}>
                <p className={styles.noAssignText}>나이게 할당된 이슈가 없습니다.</p>
              </div>
          }

        </div>
        <div className={styles.firstRowItem} style={{ marginLeft: 70 }}>
          <div className={styles.title}>Time Line</div>
          {
            homeData ?
              <div></div>
              :
              <div className={styles.noAssignTextContainer}>
                <p className={styles.noAssignText}>이번주 일정이 존재하지 않습니다.</p>
                <p className={styles.noAssignText}>({})</p>
              </div>
          }
        </div>
      </div>
      <div>My Issue Progress Chart</div>
      <div>Project Contribution Chart</div>
      <div>Project Progress Chart</div>
    </div>
  )
};

export default Home;