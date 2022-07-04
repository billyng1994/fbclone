import axios from "axios"
import { useState, useEffect } from "react"
import NewsFeed from "../components/NewsFeed"
import ChangePorfileImgPopup from "../components/ChangePorfileImgPopup"
import CreatePostPopup from "../components/CreatePostPopup"
import CreatePost from "../components/CreatePost"

const PersonalPage = ({loginStatus, popupSetting, uid, memberData}) => {
    const [postData, setPostData] = useState(false)

    useEffect(() => {
        axios
        .get("http://localhost:9999/posts/personal/" + uid)
        .then((res) => {
            setPostData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [uid])

    const [popUpid, setPopupid] = useState(1)

    const renderPopup = () => {
        if(popUpid === 1)
            return (<CreatePostPopup popupSetting={popupSetting} memberData={memberData}/>)
        else
            return(<ChangePorfileImgPopup popupSetting={popupSetting} uid={uid} setPopupid={setPopupid} />)
    }



  if( loginStatus === "success")
  return (
    <>     
    { renderPopup() }    
    <div className="d-flex flex-column align-items-center" style={{paddingTop:"56px", zIndex:"1", backgroundColor:"white"}}>
        <div className="w-100" style={{maxWidth:"1250px"}}>
            <img className="w-100" src="http://localhost:9999/pageBanner/649560409192468144.jpg" alt="pageBanner" style={{marginLeft:"auto", marginRight:"auto"}}/>
        </div>
        <div className="row py-3 d-flex justify-content-center w-100" style={{maxWidth:"1250px", margin:"auto", zIndex:"1"}}>
            <div className="col-12 col-lg-2 d-flex justify-content-center">
                <div className="dropdown">
                    <div className="d-flex justify-content-center align-items-center dropdown-toggle position-absolute" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"130px", width:"130px", borderRadius: "130px", color:"transparent", cursor:"pointer"}}></div>
                    <ul className="dropdown-menu">
                        <li><div className="dropdown-item" onClick={()=> { setPopupid(0); popupSetting.setPopupIsShown(!popupSetting.popupIsShown)}} style={{cursor:"pointer"}}>Change profile image</div></li>
                    </ul>
                    <div className="bg-light text-light d-flex justify-content-center align-items-center border border-white border-5 shadow-sm" style={{height:"130px", width:"130px", borderRadius: "130px", overflow:"hidden"}}>
                        {memberData && <img src={memberData.profileImg} alt="profileImg" style={{width:"100%"}}/>}
                    </div>
                </div>
                
            </div>
            <div className="col-12 col-lg-10 d-flex justify-content-center d-lg-block">
                <div className="d-flex-row text-center text-lg-start">
                    <h2>{memberData && memberData.firstName} {memberData && memberData.lastName}</h2>
                    <div>{memberData ? memberData.friend.length : "0"} friends</div>
                </div>
            </div>
        </div>
    </div>
      <div className="d-flex row justify-content-center" style={{maxWidth:"1218px", margin:"auto", paddingTop:"56px", zIndex:"1"}}>
        <div className="row d-flex justify-content-center">  
            <div className="col-12 col-lg-5" style={{maxWidth: "680px"}}>
                <div className="card" style={{margin:"10px 0", padding:"15px"}}>
                    <h3>Friend</h3>
                    <div className="list-group">
                    {memberData.friend && memberData.friend.map(frienddata => 
                       (<div className="list-group-item" key={frienddata._id}>{frienddata.firstName} {frienddata.lastName}</div>)
                    )}
                    </div>
                </div>    
            </div>
            <div className="col-12 col-lg-7 p-0" style={{maxWidth: "680px"}}>
                <CreatePost popupIsShown={popupSetting.popupIsShown} setPopupIsShown={popupSetting.setPopupIsShown} memberData={memberData} />
                {postData && <NewsFeed postData={postData}/>}                
            </div>
        </div>
      </div>  
    </>
  )
  else window.location.href = "http://localhost:3000"
}

export default PersonalPage