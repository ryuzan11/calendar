import React from "react"
import TaskForm from "./TaskForm"
import Tasks from "./Tasks"

class MyTask extends React.Component {1
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      url: "/groups/"+this.props.group.id+"/tasks",
      // task_date: '',
      // comp: false,
      // title: '',
      // task_start: '',
      // task_end: '',
    };
  };

  // handleUserInput = (obj) => {
  //   this.setState(obj);
  // }

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

  render () {
    return(
      <div className="my-task">
      <div className="mytask-title">MYタスク</div>
      <TaskForm
        group={this.props.group}
        user={this.props.user}
        task_date={this.props.task_date}
        authenticity_token={this.props.authenticity_token}
        // onUserInput={this.handleUserInput}
        onFormSubmit={this.handleFormSubmit}
      />
      <Tasks tasks={this.state.tasks} 
      />
    </div>
    )
  }
}

export default MyTask