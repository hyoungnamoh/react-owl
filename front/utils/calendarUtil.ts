const getCalendarArray = ({ year, month }: CalendarProps): Week[][] => {
  const today = new Date().getDay();
  const setDate: Date = new Date(year, month - 1, 1);
  const firstDayName: number = setDate.getDay(); // 5

  // getMonth() 는 0월부터 시작
  // 3번째 인자에 0 넣어주면 해당월 - 1의 마지막날 반환
  const lastDay: number = new Date(setDate.getFullYear(), setDate.getMonth() + 1, 0).getDate(); //todaty.getMonth 이번달 + 1의 전 달 마지막 일 === 이번달의 마지막일
  const prevLastDay: number = new Date(setDate.getFullYear(), setDate.getMonth(), 0).getDate(); //전 달의 마지막일
  let startDayCount: number = 1;
  let lastDayCount: number = 1;

  let calendarArray: Week[][] = [];

  for (let i = 0; i < 6; i++) {
    let week: Week[] = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayName) { // 첫 주, 이번달 첫 요일보다 앞일경우
        week.push({ day: prevLastDay - (firstDayName - 1) + j });
      } else if (startDayCount > lastDay) { //마지막날 지날 경우
        week.push({ day: lastDayCount });
        lastDayCount++;
      } else if (today === startDayCount) {
        week.push({ day: startDayCount, isToday: true })
        startDayCount++;
      } else {
        week.push({ day: startDayCount });
        startDayCount++;
      }
    }
    calendarArray.push(week);
  }
  return calendarArray;
}


export { getCalendarArray };