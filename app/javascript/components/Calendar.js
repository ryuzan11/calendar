import React from "react"
import Youbi from "./Youbi"
import CellDay from "./CellDay"
// import PropTypes from "prop-types"

class Calendar extends React.Component {
  render () {
    const date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    
    return (
      <React.Fragment>
        <div className="member">メンバー</div>
        {/* <div>
          <button onClick={onClick(-1)}>{'前月'}</button>
        </div> */}
        <h4>{year}年{month}月</h4>
        {/* <div>
          <button onClick={onClick(1)}>{'次月'}</button>
        </div> */}
        <div className="calendar">
          <Youbi />
          {CellDay(year, month)}
        </div>
      </React.Fragment>
    );
  }
}

// Calendar.propTypes = {
//   calendar: PropTypes.string
// };

export default Calendar
