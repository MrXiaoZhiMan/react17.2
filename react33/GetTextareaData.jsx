import React,{Component} from "react"
export default class GetTextareaData extends Component{
    heandlSubmit=()=>{
    const {username,password}=this
     console.log(this.username.value);
    }
    render(){
        return(
            <form action="#" onSubmit={this.heandlSubmit}>
                用户名：<input ref={c=>{this.username=c}} type="text" name="username" />
                密码：<input   ref={c=>{this.password=c}} type="password" name="password" />
                <button>登录</button>
            </form>
        )
    }
}