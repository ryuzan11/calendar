import React from "react"
import YearMonth from "./YearMonth"
import Youbi from "./Youbi"
import CellDay from "./CellDay"

class Calendar extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     year: this.props.year,
  //     month: this.props.month,
  //   }
  // }

  handlePrevCalendar = (prevMonth) => {
    this.props.onInputPrev(prevMonth)
  }

  handleNextCalendar = (nextMonth) => {
    this.props.onInputNext(nextMonth)
  }

  handleDateOutput = (click_date) =>{
    this.props.onDateForm(click_date)
  }

  render () {
    return (
      <React.Fragment>
        {/* <div className="member">メンバー</div> */}
        <YearMonth 
          year={this.props.year} 
          month={this.props.month} 
          onPrevMonth={this.handlePrevCalendar}
          onNextMonth={this.handleNextCalendar}
        />
        <div className="calendar">
          <Youbi />
          <CellDay 
            year={this.props.year} 
            month={this.props.month}
            onTaskDate={this.handleDateOutput}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar