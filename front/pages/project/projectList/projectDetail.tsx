import { useObserver } from 'mobx-react';
import { Router, useRouter } from 'next/router';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import Tab from '../../../components/Tab';
import styles from '../../../styles/projectDetail.module.scss'
import { FaUserCog } from 'react-icons/fa';
import dayjs from 'dayjs';
import Calendar from '../../../components/Calendar';
import NoticeTable from '../../../components/NoticeTable';
import KanbanBoard from '../../../components/KanbanBoard';

const today = new Date();
const projectDumyData: Project = {
  id: '123',
  projectName: '형남 프로젝트'
}
const projectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [onProjectSet, setOnProjectSet] = useState<boolean>(false);
  const [noticeLits, setNoticeList] = useState<NoticeItem[]>([]);
  const [tab, setTab] = useState<TabType>('Dash Board')
  const menuRef = useRef(null);

  const tabDumyData: TabItem[] = [
    {
      tabName: 'Dash Board',
      onClick: () => setTab('Dash Board'),
    },
    {
      tabName: 'Calendar',
      onClick: () => setTab('Calendar'),
    },
    {
      tabName: 'Kanban Board',
      onClick: () => setTab('Kanban Board'),
    },
    {
      tabName: 'Notice',
      // onClick: () => router.push('/project/projectList/projectDetail?id=123&tabName=notice'),
      onClick: () => setTab('Notice'),
    },
    {
      tabName: 'Drive',
      onClick: () => setTab('Drive'),
    },
  ]



  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    if (router.query.tabName === 'notice') {
      const noticeList: NoticeItem[] = getNoticeList();
      setNoticeList(noticeList);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [router.query])

  const onClickProjectSet = (): void => {
    setOnProjectSet(prevOnProjectSet => !prevOnProjectSet);
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current) {
      setOnProjectSet(false);
    }
  };

  const renderContents = () => {
    switch (tab) {
      case 'Dash Board':
        return (
          <div className={styles.calendar} style={{ padding: '20px 50px' }}>
            <Calendar year={today.getFullYear()} month={today.getMonth() + 1} />
          </div>
        )
      case 'Calendar':
        return (
          <div className={styles.calendar} style={{ padding: '20px 50px' }}>
            <Calendar year={today.getFullYear()} month={today.getMonth() + 1} />
          </div>
        )
      case 'Kanban Board':
        return (
          <div style={{ }}>
            <KanbanBoard />
          </div>
        )
      case 'Notice':
        return (
          <div style={{ padding: '20px 50px' }}>
            <NoticeTable />
          </div>
        )
      case 'Drive':
      default:
        break;
    }
  }
  return useObserver(() =>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.projectNameContainer}>
          <p>{projectDumyData.projectName}</p>
        </div>
        <div className={styles.tabContainer}>
          <Tab items={tabDumyData} selectedStyle={{ borderBottom: '#326295 3px solid' }} />
        </div>
        <div className={styles.projectSettingButtonContainer} >
          <FaUserCog color={'#326295'} style={{ width: '25%', height: '50%' }} onClick={() => onClickProjectSet()} />
          {
            onProjectSet &&
            <div className={styles.projectSettingMenu} ref={menuRef}>
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
      {renderContents()}
    </div>
  );
};

export default projectDetail;