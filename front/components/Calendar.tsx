import { FC, useEffect, useState } from 'react';
import styles from '../styles/Calendar.module.scss';
import { getCalendarArray } from '../utils/calendarUtil';
const Calendar: FC<CalendarProps> = ({ year, month }) => {
  const [calendarArray, setCalendarArray] = useState<number[][]>([]);
  useEffect(() => {
    setCalendarArray(getCalendarArray({ year, month }));
  }, [year, month]);
  console.log(calendarArray);
  return (
    <div className={styles.wrapper}>
      {
        calendarArray.map((week, wIndex) => {
          return (
            <div style={{ backgroundColor: 'pink', display: 'flex', flexDirection: 'row' }}>
              {
                week.map((day, dIndex) => {
                  return (
                    <div style={{width: 100, height: 100, backgroundColor: 'yellow'}}>
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