import { useObserver } from 'mobx-react';
import * as React from 'react';
import styles from '../../styles/dashboard.module.scss'

const dashboard = () => {
  return useObserver(() =>
    <div>
      <div className={styles.header}>
        <div className={styles.tabContainer}>

        </div>
        <div className={styles.tabContainer}>

        </div>
      </div>
    </div>
  );
};

export default dashboard;