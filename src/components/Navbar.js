import React from 'react'
import PropTypes from 'prop-types'
// import {
// Link
// } from "react-router-dom";

export default function Navbar(props) {

  const toggleMode=(color,bgColor)=>{
        
    props.setMode(color);
    if(color==='light'){
    document.body.style.backgroundColor= '#fff'; 

    }else{

      document.body.style.backgroundColor= bgColor; 
     
    }
    
}
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <b>{props.title}</b>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form> */}
      <div className="btn-group mx-3" role="group" aria-label="Button group with nested dropdown">
        

        <div className="btn-group" role="group">
          <button type="button" className={`btn btn-${props.mode} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
            Choose theme
          </button>
          <ul className="dropdown-menu ps-3  " style={{color:'#ffffffd4k'}}>
          <li><div className="btn-group py-3" role="group" aria-label="Third group"><button type="button" className="btn" onClick={()=>{toggleMode("light","#fff")}} >Light</button></div></li>
          <li><div className="btn-group " role="group" aria-label="Third group"><button type="button" className="btn btn-primary" onClick={()=>{toggleMode("primary","rgb(133 133 139 / 32%)")}}>Primary</button></div></li>
            <li><div className="btn-group py-3" role="group" aria-label="Third group"><button type="button" className="btn btn-danger" onClick={()=>{toggleMode("danger","rgb(220 53 69 / 33%)")}} >Red</button></div></li>
            <li><div className="btn-group " role="group" aria-label="Third group"><button type="button" className="btn btn-warning" onClick={()=>{toggleMode("warning","rgb(255 191 0 / 49%)")}}>yellow</button></div></li>
            <li><div className="btn-group py-3" role="group" aria-label="Third group"><button type="button" className="btn btn-success" onClick={()=>{toggleMode("success","rgb(43 177 115)")}}>Green</button></div></li>
            
            <li><div className="btn-group " role="group" aria-label="Third group"><button type="button" className="btn btn-secondary" onClick={()=>{toggleMode("secondary","rgb(108 117 125 / 47%)")}}>Grey</button></div></li>
            <li><div className="btn-group py-3" role="group" aria-label="Third group"><button type="button" className="btn btn-info" onClick={()=>{toggleMode("info","rgb(13 202 240 / 30%)")}}>Cyan</button></div></li>
            <li><div className="btn-group " role="group" aria-label="Third group"><button type="button" className="btn btn-dark" onClick={()=>{toggleMode("dark","rgb(33 37 41 / 86%)")}}>Dark</button></div></li>
    </ul>
  </div>
</div>

    
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired}

Navbar.defaultProps= {title: "This is title"}