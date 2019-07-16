import React from "react"


const CellDay = (year, month) => {
  // const date = new Date();
  // let thisYear = date.getFullYear()
  // let thisMonth = date.getMonth() + 1
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month , 0);
  const endDay = endDate.getDate();
  // const endDayCount = endDay + 1
  const prevMonthEndDate = new Date(year, month-1, 0 );
  const prevMonthEndDay = prevMonthEndDate.getDate();
  const startDay = startDate.getDay(); //getDateは曜日を0から数字で返す

  let dayCount = 1;
  let cellDay = [];

  for ( let d=0 ; d<42 ; d++ ){
        if ( d<startDay ) {
          let prevDay = prevMonthEndDay - startDay + d + 1
          let ymd = year + "-" + (month-1) + "-" + prevDay
          cellDay.push(<div className="cal-cell disabled" id={ymd}><div>{prevDay}</div></div>)
        } else if ( dayCount>endDay ) {
          let nextDay = dayCount - endDay
          let ymd = year + "-" + (month+1) + "-" + nextDay
          cellDay.push(<div className="cal-cell disabled" id={ymd}><div>{nextDay}</div></div>)
          dayCount++
        }else {
          let ymd = year + "-" + month + "-" + dayCount
          cellDay.push(<div className="cal-cell" id={ymd}><div>{dayCount}</div></div>)
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