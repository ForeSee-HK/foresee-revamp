import * as React from 'react';
import styles from './NavProgress.module.css'
import Eye from '../assets/eye.svg'
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import MenuIcon from 'mdi-react/MenuIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import { useState } from "react";
import MainMenu from "./mainMenu";
import Sidebar from "react-sidebar";
import OurStory from "./OurStory";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";




class NavProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  render() {

  // const progressSteps = []
  // for (let i = 0; i < 6; i++) {
  //   progressSteps.push(
  //     <li
  //       key={i}
  //       className={`${props.progress >= i ? styles.active : ''} ${props.progress == i ? styles.last : ''}`}
  //     />
  //   )
  // }


  return (
    <div className={styles.NavDiv}>
      <div style={{height:"100%",width:"20%", display:'flex', alignItems:'center'}}><img src={Eye} className={styles.NavIcon} />
      <span className={styles.NavText}>ForeSee</span>
      </div>
      <div style={{display:'flex',flexDirection:'row', alignItems:'center'}}>
      <div className={styles.NavProgress}>
      <select name="language" id="language" style={{marginRight:30, fontSize:20, height:"fit-content"}}>
  <option value="english">Language</option>
  <option value="english">English</option>
  <option value="chinese">繁体中文</option>
 
</select>

        <div className={styles.container}>


        <MagnifyIcon size={30} />
    

     
      
     

          {/* <ul className={styles.progressBar}>
            {progressSteps}
          </ul> */}

        </div>
       
      </div>
      {/* refer to https://github.com/balloob/react-sidebar#readme for sidebar documentation */}
      <Sidebar
        sidebar={

          
          <div>
             
            <CloseIcon size={30} style={{backgroundColor:'transparent', position:'absolute',right:30,top:30 }} onClick={()=>{this.onSetSidebarOpen(false)}}/>
    
        <nav className={styles.sidebarLabels}>
       
          <h2 >
            <Link to="/"className={styles.sidebarButtons} >Home</Link>
          </h2>
          <h2>
            <Link to="/About" className={styles.sidebarButtons}>About ForeSee</Link>
          </h2>
          <h2>
            <Link to="/Join" className={styles.sidebarButtons}>Join ForeSee</Link>
          </h2>
          <h2>
            <Link to="/Events" className={styles.sidebarButtons}>Events</Link>
          </h2>
          <h2>
            <Link to="/Games" className={styles.sidebarButtons}>Educational Games</Link>
          </h2>
       
      </nav>

      {/* <Outlet /> */}

       
        </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        pullRight={true}
        styles={{ 
          sidebar: { background: "#B4D9F6", height:"100vh", width:"40%" }, 
        root:{ backgroundColor:"transparent",height:"fit-content",width:"fit-content",position:"static",marginRight:20, },   
        content:{display:"flex", position:"static", backgroundColor:"transparent", width:"fit-content",  transition: "right .3s ease-out, left .3s ease-out"}
      }}
        
      >
        <button style={{backgroundColor:'transparent'}} onClick={() => this.onSetSidebarOpen(true)}>
      <MenuIcon size={30} style={{backgroundColor:'transparent'}}/>
        </button>
      </Sidebar>
    </div>
    </div>
  );
}}
export default NavProgress;