import React from "react";

class OtherNav extends React.Component{
  render(){
    console.log(this.props.other_users)
    return(
      <React.Fragment>
        <div className="row nav">
          <ul className="nav nav-tabs task">
            {this.props.other_users.map( (other_user, index) => {
              if ( index == 0 ){
                return (
                  <li className="nav-item show">
                    <div className="nav-link task" key={index}>
                      {other_user.nickname}
                    </div>
                  </li>
                )
              } else {
                return (
                  <li className="nav-item">
                    <div className="nav-link task" key={index}>
                      {other_user.nickname}
                    </div>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default OtherNav