import { useObserver } from 'mobx-react';
import * as React from 'react';
import { } from 'react';
import { userStore } from '../../store';
import styles from '../../styles/home.module.scss';
import dayjs from 'dayjs'

interface HomeData {

}
const homeData: HomeData | null = null;
const days: string[] = ['일', '월', '화', '수', '목', '금', '토'];
const Home = () => {
  const startDate: string = dayjs().startOf('weeks').add(1, 'day').format('YYYY-MM-DD') + '( 월 )';
  const endDate: string = dayjs().endOf('weeks').add(1, 'day').format('YYYY-MM-DD') + '( 일 )';


  return useObserver(() =>
    <div className={styles.wrapper} >
      <div className={styles.row}>
        <div className={styles.firstRowItem}>
          <div className={styles.title}>Issue Task</div>
          {
            homeData ?
              <div></div>
              :
              <div className={styles.noAssignTextContainer}>
                <p className={styles.noAssignText}>나이게 할당된 이슈가 없습니다.</p>
              </div>
          }

        </div>
        <div className={styles.firstRowItem} style={{ marginLeft: 70 }}>
          <p className={styles.title}>Time Line</p>
          <p className={styles.today}>Today: {dayjs().format('YYYY-MM-DD') + ' ' + '( ' + days[dayjs().day()] + ' )'}</p>
          {
            homeData ?
              <div></div>
              :
              <div className={styles.noAssignTextContainer}>
                <p className={styles.noAssignText}>이번주 일정이 존재하지 않습니다.</p>
                <p className={styles.noAssignText}>( {startDate} ~ {endDate} )</p>
              </div>
          }
        </div>
      </div>
      <div className={styles.row} style={{ marginTop: 50 }} >
        <div className={styles.myIssueChartContainer}>
          <p className={styles.title}>My Issue Progress Chart</p>
        </div>
      </div>
      <div className={styles.row} style={{ marginTop: 50 }} >
        <div className={styles.firstRowItem}>
          <p className={styles.title}>Project Contribution Chart</p>
        </div>
        <div className={styles.firstRowItem} style={{ marginLeft: 70 }}>
          <p className={styles.title}>Preject Progress Chart</p>
        </div>
      </div>
    </div>
  )
};

export default Home;