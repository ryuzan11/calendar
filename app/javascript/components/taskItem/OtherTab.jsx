import React from "react";

class OtherTab extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="row tab task">
          <div className="tab-content">
            <div className="tab-pane active" id="renthouses-list">
              <div className="task">タスク１</div>
              <div className="task">タスク２</div>
            </div>
            <div className="tab-pane" id="renthouses-list">
              <div className="task">タスク１</div>
              <div className="task">タスク２</div>
            </div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default OtherTab