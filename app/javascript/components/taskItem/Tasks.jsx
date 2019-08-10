import React from "react";
import Task from "./Task";

class Tasks extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="tasks">
          {this.props.tasks.map( task => {
            if ( this.props.task_date == task.task_date && task.user_id == this.props.user.id){
              return (
                <Task task={task} key={task.id} />
              )
            }})
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Tasks