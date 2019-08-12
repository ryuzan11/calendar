import React from "react";

class OtherTask extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="other-task">
          <div className="row nav">
            <ul className="nav nav-tabs task">
              <li className="nav-item show">
                <div className="nav-link task">
                  ①active user
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  ②disabled user
                </div>
              </li>
            </ul>
          </div>
          <div className="row tab">
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
        </div>
      </React.Fragment>
    )
  }
}

export default OtherTask