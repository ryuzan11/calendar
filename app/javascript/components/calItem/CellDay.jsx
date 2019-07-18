import React from "react"


const CellDay = (year, month) => {
  const monthM = ( "0" + month ).slice(-2)
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month , 0);
  const endDay = endDate.getDate();
  const prevMonthEndDate = new Date(year, month-1, 0 );
  const prevMonthEndDay = prevMonthEndDate.getDate();
  const startDay = startDate.getDay(); //getDateは曜日を0から数字で返す

  let dayCount = 1;
  let cellDay = [];

  for ( let d=0 ; d<42 ; d++ ){
        if ( d<startDay ) {
          let prevDay = prevMonthEndDay - startDay + d + 1
          let prevMonth = ("0"+(monthM-1)).slice(-2)
          let ymd = year + "-" + prevMonth + "-" + prevDay
          cellDay.push(<div className="cal-cell disabled" id={ymd} key={d}><div>{prevDay}</div></div>)
        } else if ( dayCount>endDay ) {
          let nextDay = dayCount - endDay
          let nextDayN = ("0" + nextDay).slice(-2)
          let nextMonth = ("0" + (month + 1)).slice(-2)
          let ymd = year + "-" + nextMonth + "-" + nextDayN
          cellDay.push(<div className="cal-cell disabled" id={ymd} key={d}><div>{nextDay}</div></div>)
          dayCount++
        }else {
          let dayThisMonth = ("0" + dayCount).slice(-2)
          let ymd = year + "-" + monthM + "-" + dayThisMonth
          cellDay.push(<div className="cal-cell" id={ymd} key={d}><div>{dayCount}</div></div>)
          dayCount++
        }
  }
  
  return(
    <div className="cal-main">
      {cellDay}
    </div>
  )
};

export default CellDay