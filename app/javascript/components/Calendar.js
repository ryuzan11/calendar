import React from "react"
// import PropTypes from "prop-types"

class Calendar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="member">メンバー</div>
        <div className="ym">年月セレクト</div>
        <div className="calendar">
          <div className="calendar-week">曜日</div>
          <div className="calendar-main">
            <div className="calendar-cell">日</div>
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
