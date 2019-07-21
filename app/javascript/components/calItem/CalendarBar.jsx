import React from "react"
import Youbi from "./Youbi"
import CellDay from "./CellDay"

class CalendarBar extends React.Component {

  handleDateOutput = (click_date) =>{
    this.props.onDateForm(click_date)
  }

  render () {
    const date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth() + 1

    return (
      <React.Fragment>
        {/* <div className="member">メンバー</div> */}
        <h4>{year}年{month}月</h4>
        <div className="calendar">
          <Youbi />
          <CellDay 
          year={year} 
          month={month} 
          onTaskDate={this.handleDateOutput}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CalendarBar
