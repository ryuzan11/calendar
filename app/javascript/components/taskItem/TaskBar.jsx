import React from "react";
import MyTask from "./MyTask";

class TaskBar extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="task">
          <MyTask 
            tasks={this.props.tasks} 
            group={this.props.group} 
            user={this.props.user} 
            task_date={this.props.task_date}
            title={this.props.title}
            authenticity_token={this.props.authenticity_token} 
            handleFormSubmit={this.props.handleFormSubmit}
          />
          <hr className="sidebar-divider my-0"></hr>

          <div className="other-task">
            <div className="row nav">
              <ul className="nav nav-tabs">
                <li className="nav-item show">
                  <div className="nav-link">
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

        </div>
      </React.Fragment>
    );
  };

}

export default TaskBar