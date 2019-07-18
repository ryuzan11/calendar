import React from "react"
import TaskForm from "./TaskForm"
import Tasks from "./Tasks"

class MyTask extends React.Component {1
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      group: this.props.group,
      user: this.props.user,
      authenticity_token: this.props.authenticity_token,
      task_date: '',
      comp: false,
      title: '',
      // task_start: '',
      // task_end: '',
      url: "/groups/"+this.props.group.id+"/tasks",
    };
  };

  handleUserInput = (obj) => {
    this.setState(obj);
  }

  handleFormSubmit = (task) => {
    $.ajax({
      url: this.state.taskAction,
      datatype: 'json',
      type: 'POST',
      data: task,
      beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
      success: function(task){
        this.setState({task: task});
        }.bind(this),
      error: function(_xhr, status, err) {
        console.error(this.state.url, status, err.toString());
        }.bind(this)
      });
    }
  
  render () {
    return(
      <div className="my-task">
      <div className="mytask-title">MYタスク</div>
      <TaskForm
        task_date={this.state.task_date}
        title={this.state.title}
        group={this.state.group}
        user={this.state.user}
        authenticity_token={this.state.authenticity_token}
        onUserInput={this.handleUserInput}
        onFormSubmit={this.handleFormSubmit}
      />
      <Tasks tasks={this.state.tasks} />
    </div>
    )
  }
}

export default MyTask