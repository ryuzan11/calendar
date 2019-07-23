import React from "react";
import Calendar from "./calItem/Calendar";
import TaskBar from "./taskItem/TaskBar";

class CalendarTask extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      task_date: "",
      year: "",
      month: "",
    }
  }

  componentDidMount = () =>{
  const date = new Date();
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  this.setState({
    year: year,
    month: month
    })
  }

  moveCal = (month) => {
    let year = this.state.year
    if(month < 1){
      let prevYear = year-1
      let month = 12
      this.setState({year: prevYear,month: month})
    } else if(month > 12){
      let nextYear = year+1
      let month = 1
      this.setState({year: nextYear,month: month})
    } else {
      this.setState({year: year,month: month})
    }
  }

  handleInputPrevMonth = (prevMonth) => {
    let month = prevMonth
    this.moveCal(month)
    }

  handleInputNextMonth = (nextMonth) => {
    let month = nextMonth
    this.moveCal(month)
  }

  handleDateInput = (click_date) => {
    let task_date = click_date
    this.setState({task_date: task_date})
  }

  render(){
    return(
      <React.Fragment>
        <div className="calendar-bar">
          <h2>カレンダー</h2>
          {/* {createCalendar()} */}
          <Calendar 
            onDateForm={this.handleDateInput}
            onInputPrev={this.handleInputPrevMonth}
            onInputNext={this.handleInputNextMonth}
            year={this.state.year}
            month={this.state.month}
          />
        </div>
        <div className="task-bar">
          <h2>タスク登録</h2>
          <TaskBar 
            tasks={this.props.tasks}
            group={this.props.group}
            user={this.props.user}
            task_date={this.state.task_date}
            authenticity_token={this.props.authenticity_token} 
          />
        </div>
      </React.Fragment>
    )
  }
}

export default CalendarTask