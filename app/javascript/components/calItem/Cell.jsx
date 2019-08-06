import React from "react";
import CellDelete from "./CellDelete";

class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modal_class: "",
    }
  }

  componentDidMount = () =>{
    let modal_class = "modal-comment"
    this.setState({
      modal_class: modal_class
      })
    }

  handleClickDelete = () => {
    let modal_class = "modal-comment is-show is-animate"
    this.setState({
      modal_class: modal_class
    })
  }

  handleModalCancel = (modal_comment) => {
    let modal_class = modal_comment
    this.setState({
      modal_class: modal_class,
    })
  }

  // handleClickTask = (e) => {
  //   let click_task = []
  //   click_task.push(e.target.className.split(" ")[0],e.target.id,e.target.innerHTML);
  //   this.props.onTaskData(click_task)
  // };

  render(){
    return(
      <div className={this.props.task.id + " task-cell"} 
           id={this.props.ymd}
           onClick={this.handleClickDelete}
          //  onClick={this.handleClickTask}
      >
      {this.props.task.title}
      <CellDelete 
        task={this.props.task} 
        modal_class={this.state.modal_class}
        onModalCancel={this.handleModalCancel}
      />
      </div>
    )
  };
};

export default Cell