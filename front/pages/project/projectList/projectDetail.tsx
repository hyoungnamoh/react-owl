import { useObserver } from 'mobx-react';
import { useRouter } from 'next/router';
import { CSSProperties, useState } from 'react';
import Tab from '../../../components/Tab';
import styles from '../../../styles/projectDetail.module.scss'

interface Project {
  id: string,
  projectName: string,
}

interface Item {
  style?: CSSProperties,
  className?: CSSProperties,
  tabName?: string,
}

const tabDumyData: Item[] = [
  {
    tabName: 'Dash Board',
  },
  {
    tabName: 'Calendar',
  },
  {
    tabName: 'Kanban Board',
  },
  {
    tabName: 'Notice',
  },
  {
    tabName: 'Drive',
  },
]
const projectDumyData: Project = {
  id: '123',
  projectName: '형남 프로젝트'
}
const projectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selected, setSelected] = useState<number>(0);
  const onClickTab = (index: number): void => {
    console.log(index);
    setSelected(index);
  }
  return useObserver(() =>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.projectNameContainer}>
          <p>{projectDumyData.projectName}</p>
        </div>
        <div className={styles.tabContainer}>
          <Tab items={tabDumyData} selectedStyle={{borderBottom: '#326295 3px solid'}} onClick={onClickTab} selected={selected}/>
        </div>
      </div>
    </div>
  );
};

export default projectDetail;