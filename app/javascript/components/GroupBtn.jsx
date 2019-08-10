import React from "react";
import DeleteModal from "./share/DeleteModal"

class GroupBtn extends React.Component {
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

  render(){
    return(
      <React.Fragment>
        <a className="btn btn-primary group" href={"/groups/" + this.props.group.id + "/tasks"}>詳細</a>
        <button className="btn btn-danger group" onClick={this.showModal}>削除</button>
        <DeleteModal group={this.props.group}
                     show={this.state.show}
                     handleClose={this.hideModal}/>
      </React.Fragment>
    )
  }
}

export default GroupBtn