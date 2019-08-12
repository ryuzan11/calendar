import React from "react";

class OtherNav extends React.Component{
  render(){
    return(
      <React.Fragment>
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

      </React.Fragment>
    )
  }
}

export default OtherNav