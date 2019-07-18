import React from "react"

  class TaskForm extends React.Component{

  handleInputChange = (e) =>  {
    const value = e.target.value;
    const name = e.target.name;
    let obj = {};
    obj[name] = value;
    // this.setState(obj);
    this.props.onUserInput(obj)
  };

  handleSubmit(e) {
    e.preventDefault();
    let task = {
      task_date :e.target.task_date.value, 
      comp :e.target.comp.value, 
      title :e.target.title.value,
      // task_start :e.target.task_start.value,
      // task_end :e.target.task_end.value,
      user_id :e.target.user_id.value
     }
    this.props.onFormSubmit(task);
    e.target.title.value = '';
    e.target.task_date.value = '';
    e.target.comp.value = '';
  };

  render(){
    const taskAction =  "/groups/"+this.props.group.id+"/tasks"
    return(
      <div className="data-submit">
        <form 
        onSubmit={(e) => this.handleSubmit(e)} 
        action={taskAction} 
        >
          <label>
            日付
            <input
              name="task_date"
              type="date"
              // value={this.props.task_date}
              onChange={this.handleInputChange}
               />
          </label><br />
          達成
          <label>
            <input
              name="comp"
              type="checkbox"
              // value={this.props.comp}
              onChange={this.handleInputChange} />
          </label><br />
          <label>
            　
            <textarea
              name="title"
              rows="1"
              placeholder="タスク記入"
              // value={this.props.title}
              onChange={this.handleInputChange}
            />
          </label><br />
          {/* <label>
            開始時間
            <input
              name="task_start"
              type="time"
              value={this.props.task_start}
              onChange={this.handleInputChange} />
          </label><br /> */}
          {/* <label>
            終了時間
            <input
              name="task_end"
              type="time"
              value={this.props.task_end}
              onChange={this.handleInputChange} />
          </label><br /> */}
          <input 
            type='hidden' 
            name='authenticity_token' 
            value={this.props.authenticity_token} />
          <input 
            type='hidden' 
            name='user_id' 
            value={this.props.user.id} />
          <input type="submit" value="登録" />
        </form><br />
      </div>
    );
  };
};

export default TaskForm