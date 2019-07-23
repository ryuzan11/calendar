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

  render () {
    return (
      <React.Fragment>
        {/* <div className="member">メンバー</div> */}
        <YearMonth 
          year={this.props.year} 
          month={this.props.month} 
          onPrevMonth={this.props.handlePrevCalendar}
          onNextMonth={this.props.handleNextCalendar}
        />
        <div className="calendar">
          <Youbi />
          <CellDay 
            year={this.props.year} 
            month={this.props.month}
            tasks={this.props.tasks}
            onTaskDate={this.props.handleFormDate}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar