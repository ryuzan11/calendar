import React from "react";

class Cell extends React.Component {

  render(){
    return(
      <div className={this.props.task.id + " task-cell"} 
           id={this.props.ymd} >
        {this.props.task.title}
      </div>
    )
  };
};

export default Cell