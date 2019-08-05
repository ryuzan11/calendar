import React from "react";

class Cell extends React.Component {
  handleClickTask = (e) => {
    let click_task = []
    click_task.push(e.target.className.split(" ")[0],e.target.id,e.target.innerHTML);
    this.props.onTaskData(click_task)
  };

  render(){
    return(
      <div className={this.props.ymd + " task-cell"} 
           id={this.props.task.id}
           onClick={this.handleClickTask}
      >
      {this.props.task.title}
      </div>
    )
  };
};

export default Cell