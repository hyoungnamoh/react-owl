import dayjs from "dayjs";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import styles from '../styles/NoticeTable.module.scss';
import PagingButton from "./PagingButton";

let noticeDummyData: NoticeItem[] = [
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
    id: 4,
    title: '첫번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 5,
    title: '두번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 6,
    title: '세번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 7,
    title: '첫번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 8,
    title: '두번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 9,
    title: '세번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 10,
    title: '첫번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
];
const NoticeTable = () => {
  const [noticeList, setNoticeList] = useState<NoticeItem[]>([]);
  const [showing, setShowing] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const timerRef = useRef<number>(0);
  useEffect(() => {
    getNoticeList();
  }, [currentPage]);

  const getNoticeList = useCallback((page?: number) => {
    window.scrollTo(0, 0);
    if (page) {
      setCurrentPage(page);
    }
    setNoticeList(noticeDummyData);
  }, [noticeList]);

  const movePage = useCallback((page: number) => {
    if (page !== currentPage) {
      noticeDummyData = noticeList.map(e => {
        e.id = e.id + 10;
        return e;
      });
      getNoticeList(page);
    }
  }, [noticeList, currentPage]);

  const getSearchResult = () => {
    console.log(searchValue);
    if (!searchValue) {
      console.log('set 해줬는디요')
      setNoticeList(noticeDummyData);
      return;
    }
    setNoticeList(noticeDummyData.filter(e => e.title === searchValue || e.writer === searchValue));
  }

  const onChangeSearchValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      getSearchResult();
    }, 1000);
  }, [searchValue]);
  console.log(noticeList);
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
          <input value={searchValue} onChange={onChangeSearchValue} />
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
      <div className={styles.pagingRow}>
        <div>
          Showing 1 to 1 of 1 entries
        </div>
        <div>
          <PagingButton totalPage={10} currentPage={currentPage} movePage={movePage} />
        </div>
      </div>
    </>
  );
}

export default NoticeTable;