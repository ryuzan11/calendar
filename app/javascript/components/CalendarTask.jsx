import React from "react";
import Calendar from "./calItem/Calendar";
import TaskBar from "./taskItem/TaskBar";

class CalendarTask extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      task_date : this.props.task_date,
    }
  }

  handleDateInput = (click_date) => {
    let task_date = click_date
    this.setState({task_date :task_date})
  }

  render(){
    const date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth() + 1

    return(
      <React.Fragment>
        <div className="calendar-bar">
          <h2>カレンダー</h2>
          <Calendar 
            onDateForm={this.handleDateInput}
            year={year}
            month={month}
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