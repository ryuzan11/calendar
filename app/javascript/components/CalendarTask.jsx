import React from "react";
import Calendar from "./calItem/Calendar";
import TaskBar from "./taskItem/TaskBar";

class CalendarTask extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: this.props.tasks,
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
    task_date: date,
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

  handlePrevCalendar = (prevMonth) => {
    let month = prevMonth
    this.moveCal(month)
    }

  handleNextCalendar = (nextMonth) => {
    let month = nextMonth
    this.moveCal(month)
  }

  handleFormDate = (click_date) => {
    let task_date = click_date
    this.setState({task_date: task_date})
  }

  handleFormSubmit = (task) => {
    $.ajax({
      url: this.state.url,
      datatype: 'json',
      type: 'POST',
      data: task,
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))}
      }).done(function(tasks){
        this.setState({tasks: tasks})}.bind(this)
        // this.state.tasks.push(tasks: task)}.bind(this)
      ).fail(function(_xhr, status, err) {
        console.error(this.state.url, status, err.toString())}.bind(this)
      );
    }

  render(){
    return(
      <React.Fragment>
        <div className="calendar-bar">
          <h2>カレンダー</h2>
          {/* {createCalendar()} */}
          <Calendar 
            handlePrevCalendar={this.handlePrevCalendar}
            handleNextCalendar={this.handleNextCalendar}
            handleFormDate={this.handleFormDate}
            year={this.state.year}
            month={this.state.month}
            tasks={this.state.tasks}
          />
        </div>
        <div className="task-bar">
          <h2>タスク登録</h2>
          <TaskBar 
            tasks={this.state.tasks}
            group={this.props.group}
            user={this.props.user}
            task_date={this.state.task_date}
            authenticity_token={this.props.authenticity_token} 
            handleFormSubmit={this.handleFormSubmit}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default CalendarTask