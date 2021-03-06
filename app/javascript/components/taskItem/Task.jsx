import React from "react";
import DeleteModal from "../share/DeleteModal";

class Task extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      comp: this.props.task.comp,
      comp_checked: this.props.task.comp
    }
  }

  compCheck = (e) => {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let task_comp = {comp: value, task_id: target.className }
    this.props.onCheckMyTask(task_comp);
    this.setState({
      comp: value,
      comp_checked: value
    });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render(){
    let created_at = this.props.task.created_at ;
    let month = created_at.slice(5,7);
    let day = created_at.slice(8,10);
    let created_date = '作成日：' + month + '月' + day + '日' ;

    return(
      <li className="list-group-item col-sm-11 task">
        <div className="list-group-item task"
             id={this.props.task.id + " " + this.props.task.task_date}>
          <input
            name="comp"
            className = {this.props.task.id}
            type="checkbox"
            value={this.state.comp}
            checked = {this.state.comp_checked}
            onClick = {this.compCheck}
          />
          <span>{this.props.task.title + "　"}</span>
          <span className="far fa-trash-alt"
              onClick={this.showModal}
          >
          </span>
          <span className="created-date small">
            { created_date }
          </span>
          <DeleteModal task={this.props.task} 
                      show={this.state.show}
                      handleClose={this.hideModal} />
        </div>
      </li>
    )
  };
};

export default Task
