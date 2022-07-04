import { useState, useEffect} from 'react'
import {FaTimes} from 'react-icons/fa'
import { useForm } from "react-hook-form";
import axios, { AxiosResponse } from 'axios'

const CreatePostPopup = ({popupSetting, memberData}) => {
    const { register, handleSubmit, setError, formState: { errors }, clearErrors, reset } = useForm()

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append("postImg", data.postImg[0])

        console.log(data)

        for (const key in data){
            if (key !== "postImg")
            formData.append(key, data[key])
        }

        axios
        .post("http://localhost:9999/posts/create", formData,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {      
        window.location.href = "http://localhost:3000/home"
        })
        .catch(e => {
        console.log(e.response.data)
        })
    }

    const onError = (errors, e) => console.log(errors, e);

    const [isShownUploadImg, setIsShownUploadImg] = useState(false)

  return (
    <>
        <div style={popupSetting.popupBgStyle}>
            <div className="card" style={popupSetting.popupStyle}>
                <div className="position-absolute px-1 py-0 m-0" style={{right:"0"}}><FaTimes onClick={() => {popupSetting.setPopupIsShown(false)}} size={25} style={{cursor:"pointer"}} /></div>
                <div className="container text-center p-1">
                    <div>Create Post</div>
                </div>
                <hr className="m-1" />
                <div className="card-body d-flex">
                    <div className="bg-light text-light d-flex justify-content-center align-items-center" style={{height:"40px", width:"40px", borderRadius: "20px", overflow:"hidden"}}>
                        {memberData && <img src={memberData.profileImg} alt="profileImg" style={{width:"100%"}}/>}
                    </div>    
                    <div>{document.cookie.split('; ').find(row => row.startsWith('username='))?.split('=')[1]}</div>
                </div>
                <form method="POST" action="http://localhost:9999/posts/create"
                    onSubmit={handleSubmit(onSubmit, onError)}
                >
                    <div className="form-floating">
                        <textarea className="w-100 form-control p-1" name="postText" {...register("postText")} placeholder="What is on your mind?" rows="50" cols="50" style={{resize: "none", minHeight:"250px"}}></textarea>
                        <input type="hidden" name="postOwner" {...register("postOwner")} value={document.cookie.split('; ').find(row => row.startsWith('uid='))?.split('=')[1]}/>
                        <input type="hidden" name="postDate" {...register("postDate")} value={new Date().toDateString()}/>
                        <input className={!isShownUploadImg && "d-none"} type="file" name="postImg" {...register("postImg")} />
                    </div>
                    <div className="container d-flex row m-0 p-1">
                        <div className="col-5">Add to your post</div>
                        <div className="col d-flex justify-content-end">   
                            <div onClick={()=>setIsShownUploadImg(!isShownUploadImg)} style={{cursor:"pointer"}}>
                                    <i data-visualcompletion="css-img" style={{height: "24px", width: "24px", backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/qz113kVADcE.png')", backgroundPosition: "0px -208px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                            </div>
                            <div>
                                    <i data-visualcompletion="css-img" style={{height: "24px", width: "24px", backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/qz113kVADcE.png')", backgroundPosition: "0px -183px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                            </div>
                            <div>
                                    <i data-visualcompletion="css-img" style={{height: "24px", width: "24px", backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/qz113kVADcE.png')", backgroundPosition: "0px -158px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                            </div>
                            <div>
                                    <i data-visualcompletion="css-img" style={{height: "24px", width: "24px", backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/HyeXO0sd7uk.png')", backgroundPosition: "0px -225px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                            </div>
                            <div>
                                    <i data-visualcompletion="css-img" style={{height: "24px", width: "24px", backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/IUYFS2LyvHB.png')", backgroundPosition: "0px -100px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                            </div>
                            <div>
                                    <i data-visualcompletion="css-img" style={{height: "24px", width: "24px", backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/qz113kVADcE.png')", backgroundPosition: "0px -133px", backgroundSize: "auto", backgroundRepeat: "no-repeat", display: "inline-block"}}></i>
                            </div>
                        </div>
                    </div>                
                    <button className='btn btn-primary w-100' type='submit' style={{color: "white", height:"36px"}}><b>Post</b></button>
                </form>
            </div>
        </div>
    </>
  )
}

export default CreatePostPopup