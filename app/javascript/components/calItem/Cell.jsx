import React from "react";

class Cell extends React.Component {
  render(){
    return(
      <div className="task-cell" id="task.id">{this.props.task.title}</div>
    )
  };
};

export default Cell