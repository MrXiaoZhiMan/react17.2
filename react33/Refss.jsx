import React,{Component} from "react";
export default class Refss extends Component{
  state = {isHot:false}
    showData=()=>{
        const {input1} = this;
        console.log(input1.value);
    }
//   showData2=()=>{
//     const {input2} = this;
//     console.log(input2.value);
//   }
changeWeather=()=>{
  const {isHot} = this.state;
  this.setState({isHot:!isHot})
  console.log(this);
}
saveInput=(c)=>{
  this.input1=c;
  console.log("@",c,this);
}
  render(){
    const {isHot} = this.state;
    return(
        <div>
          <h2>今天{isHot ? "凉爽":"炎热"}</h2>
          {/* ref被调用了几次 在页面渲染的时候被调用了一次生成函数 在更改
          状态时还会调用他 就会生成一个新的函数 旧的函数就会被释放 
          新的函数因为不确定之前得函数都做了什么动作 所以进行了一个清空的动作
          所以改变状态时会调用两次 这是回到函数形式的ref */}
            {/* <input ref={(currentNode=>{this.input1=currentNode})} type="text" placeholder="dian" />; */}
       
        <button onClick={this.showData}>ddd</button>
        {/* 这是将函数放在了市里的自身 */}
         <input ref={this.saveInput} type="text"  />
        <button onClick={this.changeWeather}>点我切换天气</button>
        </div>
    )
  }
}
