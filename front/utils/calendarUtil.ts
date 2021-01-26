const getCalendar = () => {
  const today = new Date();
  const setDate = new Date(2021, 1 - 1, 1);
  const firstDayName = setDate.getDay(); // 5

  // getMonth() 는 0월부터 시작
  // 3번째 인자에 0 넣어주면 해당월 - 1의 마지막날 반환
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); //todaty.getMonth 이번달 + 1의 전 달 마지막 일 === 이번달의 마지막일
  const prevLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate(); //전 달의 마지막일

  let startDayCount = 1;
  let lastDayCount = 1;

  let calendarArray = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayName) {
        calendarArray.push(prevLastDay - (firstDayName - 1) + j);
      } else if (startDayCount > lastDay) {
        calendarArray.push(lastDayCount);
        lastDayCount++;
      } else {
        calendarArray.push(startDayCount);
        startDayCount++;
      }
    }
  }
  return calendarArray;
}


export default getCalendar;