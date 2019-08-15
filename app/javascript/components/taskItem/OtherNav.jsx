import React from "react";

class OtherNav extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="row nav task">
          <ul className="nav nav-tabs task">
            {this.props.other_users.map( (user, index) => {
              if ( index == 0 ){
                let activeClass = (this.props.active == index ? "nav-item active" : "nav-item")
                return (
                  <li className={activeClass} key={index} >
                    <div className="nav-link task" id={"nav-" + index} onClick={this.props.selectedIndex}>
                      {user.nickname}
                    </div>
                  </li>
                )
              } else {
                let activeClass = (this.props.active == index ? "nav-item active" : "nav-item")
                return (
                  <li className={activeClass}  key={index}>
                    <div className="nav-link task" id={"nav-" + index} onClick={this.props.selectedIndex}>
                      {user.nickname}
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