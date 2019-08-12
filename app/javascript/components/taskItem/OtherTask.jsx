import React from "react";
import OtherNav from "./OtherNav"
import OtherTab from "./OtherTab"

class OtherTask extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="other-task">
          <OtherNav other_users={this.props.other_users}/>
          <OtherTab other_tasks={this.props.other_tasks}/>
        </div>
      </React.Fragment>
    )
  }
}

export default OtherTask