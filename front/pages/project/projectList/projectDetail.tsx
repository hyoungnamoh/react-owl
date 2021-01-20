import { useObserver } from 'mobx-react';
import { useRouter } from 'next/router';
import * as React from 'react';
import styles from '../../../styles/projectDetail.module.scss'

interface Project {
  id: string,
  projectName: string,
}

const projectDumyData: Project = {
  id: '123',
  projectName: '형남 프로젝트'
}
const projectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return useObserver(() =>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.projectNameContainer}>
          <p>{projectDumyData.projectName}</p>
        </div>
        <div className={styles.tabContainer}>

        </div>
      </div>
    </div>
  );
};

export default projectDetail;