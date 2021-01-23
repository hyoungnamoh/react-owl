import { useObserver } from 'mobx-react';
import { useRouter } from 'next/router';
import { CSSProperties, useState } from 'react';
import Tab from '../../../components/Tab';
import styles from '../../../styles/projectDetail.module.scss'
import { FaUserCog } from 'react-icons/fa';

const tabDumyData: TabItem[] = [
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
  const [onProjectSet, setOnProjectSet] = useState<boolean>(true);

  const onClickTab = (index: number): void => {
    setSelected(index);
  }

  const onClickProjectSet = (): void => {
    setOnProjectSet(prevOnProjectSet => !prevOnProjectSet);
  }

  return useObserver(() =>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.projectNameContainer}>
          <p>{projectDumyData.projectName}</p>
        </div>
        <div className={styles.tabContainer}>
          <Tab items={tabDumyData} selectedStyle={{ borderBottom: '#326295 3px solid' }} onClick={onClickTab} selected={selected} />
        </div>
        <div className={styles.projectSettingButtonContainer} >
          <FaUserCog color={'#326295'} style={{ width: '25%', height: '50%' }} onClick={() => onClickProjectSet()}/>
          {
            onProjectSet &&
            <div className={styles.projectSettingMenu} >
              <div className={styles.projectSettingMenuItem}>
                <p className={styles.menuItemText}>프로젝트 멤버 추가</p>
              </div>
              <div className={styles.projectSettingMenuItem}>
                <p>프로젝트 정보 확인</p>
              </div>
              <div className={styles.projectSettingMenuItem}>
                <p>프로젝트 탈퇴</p>
              </div>
            </div>
          }
        </div>
        {/* <img src={'/images/user-cog-solid.svg'} color={'#326295'}/> */}
      </div>
    </div>
  );
};

export default projectDetail;