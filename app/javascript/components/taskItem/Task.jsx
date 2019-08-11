import React from "react";
import DeleteModal from "../share/DeleteModal";

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
    let created_at = this.props.task.created_at ;

    // let year = created_at.slice(0,4);
    let month = created_at.slice(5,7);
    let day = created_at.slice(8,10);
    // let hour = created_at.slice(11,13);
    // let min = created_at.slice(14,16);

    let created_date = '作成日：' + month + '月' + day + '日' ;

    return(
      <li className="list-group-item col-sm-11 task">
        <div className="list-group-item task"
             id={this.props.task.id + " " + this.props.task.task_date}>
          {this.props.task.title + "　"}
          <span className="far fa-trash-alt"
              onClick={this.showModal}
              // onClick={this.handleClickTask} 
          >
          </span>
          <span className="created-date small">
            { "　　　" + created_date }
          </span>
        </div>
        <DeleteModal task={this.props.task} 
                     show={this.state.show}
                     handleClose={this.hideModal} />
      </li>
    )
  };
};

export default Task
