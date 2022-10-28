import React, { Component } from 'react'
import "./index.css"
export default class Foorer extends Component {
  handleCheckAll=(event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  deleteTodosAllDone=()=>{
    this.props.deleteTodosAll()
  }
  render() {
    const {todos} = this.props;
    const doneCount= todos.reduce((pre,todo)=>pre+(todo.done?1:0),0);
    const total=todos.length;
    return (
      <div className="todo-footer">
      <label>
          <input type="checkbox" onChange={this.handleCheckAll} 
          checked={total === doneCount&& total !== 0?true:false} />
      </label>
      <span>
          <span>已完成{doneCount}</span> /全部 {total}
      </span>
      <button onClick={this.deleteTodosAllDone} className="btn btn-danger">清除已完成任务</button>
  </div>
    )
  }
}
