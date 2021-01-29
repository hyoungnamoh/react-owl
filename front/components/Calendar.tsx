import { FC, useEffect, useState } from 'react';
import styles from '../styles/Calendar.module.scss';
import { getCalendarArray } from '../utils/calendarUtil';
const Calendar: FC<CalendarProps> = ({ year, month, style, className, headerHeight }) => {
  const [calendarArray, setCalendarArray] = useState<number[][]>([]);
  const [days, setDays] = useState<day>(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  useEffect(() => {
    setCalendarArray(getCalendarArray({ year, month }));
  }, [year, month]);
  console.log(calendarArray);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        {
          days.map((e: day) => {
            return (
              <div className={styles.day}>
                {e}
              </div>
            )
          })
        }
      </div>
      {
        calendarArray.map((week, wIndex) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
              {
                week.map((day, dIndex) => {
                  return (
                    <div style={{ flex: 1 }}>
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