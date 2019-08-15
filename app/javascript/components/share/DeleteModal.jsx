import React from "react";

class DeleteModal extends React.Component {
  render(){

    let showHideClassName = this.props.show ? "modal is-show is-animate" : "modal";

    let DeleteData = () => {
      if( this.props.group == null ){
        return(
          <a className="modal-btn modal-btn-submit" 
            rel="nofollow" 
            data-method="delete" 
            href={"/groups/" + this.props.task.group_id + "/tasks/" + this.props.task.id}>
            削除する
          </a> )
      } else if( this.props.task == null  ){
        return(
          <a className="modal-btn modal-btn-submit" 
            rel="nofollow" 
            data-method="delete" 
            href={"/groups/" + this.props.group.id }>
            削除する
          </a> )
      }
    }

    return(
      <aside id="delete" className={showHideClassName}>
        <div className="modal-inner modal-banner">
          <div className="modal-body">
            <div className="modal-head bold">確認<br/>
              削除すると二度と復活できません。<br/><br/>本当に削除しますか？
            </div>
            <button type="button" 
                    className="modal-btn modal-btn-cancel" 
                    onClick={this.props.handleClose}
                    >
                    キャンセル
            </button>
            <DeleteData />
          </div>
        </div>
      </aside>
    )
  };
};

export default DeleteModal