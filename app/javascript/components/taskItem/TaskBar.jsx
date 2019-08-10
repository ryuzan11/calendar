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
            <h2>他ユーザー(未実装)</h2>
            <div className="tab">
              <ul className="users-tab">
                <li className="user-tab active">①active user</li>
                <li className="user-tab">②disabled user</li>
              </ul>
            </div>
            <div className="tasks user active">①active user
              <div className="task">タスク１</div>
              <div className="task">タスク２</div>
            </div>
            <div className="tasks user">②disabled user
              <div className="task">タスク１</div>
              <div className="task">タスク２</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

}

export default TaskBar