import React,{Component} from "react"
export default class NoGet extends Component{
    state={
        username:'',
        password:''
    }
    // handleSubmit=(event)=>{
    //   event.preventDefault();
    //   const {username,password} = this.state
    // //   alert(`输入的${username} ${password}`)
    // }

    // saveFormData是高级函数 
    // 一个函数接收的参数是一个函数 该函数是高级函数
    // 一个函数的回调是一个函数 该函数是高级函数
    // 函数的柯里化：通过函数调用持续返回函数的方式，实现多次
    // 接受参数最后统一处理的函数编码形式
//     saveFormData=(dataType)=>{    
//         const {username,password} = this.state   
//         // console.log(dataType);
//         return (event)=>{
//             // console.log(dataType,event.target.value);
//             this.setState({[dataType]:event.target.value})
//             console.log( {[dataType]:event.target.value});
//         }
//     }
  
//   render(){
//     return(
//         // 受控组件
//         <form action="#" onSubmit={this.handleSubmit}>
//             <input  onChange={this.saveFormData("username")} type="text" name="username" />
//             <input  onChange={this.saveFormData("password")} type="password" name="passwoed" />
//             <button>登录</button>
//         </form>

        // 非受控组件
        // <form action="#" onSubmit={this.handleSubmit}>
        //     <input ref={c=>{this.username=c}} type="text" name="username" />
        //     <input ref={c=>{this.password=c}} type="password" name="passwoed" />
        //     <button>登录</button>
        // </form>
    // )
//   }
// // 不用函数柯里化写
// saveDate=(dataType,event)=>{
//  this.setState({[dataType]:event.target.value})
// }
// handleSubmit=()=>{
//     const {username,password} = this.state
//     alert(`y:${username} m:${password}`)
// }
// render(){
//     return(
//         <form onSubmit={this.handleSubmit}>
//          <input onChange={(event)=>{this.saveDate("username",event)}} type="text" name="username"/>
//          <input onChange={(event)=>{this.saveDate("password",event)}} type="text" name="password"/>
//          <button>de</button>

//         </form>
//     )
// }
saveData=(dataType,event)=>{
  this.setState({[dataType]:event.target.value})
}
handle=(event)=>{
event.preventDefault();
const {username,password} = this.state
alert(`${username},${password}`)
}
render(){
    return(
        <form onSubmit={this.handle}>
     <input onChange={(event)=>{this.saveData("username",event)}} name="username" type="text" />
     <input onChange={(event)=>{this.saveData("password",event)}} name="password" type="text" />
       <button>de</button>
        </form>
    )
}
}