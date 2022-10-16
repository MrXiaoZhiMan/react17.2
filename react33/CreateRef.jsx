import React,{Component} from "react";
export default class CreateRef extends Component{
      // 关于React.createRef() 本身是个函数 调用后可以返回一个容器
    // 该容器可以存储被ref所标识存储的节点
    // 容器里面是 current:节点对象 用这个节点对象的时候
    // 就需要 this.myRef.current 才能获取到ref标识的这个节点
//    该容器是专人专用的
    myRef=React.createRef()
    myRef2=React.createRef()
    showData=()=>{
  console.log(this.myRef.current.value);
    }
    showData2=()=>{
   console.log(this.myRef2.current.value);
    }

    
render(){
  
    return(
        <div>
            <input ref={this.myRef} type="text" placeholder="hhhh" />
            <button onClick={this.showData}>点我提示数据</button>
            {/* <input onBlur={this.showData2} type="text" /> */}
       <input ref={this.myRef2} onBlur={this.showData2} type="text" />
        </div>
    )
}
}