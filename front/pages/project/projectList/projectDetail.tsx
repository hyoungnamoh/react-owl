import { useObserver } from 'mobx-react';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import Tab from '../../../components/Tab';
import styles from '../../../styles/projectDetail.module.scss'

interface Project {
  id: string,
  projectName: string,
}

interface Item {
  onClick?: () => void,
  style?: CSSProperties,
  className?: CSSProperties,
  tabName?: string,
  selected: boolean,
}

const tabDumyData: Item[] = [
  {
    tabName: 'Dash Board',
    selected: true,
  },
  {
    tabName: 'Calendar',
    selected: false,
  },
  {
    tabName: 'Kanban Board',
    selected: false,
  },
  {
    tabName: 'Notice',
    selected: false,
  },
  {
    tabName: 'Drive',
    selected: false,
  },
]
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
          <Tab items={tabDumyData} />
        </div>
      </div>
    </div>
  );
};

export default projectDetail;