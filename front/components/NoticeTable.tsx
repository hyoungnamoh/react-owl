import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styles from '../styles/NoticeTable.module.scss';

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
    title: '첫번째 게시글',
    writer: '오도도',
    createdAt: dayjs().format('YYYY-MM-DD HH:mm'),
    view: 2,
  },
  {
    id: 3,
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
  useEffect(() => {
    getNoticeList();
  }, []);

  const getNoticeList = () => {
    setNoticeList(noticeDummyData);
  }

  const getPagingButton = () => {
    let pagingButton: string[] = [];
    let totalPage: number = Math.ceil(noticeList.length / showing);
    let pagingButtonCount = (totalPage / 10 + 1) > 5 ? 5 : (totalPage / 10 + 1);
    console.log(totalPage);
    if (noticeList.length <= 0) {
      return pagingButton;
    }
    pagingButton.push('Previous');
    for(let i = currentPage; i < pagingButtonCount; i++) {
      pagingButton.push(`${i + 1}`);
    }
  }
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
            noticeDummyData.map(e => {
              console.log(e);
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
          {getPagingButton()}
        </div>
      </div>
    </>
  );
}

export default NoticeTable;