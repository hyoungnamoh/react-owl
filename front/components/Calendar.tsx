import dayjs from 'dayjs';
import { CSSProperties, FC, useEffect, useState } from 'react';
import styles from '../styles/Calendar.module.scss';
import { getCalendarArray } from '../utils/calendarUtil';

const Calendar: FC<CalendarProps> = ({ year, month, style, className, headerHeight }) => {
  const [calendarArray, setCalendarArray] = useState<Week[][]>([]);
  const [days, setDays] = useState<days>(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  const [yearState, setYearState] = useState<number>(year);
  const [monthState, setMonthState] = useState<number>(month);
  useEffect(() => {
    setCalendarArray(getCalendarArray({ year: yearState, month: monthState }));
  }, [year, month, yearState, monthState]);

  const getDayStyle = ({ dIndex }: getDayStyleProps): CSSProperties => {
    return dIndex === 6 ? { borderRightWidth: 0 } : {}
  }

  const getDayGroundStyle = ({ isToday, dIndex }: getDayGroundStyleProps): CSSProperties => {
    // , color:  ? 'red' : '#333333'
    const style: CSSProperties = {};
    if(dIndex === 0) {
      style.color = 'red';
    } else {
      style.color = '#333333';
    }
    if(isToday && year === yearState && month === monthState) {
      style.backgroundColor = '#135be6';
      style.color = '#ffffff';
    }
    return style;
  }

  const onClickTodayButton = () => {
    setYearState(year);
    setMonthState(month);
    setCalendarArray(getCalendarArray({ year, month }));
  }

  const onClickPrevMonthButton = () => {
    if (monthState < 2) {
      setYearState(prevYearState => prevYearState - 1);
      setMonthState(12);
    } else {
      setMonthState(prevMonthState => prevMonthState - 1);
    }
  }

  const onClickNextMonthButton = () => {
    if (monthState > 11) {
      setYearState(prevYearState => prevYearState + 1);
      setMonthState(1);
    } else {
      setMonthState(prevMonthState => prevMonthState + 1);
    }
  }
  return (
    <div className={styles.wrapper + ' ' + className} style={style}>
      <div className={styles.headerContainer}>
        <div className={styles.headerButton} onClick={onClickTodayButton}>
          Today
        </div>
        <div className={styles.headerButton} onClick={onClickPrevMonthButton}>
          {'<'}
        </div>
        <div className={styles.headerButton} onClick={onClickNextMonthButton}>
          {'>'}
        </div>
        <span className={styles.headerDate}>{`${yearState}.${monthState < 10 ? '0' + monthState : monthState}`}</span>
      </div>
      <div className={styles.dayOfWeekWrapper + ' ' + headerHeight}>
        {
          days.map((e: day) => {
            return (
              <div className={styles.dayOfWeek} style={e === 'Sun' ? { color: 'red' } : {}}>
                {e}
              </div>
            )
          })
        }
      </div>
      {
        calendarArray.map((week, wIndex) => {
          return (
            <div className={styles.week}>
              {
                week.map((dayItem, dIndex) => {
                  return (
                    <div className={styles.dayCell} style={getDayStyle({ dIndex })}>
                      <div className={styles.dayGround} style={getDayGroundStyle({ isToday: dayItem.isToday, dIndex })}>
                        <p style={{ marginBottom: 1 }}>{dayItem.day}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Calendar;