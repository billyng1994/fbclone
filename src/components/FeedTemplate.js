const FeedTemplate = ({postData}) => {
  return (
    <>
        <div className="card shadow-sm" style={{backgroundColor:"white", margin:"10px", minWeight:"320px", borderRadius:"10px"}}>
            <div className="card-body" style={{padding:"0"}}>
                <div style={{padding:"15px"}}>
                    <div className="d-flex align-items-center">
                        <div className="bg-light d-flex justify-content-center align-items-center col-2 shadow-sm" style={{height:"40px", width:"40px", borderRadius: "20px", overflow:"hidden"}}>
                            {postData && <img src={postData.postOwner.profileImg} alt="profileImg" style={{width:"100%"}}/>}
                        </div>
                        <div className="ms-3">
                            <h4>{postData.postOwner.firstName} {postData.postOwner.lastName}</h4>
                            <p><i>{new Date(postData.postDate).toDateString()}</i></p>
                        </div>
                    </div>
                    <p>{postData.postText}</p>
                </div>
                {postData.postPhotos && <img src={postData.postPhotos} class="card-img-top" alt="..."></img>}

            </div>
            {postData.link && <div className="landing card-body" style={{backgroundColor: "rgb(241, 242, 246)"}}>
                <div>{postData.postLink.link}</div>
                <div><b>{postData.postLink.linkTitle}</b></div>
                <div>{postData.postLink.linkDes}</div>
            </div>}
            <div className="feedFoot card-body" style={{backgroundColor: "white"}}>
                <div className="d-flex justify-content-end">
                <div>0 respond 0 comment</div>                
                </div>
                <hr/>
                <div className="d-flex justify-content-around">
                <div className="d-flex justify-content-center">
                    <i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style={{backgroundImage:"url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/rEjlCZ3yHnf.png')", backgroundPosition:"0 -322px", backgroundSize:"auto", width:"18px", height:"18px", backgroundRepeat: "no-repeat", display:"inline-block"}}></i>
                    <div>Like</div>
                </div> 
                <div className="d-flex justify-content-center">
                    <i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style={{backgroundImage:"url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/rEjlCZ3yHnf.png')", backgroundPosition:"0 -284px", backgroundSize:"auto", width:"18px", height:"18px", backgroundRepeat: "no-repeat", display:"inline-block"}}></i>
                    <div>Comment</div>
                </div>
                <div className="d-flex justify-content-center">
                    <i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style={{backgroundImage:"url('https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/rEjlCZ3yHnf.png')", backgroundPosition:"0 -341px", backgroundSize:"auto", width:"18px", height:"18px", backgroundRepeat: "no-repeat", display:"inline-block"}}></i>
                    <div>Comment</div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeedTemplate