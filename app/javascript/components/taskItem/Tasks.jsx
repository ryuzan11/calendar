import React from "react";
import Task from "./Task";

class Tasks extends React.Component{
  render(){
    return(
      <React.Fragment>
      <div className="tasks">
        {this.props.tasks.map(function(task){
          return (
          <Task task={task} key={task.id} />
          )
        })}
      </div>
      </React.Fragment>
    )
  }
}

export default Tasks