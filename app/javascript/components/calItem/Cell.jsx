import React from "react";
import CellDelete from "CellDelete";

class Cell extends React.Component {
  // handleClickTask = (e) => {
  //   let click_task = []
  //   click_task.push(e.target.className.split(" ")[0],e.target.id,e.target.innerHTML);
  //   this.props.onTaskData(click_task)
  // };

  render(){
    return(
      <div className={this.props.task.id + " task-cell"} 
           id={this.props.ymd}
          //  onClick={this.handleClickTask}
      >
      <CellDelete />
      {this.props.task.title}
      </div>
    )
  };
};

export default Cell