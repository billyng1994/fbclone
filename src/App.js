import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PersonalPage from './pages/PersonalPage';
import Header from "./components/Header"
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // check if the user has logged in by reading cookie value
  const loginStatus = document.cookie.split('; ').find(row => row.startsWith('login='))?.split('=')[1]
  const username = document.cookie.split('; ').find(row => row.startsWith('username='))?.split('=')[1]
  const uid = document.cookie.split('; ').find(row => row.startsWith('uid='))?.split('=')[1]

  const [memberData, setMemberData] = useState(false)

  if(uid && !memberData) {
    try{
      axios
      .get("http://localhost:9999/memberRegistration/" + uid)
      .then(res => { 
        setMemberData(res.data)
      })
      .catch(err => console.log(err))
    } catch(err){
      console.log(err)
    }
  }

  const [windsize, setWindsize] = useState({width: window.innerWidth, height: window.screen.height*2})
  window.onresize = () => {
    if(window.innerWidth !== windsize.width || window.screen.height*2 !== windsize.height){
      setWindsize({width: window.innerWidth, height: window.screen.height*2})
    }
  }

  const [popupStyle, setPopupStyle] = useState()
  const [popupBgStyle, setPopupBgStyle] = useState()
  const [popupIsShown, setPopupIsShown] = useState(false)

  useEffect(() => {
    if(popupIsShown){
      setPopupStyle({backgroundColor: "white", margin: "10px", borderRadius: "10px", width:"400px", zIndex:"100", position:"fixed", display:"block", padding:"10px"})
      setPopupBgStyle({width:windsize.width, height:windsize.height, position:"absolute", zIndex:"99", display:"flex", paddingTop : "17vh", justifyContent: "center", backgroundColor:"rgba(255,255,255,0.8)"})
      document.querySelector("body").style.overflowY = "hidden"
  }
  else {  
      setPopupStyle({backgroundColor: "white", margin: "10px", borderRadius: "10px", width:"400px", zIndex:"100", display:"none"})
      setPopupBgStyle({width:windsize.width, height:windsize.height, position:"absolute", zIndex:"99", display:"none"})
      document.querySelector("body").style.overflowY = ""
  }
  }, [popupIsShown,windsize])

  const popupSetting = {popupStyle: popupStyle, popupBgStyle: popupBgStyle, popupIsShown: popupIsShown, setPopupIsShown: setPopupIsShown}

  return (
    <Router>
      <div style={{backgroundColor:"rgba(241,242,246,255)", minHeight:"967px"}}>
      <Routes>
        <Route path="/" element={<LoginPage loginStatus={loginStatus} />} />        
        <Route path="home" element={<><Header username={username} memberData={memberData}/> <HomePage loginStatus={loginStatus} popupSetting={popupSetting} uid={uid} memberData={memberData} /></>}/>
        <Route path="personal" element={<><Header username={username} memberData={memberData}/><PersonalPage loginStatus={loginStatus} popupSetting={popupSetting} uid={uid} memberData={memberData}/></>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
