import React from "react"

class CellDay extends React.Component{

  handleClickCell = (e) => {
    let click_date = e.target.id;
    this.props.onTaskDate(click_date)
  };

  render(){
    const monthM = ( "0" + this.props.month ).slice(-2)
    const startDate = new Date(this.props.year, this.props.month - 1, 1);
    const endDate = new Date(this.props.year, this.props.month , 0);
    const endDay = endDate.getDate();
    const prevMonthEndDate = new Date(this.props.year, this.props.month-1, 0 );
    const prevMonthEndDay = prevMonthEndDate.getDate();
    const startDay = startDate.getDay(); //getDateは曜日を0から数字で返す

    let dayCount = 1;
    let cellDay = [];

    for ( let d=0 ; d<42 ; d++ ){
          if ( d<startDay ) {
            let prevDay = prevMonthEndDay - startDay + d + 1
            let prevMonth = ("0"+(monthM-1)).slice(-2)
            let ymd = this.props.year + "-" + prevMonth + "-" + prevDay
            cellDay.push(<div 
                  className="cal-cell disabled" 
                  id={ymd} 
                  key={d} 
                  onClick={this.handleClickCell}
                >
                <div id={ymd} >{prevDay}</div>
            </div>)
          } else if ( dayCount>endDay ) {
            let nextDay = dayCount - endDay
            let nextDayN = ("0" + nextDay).slice(-2)
            let nextMonth = ("0" + (this.props.month + 1)).slice(-2)
            let ymd = this.props.year + "-" + nextMonth + "-" + nextDayN
            cellDay.push(<div 
                className="cal-cell disabled" 
                id={ymd} 
                key={d}
                onClick={this.handleClickCell}
              >
                <div id={ymd} >{nextDay}</div>
                </div>)
            dayCount++
          }else {
            let dayThisMonth = ("0" + dayCount).slice(-2)
            let ymd = this.props.year + "-" + monthM + "-" + dayThisMonth
            cellDay.push(<div 
                  className="cal-cell" 
                  id={ymd} 
                  key={d}
                  onClick={this.handleClickCell}
                >
                <div id={ymd} >{dayCount}</div>
              </div>)
            dayCount++
          }
    }

    return(
      <div className="cal-main">
        {cellDay}
      </div>
    )
  }
};

export default CellDay