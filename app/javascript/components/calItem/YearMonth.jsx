import React from "react";

class YearMonth extends React.Component{

  handleClickPrev = () => {
    let prevMonth = this.props.month - 1
    this.props.onPrevMonth(prevMonth)
  }

  handleClickNext = () => {
    let nextMonth = this.props.month + 1
    this.props.onNextMonth(nextMonth)
  }


render(){  
  return(
    <React.Fragment>
      <div className="row">
        <div className="year-month">
          <button type="button" className="btn btn-outline-default" onClick={this.handleClickPrev}>前月</button>
          <span className="calendar-title">{this.props.year}年{this.props.month}月</span>
          <button type="button" className="btn btn-outline-default" onClick={this.handleClickNext}>次月</button>
        </div>
      </div>
    </React.Fragment>
  )
}

}

export default YearMonth