import React from "react"
import Youbi from "./Youbi"
// import PropTypes from "prop-types"

class Calendar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="member">メンバー</div>
        <div className="ym">年月セレクト</div>
        <div className="calendar">
          <Youbi />
          <div className="cal-main">
            <div className="cal-day">日</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// Calendar.propTypes = {
//   calendar: PropTypes.string
// };

export default Calendar
