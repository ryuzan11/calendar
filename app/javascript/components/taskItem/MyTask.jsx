import React from "react"
import TaskForm from "./TaskForm"
import Tasks from "./Tasks"

class MyTask extends React.Component {
  // handleUserInput = (obj) => {
  //   this.setState(obj);
  // }

  render () {
    return(
      <div className="my-task">
      <div className="mytask-title">MYタスク</div>
      <TaskForm
        user={this.props.user}
        task_date={this.props.task_date}
        title={this.props.title}
        authenticity_token={this.props.authenticity_token}
        // onUserInput={this.handleUserInput}
        onFormSubmit={this.props.handleFormSubmit}
      />
      <Tasks tasks={this.props.tasks} task_date={this.props.task_date} user={this.props.user} />
    </div>
    )
  }
}

export default MyTask