import React from "react";
import Task from "./Task";

class Tasks extends React.Component{
  render(){
    console.log(this.props.tasks)
    return(
      <React.Fragment>
      <div className="tasks">
        {this.props.tasks.map(function(task){
          return (
          <Task task={task} key={task.id} />
          )
        })}
      </div>
      {/* <div className="tasks">
        <Task task={this.props.task} key={task.id} />
      </div> */}
      </React.Fragment>
    )
  }
}

export default Tasks