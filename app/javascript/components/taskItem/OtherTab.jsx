import React from "react";

class OtherTab extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="row tab task">
          <div className="tab-content">
            {this.props.other_users.map( (user, index) => {
              if ( index == 0 ){
                let activeClass = (this.props.active == index ? "tab-pane active" : "tab-pane")
                return (
                  <ul className={activeClass} key={index} id={"tab-" + index}>
                    {this.props.other_tasks.map( (task, index) => {
                      if ( user.id == task.user_id ){
                        return(
                          <div className="othertask" key={index} id={"tabtask-" + task.id} >
                            <input
                              name="comp"
                              type="checkbox"
                              checked = {task.comp}
                            />
                            <span>{task.title + "　"}</span>
                          </div>
                        )
                      }
                    })}
                  </ul>
                )
              } else {
                let activeClass = (this.props.active == index ? "tab-pane active" : "tab-pane")
                return (
                  <ul className={activeClass} key={index} id={"tab-" + index}>
                    {this.props.other_tasks.map( (task, index) => {
                      if ( user.id == task.user_id ){
                        return(
                          <div className="othertask" key={index} id={"tabtask-" + task.id}>
                            <input
                              name="comp"
                              type="checkbox"
                              checked = {task.comp}
                            />
                            <span>{task.title + "　"}</span>
                          </div>
                        )
                      }
                    })}
                  </ul>
                )
              }
            })}
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default OtherTab