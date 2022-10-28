import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import "./index.css"
export default class Header extends Component {
  handleKeyUp=(event)=>{
    const {keyCode,target}=event
    if(keyCode !==13)return
    if(target.value.trim() === ''){
      alert("不能为空")
      return
    }
    const todoObj = {id:nanoid() ,name:target.value,done:false};
    this.props.addTodos(todoObj);
    target.value = '';
  }

  
  render() {
    return (
      <div className="todo-header">
      <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称按回车键确认" />
      {/* 因为操作的dom与绑定的dom是一个元素 所以不用写ref 用event就可以获得 */}
  </div>
    )
  }
}
