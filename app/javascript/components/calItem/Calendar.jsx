import React from "react"
import YearMonth from "./YearMonth"
import Youbi from "./Youbi"
import CellDay from "./CellDay"

class Calendar extends React.Component {

  render () {
    return (
      <React.Fragment>
        <div className="card-header">
          <YearMonth 
            year={this.props.year} 
            month={this.props.month} 
            onPrevMonth={this.props.handlePrevCalendar}
            onNextMonth={this.props.handleNextCalendar}
          />
        </div>
        <div className="card-body">
          <div className="calendar">
            <Youbi />
            <CellDay 
              year={this.props.year} 
              month={this.props.month}
              tasks={this.props.tasks}
              onTaskDate={this.props.handleFormDate}
              user={this.props.user}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar