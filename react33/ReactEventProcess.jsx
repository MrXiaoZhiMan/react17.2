import React,{Component} from "react";
export default class ReactEventProcess extends Component{
    // (1).通过onXxxx 属性指定事件处理函数区分大小写
    //     a. React 使用的是自定义（合成）事件 而不是使用的原生DOM事件
//            为了更好的兼容性，
//         b. React 中的事件是通过事件委托方式处理的（委托给组件最外层的
//             元素）（事件委托的原理是事件冒泡目的是为了高效）        
    // (2). 通过event.target得到发生事件的DOM元素对象    不要过度使用ref
    //       他可以在某些情况下避免写ref


    // React.createRef()是一个函数 调用他时会获得ref标记的节点
    // 但是 是current:节点 的形式 需要this.myRef.current才能获取到
    myRef=React.createRef()
    showData=()=>{
   console.log(this.myRef.current.value);
    }
    showData2=(event)=>{//event.target可以获取到发生事件的dom元素对象
   console.log(event.target.value);
    }
    render(){ 
        return(
            <div>
              <input ref={this.myRef}  type="text" />  
              <button onClick={this.showData}>dianji1</button>
             <input type="text" />
             <input onBlur={this.showData2} type="text" />
             {/* 发生事件的元素就是你要操作的元素可以省略ref */}
             </div>
        )
    }
}