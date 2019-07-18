import React from "react"
import Youbi from "./calItem/Youbi"
import CellDay from "./calItem/CellDay"

class Calendar extends React.Component {
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
          {CellDay(year, month)}
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar
