import React,{Component} from "react"
export default class ShengMingZq extends Component{
    // 类里面不能随便写代码 能写 构造器 赋值语句 自定义方法
    // static生明的赋值语句 别的不能写了
    state={opacity:1}

    death=()=>{
      clearInterval(this.timer)
    }
    // 所有组件都是与render是兄弟关系
    // 组件挂载成功
    // 他是通过react创建的ShengMingZq组件实例对象. 调用的所以不用箭头函数
  componentDidMount(){ //调用的时机 组件挂载完毕时调用
    this.timer=setInterval(()=>{
                    let {opacity}=this.state;
                    opacity -= 0.1;
                    if(opacity <= 0)opacity=1
                    this.setState({opacity}) 
                },200)
  }
// 组件将要卸载的时候react通过实例 . 来调用 
// component组件 Will将要 Unmoun卸载
  componentWillUnmount(){

  }
//   react调用的时机：初始化渲染，状态更改
    render(){
//         setInterval(()=>{
//             let {opacity}=this.state;
//             opacity -= 0.1;
//             if(opacity <= 0)opacity=1
//             this.setState(opacity)
// 定时器放在render里会发生无限循环
// // 因为只要状态发生更改就会调用render 那么就会调用定时器 定时器中
// // 改了一个状态 那么就有调用了一个定时器 无限循环
//         },200)
        return(
            <div>
                <h2 style={{opacity:this.state.opacity}}>react学不会怎么办</h2>
                <button onClick={this.death}>fff</button>
            </div>
        )
    }
}