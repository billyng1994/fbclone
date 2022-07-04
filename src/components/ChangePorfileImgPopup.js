import {FaTimes} from 'react-icons/fa'
import axios, { AxiosResponse } from 'axios'
import { useForm } from "react-hook-form";

const ChangePorfileImgPopup = ({popupSetting, uid, setPopupid}) => {
    const {register, handleSubmit, setError, formState: { errors }, clearErrors, reset} = useForm()

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append("profileImg", data.profileImg[0])        

        axios
        .patch("http://localhost:9999/memberRegistration/profileImg/" + uid, formData, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
        .then( (res) => {
            window.location.href = "http://localhost:3000/home"
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const onError = (errors, e) => console.log(errors, e);

  return (
    <>
        <div style={popupSetting.popupBgStyle}>
            <div className="card text-center" style={popupSetting.popupStyle}>                
                <div className="position-absolute px-1 py-0 m-0" style={{right:"0"}}><FaTimes onClick={() => {popupSetting.setPopupIsShown(false); setPopupid(1)}} size={25} style={{cursor:"pointer"}} /></div>
                <div><b>Change profile image</b></div>
                <div className='card-body'>
                    <form className='d-flex flex-column align-items-center justify-content-center' method="POST" onSubmit = {handleSubmit(onSubmit, onError)}>
                        <input type="file" name="profileImg" {...register("profileImg")}/>
                        <button className='btn btn-warning mt-4' type='submit' style={{color: "white", width:"200px", height:"36px"}}><b>Update</b></button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChangePorfileImgPopup