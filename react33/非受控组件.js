// 表单中所有输入类的dom 比如 input checkbox 等 现用现取的都
// 是非受控组件 点击登录时候获取值 

// 受控组件 页面中所有输入类dom 随着你的输入 就能
// 把东西维护到状态里面去 想要用的时候 就在状态里面取出来 就叫
// 受控组件

// 高级函数 ： 函数的

import React,{Component} from "react"
export default class NoGet extends Component{
    state={
        username:'',
        password:''
    }
    handleSubmit=(event)=>{
      event.preventDefault();
      const {username,password} = this.state
      alert(`输入的${username} ${password}`)
    }
    saveUsername=(event)=>{       
        this.setState({username:event.target.value})
    }
    savePassword=(event)=>{
        this.setState({password:event.target.value})
    }
  render(){
    return(
        // 受控组件
        <form action="#" onSubmit={this.handleSubmit}>
            <input  onChange={this.saveUsername} type="text" name="username" />
            <input  onChange={this.savePassword} type="password" name="passwoed" />
            <button>登录</button>
        </form>

        // 非受控组件
        // <form action="#" onSubmit={this.handleSubmit}>
        //     <input ref={c=>{this.username=c}} type="text" name="username" />
        //     <input ref={c=>{this.password=c}} type="password" name="passwoed" />
        //     <button>登录</button>
        // </form>
    )
  }
}