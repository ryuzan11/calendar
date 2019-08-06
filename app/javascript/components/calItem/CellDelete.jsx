import React from "react";

class CellDelete extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     modal_class: this.props.modal_class,
  //   }
  // }

  handleClickCancel = () => {
    let modal_comment = "modal-comment"
    this.props.onModalCancel(modal_comment)
  }

  render(){
    return(
      <aside id="delete-comment" className={this.props.modal_class}>
        <div className="modal-inner modal-banner">
          <div className="modal-body">
            <div className="modal-head bold">確認<br/>
              削除すると二度と復活できません。<br/><br/>本当に削除しますか？
            </div>
            <button type="button" 
                    className="modal-btn modal-btn-cancel" 
                    // data-modal="delete-comment" 
                    // data-close="modal-comment"
                    onClick={this.handleClickCancel}
                    >
                    キャンセル
            </button>
            <a className="modal-btn modal-btn-submit" rel="nofollow" data-method="delete" href={"/groups/" + this.props.task.group_id + "/tasks/" + this.props.task.id}>削除する</a>
          </div>
        </div>
      </aside>
    )
  };
};

export default CellDelete