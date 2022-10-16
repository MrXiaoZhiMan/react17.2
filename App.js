// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React,{Component} from 'react';
// import HelloWord from './react案例1/hello/HelloWord';
// import Welcome  from './react案例1/Welcome/Welcome';
// import Refss from "./react33/Refss";
// import CreateRef from "./react33/CreateRef"
// import ReactEventProcess from "./react33/ReactEventProcess";
// import GetTextareaData from "./react33/GetTextareaData";
// import NoGet from "./react33/NoGet"
import ShengMingZq from "./react33/ShengMingZq"
export default class App extends Component{
render(){
  return (
    <div>
    {/* <HelloWord/>
    <Welcome />
    <Refss/> */}
    {/* <CreateRef /> */}
    {/* <ReactEventProcess /> */}
    {/* <GetTextareaData /> */}
    {/* <NoGet /> */}
    <ShengMingZq />
    </div>
  )
}
}