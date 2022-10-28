import React, { Component } from 'react'
import "./index.css"
export default class Item extends Component {
  state={mouse:false}
  handleMouse=(flag)=>{
    return ()=>{
    this.setState({mouse:flag})
    }
  }

  handleCheck=(id)=>{
    return (event)=>{
      this.props.updateTodo(id,event.target.checked)
    }
  }

  handleDelete=(id)=>{
  if(window.confirm("你确定删除么？")){
    this.props.todoDelete(id)
  }
  }


  render() {
    const {id,name,done} = this.props;
    const {mouse} = this.state
    return (
      <li onMouseEnter={this.handleMouse(true)}
       onMouseLeave={this.handleMouse(false)}
       style={{backgroundColor:mouse?' #ddd' : '#fff' }}
       >
          <label>
              <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
              <span>{name} </span>
          </label>
          <button className="btn btn-danger" 
          style={{display:mouse?"block":"none"}}
          onClick={()=>{this.handleDelete(id)}}
          >删除</button>
      </li>
    )
  }
}
