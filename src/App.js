import React,{useState} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');


  const [alert,setAlert] = useState(null);
  const showAlert=(message,typ)=>{
    setAlert({
      msg:message,
      type:typ
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (

<>
{/* <BrowserRouter> */}
    
  <Navbar title="TextUtils" mode={mode} setMode={setMode}/>
  <Alert alert={alert}/>
  {/* <Routes> */}
      {/* <Route exact path="/about" element={<About mode={mode}/>} ></Route> */}
      {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}></Route> */}
      <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>
  {/* </Routes> */}

{/* </BrowserRouter> */}
</>
  );
}

export default App;
