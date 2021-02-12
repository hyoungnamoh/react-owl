import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styles from '../styles/NoticeTable.module.scss';
import PagingButton from "./PagingButton";

const noticeDummyData: NoticeItem[] = [
  {
    id: 1,
    title: '첫번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 2,
    title: '두번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 3,
    title: '세번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 1,
    title: '첫번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 2,
    title: '두번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 3,
    title: '세번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 1,
    title: '첫번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 2,
    title: '두번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 3,
    title: '세번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 1,
    title: '첫번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 2,
    title: '두번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 3,
    title: '세번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
];
const NoticeTable = () => {
  const [noticeList, setNoticeList] = useState<NoticeItem[]>([]);
  const [showing, setShowing] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    getNoticeList();
  }, [currentPage]);

  const getNoticeList = (page?: number) => {
    console.log(noticeDummyData);
    if (page) {
      setCurrentPage(page);
    }
    setNoticeList(noticeDummyData);
  }

  const movePage = (page: number) => {
    if (page !== currentPage) {
      noticeDummyData.push({
        id: 4,
        title: '네번째 게시글',
        writer: '오도도',
        createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
        view: 5,
      },
        {
          id: 5,
          title: '다섯번째 게시글',
          writer: '오도도',
          createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
          view: 2,
        },
        {
          id: 6,
          title: '여섯번째 게시글',
          writer: '오도도',
          createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
          view: 1,
        });
      getNoticeList(page);
    }
  }
  console.log(currentPage);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        Notice
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Show 셀렉트박스 entries
        </div>
        <div>
          Search:
        </div>
      </div>
      <div>
        <div className={styles.tableHeader}>
          <div className={styles.tableRow}>
            <div className={styles.tableCell} style={{ flex: 1 }}>
              NO
            </div>
            <div className={styles.tableCell} style={{ flex: 4 }}>
              제목
            </div>
            <div className={styles.tableCell} style={{ flex: 1.5 }}>
              작성자
            </div>
            <div className={styles.tableCell} style={{ flex: 1.5 }}>
              작성일
            </div>
            <div className={styles.tableCell} style={{ flex: 1 }}>
              조회수
            </div>
          </div>
          {
            noticeList.map(e => {
              console.log(noticeList);
              return (
                <div className={styles.tableRow}>
                  <div className={styles.tableCell} style={{ flex: 1 }}>
                    {e.id}
                  </div>
                  <div className={styles.tableCell} style={{ flex: 4 }}>
                    {e.title}
                  </div>
                  <div className={styles.tableCell} style={{ flex: 1.5 }}>
                    {e.writer}
                  </div>
                  <div className={styles.tableCell} style={{ flex: 1.5 }}>
                    {e.createdAt}
                  </div>
                  <div className={styles.tableCell} style={{ flex: 1 }}>
                    {e.view}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div>
        <div>
          Showing 1 to 1 of 1 entries
      </div>
        <div>
          <PagingButton totalPage={noticeDummyData.length / 10 + 1} currentPage={currentPage} movePage={movePage} />
        </div>
      </div>
    </>
  );
}

export default NoticeTable;