import React from "react";
import TaskDelete from "./TaskDelete";

class Task extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // handleClickTask = (e) => {
  //   let click_task = []
  //   click_task.push(e.target.className.split(" ")[0],e.target.id,e.target.innerHTML);
  //   this.props.onTaskData(click_task)
  // };

  render(){
    return(
      <div className="task-cell" 
           id={this.props.task.id + " " + this.props.task.task_date}>
        {this.props.task.title}
        <button className="far fa-trash-alt"
                onClick={this.showModal}
                // onClick={this.handleClickTask} 
        >
        </button>
        <TaskDelete task={this.props.task} 
                    show={this.state.show}
                    handleClose={this.hideModal} />
      </div>
    )
  };
};

export default Task
