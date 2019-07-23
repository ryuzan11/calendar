import React from "react"
import Youbi from "./Youbi"
import CellDay from "./CellDay"

class Calendar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      year: this.props.year,
      month: this.props.month
    }
  }

  handleDateOutput = (click_date) =>{
    this.props.onDateForm(click_date)
  }

  render () {
    return (
      <React.Fragment>
        {/* <div className="member">メンバー</div> */}
        <h4>{this.state.year}年{this.state.month}月</h4>
        <div className="calendar">
          <Youbi />
          <CellDay 
            year={this.state.year} 
            month={this.state.month} 
            onTaskDate={this.handleDateOutput}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar