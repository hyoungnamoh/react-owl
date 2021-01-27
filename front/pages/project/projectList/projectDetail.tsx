import { useObserver } from 'mobx-react';
import { Router, useRouter } from 'next/router';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import Tab from '../../../components/Tab';
import styles from '../../../styles/projectDetail.module.scss'
import { FaUserCog } from 'react-icons/fa';
import dayjs from 'dayjs';
import Calendar from '../../../components/Calendar';


const projectDumyData: Project = {
  id: '123',
  projectName: '형남 프로젝트'
}
const projectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selected, setSelected] = useState<number>(0);
  const [onProjectSet, setOnProjectSet] = useState<boolean>(false);
  const [noticeLits, setNoticeList] = useState<NoticeItem[]>([]);
  const menuRef = useRef(null);

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
      onClick: () => router.push('/project/projectList/projectDetail?id=123&tabName=notice'),
    },
    {
      tabName: 'Drive',
    },
  ]

  const noticeDummyData: NoticeItem[] = [
    {
      id: 1,
      title: '첫번째 게시글',
      writer: '오도도',
      createdAt: dayjs(),
      view: 2,
    },
    {
      id: 2,
      title: '첫번째 게시글',
      writer: '오도도',
      createdAt: dayjs(),
      view: 2,
    },
    {
      id: 3,
      title: '첫번째 게시글',
      writer: '오도도',
      createdAt: dayjs(),
      view: 2,
    },
  ];

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
  const onClickTab = (index: number): void => {
    setSelected(index);
  }

  const onClickProjectSet = (): void => {
    setOnProjectSet(prevOnProjectSet => !prevOnProjectSet);
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current) {
      setOnProjectSet(false);
    }
  };

  const getNoticeList = (): NoticeItem[] => {
    return noticeDummyData;
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
      <div style={{ backgroundColor: 'red', height: 1000, width: 1000 }}>
        <Calendar year={2021} month={1} />
      </div>
    </div>
  );
};

export default projectDetail;