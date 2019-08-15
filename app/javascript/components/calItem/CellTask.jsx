import React from "react";
import Cell from "./Cell"

class CellTask extends React.Component {
  render(){
    let ymd = this.props.ymd
    let length = []
    
    this.props.tasks.map( task => {
      if( ymd == task.task_date && task.user_id == this.props.user.id && task.comp == false ){
        length.push(<Cell 
                      ymd={ymd} 
                      task={task} 
                      task_cell=" task-cell"
                      key={task.id} 
                   />)
      } else if ( ymd == task.task_date && task.user_id == this.props.user.id && task.comp == true ) {
        length.push(<Cell 
                      ymd={ymd} 
                      task={task} 
                      task_cell=" task-cell comp"
                      key={task.id} 
                  />)
      }
    })

    return(
      <React.Fragment>
        {length[0]}
        {length[1]}
        {length[2]}
        {length[3]}
      </React.Fragment>
    )
  }
}

export default CellTask