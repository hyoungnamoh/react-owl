import { CSSProperties, FC, useEffect, useState } from 'react';
import styles from '../styles/Calendar.module.scss';
import { getCalendarArray } from '../utils/calendarUtil';

const today = new Date().getDay();
const Calendar: FC<CalendarProps> = ({ year, month, style, className, headerHeight }) => {
  const [calendarArray, setCalendarArray] = useState<Week[][]>([]);
  const [days, setDays] = useState<days>(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  useEffect(() => {
    setCalendarArray(getCalendarArray({ year, month }));
  }, [year, month]);

  const getDayStyle = ({ dIndex }: getDayStyleProps): CSSProperties => {
    return dIndex === 6 ? { borderRightWidth: 0 } : {}
  }

  const getDayGroundStyle = ({ isToday }: getDayGroundStyleProps): CSSProperties => {
    return isToday ? { backgroundColor: '#135de6', color: '#ffffff' } : { backgroundColor: 'transparent', color: '#333333' }
  }
  return (
    <div className={styles.wrapper + ' ' + className} style={style}>
      <div className={styles.header + ' ' + headerHeight}>
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
                      <div className={styles.dayGround} style={getDayGroundStyle({ isToday: dayItem.isToday })}>
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