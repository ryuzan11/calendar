import React from "react";
// import Cell from "./Cell"

class CellTask extends React.Component {
  render(){
    let ymd = this.props.ymd
    let length = []
    

      this.props.tasks.map( task => {

        if( ymd == task.task_date ){
          length.push(<div className="task-cell" id="task.id">{task.title}</div>)
          // length.push(<Cell task={task} key={task.id} />)
        }
      })

    return(
      <React.Fragment>
        {length[0]}
        {length[1]}
        {length[2]}
      </React.Fragment>
    )
  }
}

export default CellTask