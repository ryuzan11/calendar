import React from "react";
import Cell from "./Cell"

class CellTask extends React.Component {
  render(){
    let ymd = this.props.ymd
    return( 
      <React.Fragment>
        {this.props.tasks.map( task => {
          if( ymd == task.task_date ){
            return(
              <Cell task={task} key={task.id} />
            )
          }
        })}
      </React.Fragment>
    )
  }
}

export default CellTask