import { useState, useEffect } from "react"
import NewsFeed from "../components/NewsFeed"
import CreatePostPopup from "../components/CreatePostPopup"
import CreatePost from "../components/CreatePost"
import axios, { AxiosResponse } from 'axios'

const HomePage = ({loginStatus, popupSetting, uid, memberData}) => {
  const [postData, setPostData] = useState([])
  
  useEffect(()=>{
      axios
      .get("http://localhost:9999/posts/newsfeed/" + uid)
      .then((res) => {  
          setPostData(res.data)   
      })
      .catch(err => {
          console.log(err)
      })
  }, [])

  if( loginStatus === "success")
  return (
    <>
      <CreatePostPopup popupSetting={popupSetting} memberData={memberData} />
      <div className="d-flex row" style={{maxWidth:"1464px", margin:"auto", paddingTop:"56px", zIndex:"1"}}>
        <div className="col-12 col-xl d-none d-xl-block collapse collapse-horizontal" id="collapse" style={{height:"100%", width:"960px", paddingTop:"10px"}}>
          <ul className="list-group">
            <li className="list-group-item">Page</li>
            <li className="list-group-item">Group</li>
            <li className="list-group-item">Video</li>
            <li className="list-group-item">Event</li>
            <li className="list-group-item">Find Friend</li>
          </ul>
        </div>

        <div className="newsFeed col-md-8 col-xl-6 col-12 "> 
          <CreatePost popupIsShown={popupSetting.popupIsShown} setPopupIsShown={popupSetting.setPopupIsShown} memberData={memberData} />
          <NewsFeed postData={postData}/>
        </div>

        <div className="rightMenu col-md d-none d-md-block">
        <h4 className="p-2">Page you manage</h4>
          <div className="list-group">
            <div className="list-group-item">Page 1</div>
            <div className="list-group-item">Page 2</div>
            <div className="list-group-item">Page 3</div>
          </div>
          <h4 className="p-2">Contact</h4>
          <div className="list-group">
            <div className="list-group-item">John Doe</div>
            <div className="list-group-item">John Doe</div>
            <div className="list-group-item">John Doe</div>
            <div className="list-group-item">John Doe</div>
            <div className="list-group-item">John Doe</div>
            <div className="list-group-item">John Doe</div>
          </div>
        </div>
      </div>
    </>
  )
  else 
    window.location.href = "http://localhost:3000"
}

export default HomePage