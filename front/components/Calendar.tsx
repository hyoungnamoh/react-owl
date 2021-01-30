import { FC, useEffect, useState } from 'react';
import styles from '../styles/Calendar.module.scss';
import { getCalendarArray } from '../utils/calendarUtil';
const Calendar: FC<CalendarProps> = ({ year, month, style, className, headerHeight }) => {
  const [calendarArray, setCalendarArray] = useState<number[][]>([]);
  const [days, setDays] = useState<days>(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  useEffect(() => {
    setCalendarArray(getCalendarArray({ year, month }));
  }, [year, month]);
  return (
    <div className={styles.wrapper + ' ' + className} style={style}>
      <div className={styles.header + ' ' + headerHeight}>
        {
          days.map((e: day) => {
            return (
              <div className={styles.dayOfWeek}>
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
                week.map((day, dIndex) => {
                  return (
                    <div className={styles.dayCell}>
                      {day}
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