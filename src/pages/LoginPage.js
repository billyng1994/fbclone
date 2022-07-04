import Footer from "../components/Footer"
import { useState } from "react"
import RegistrationForm from "../components/RegistrationForm"
import axios, { AxiosResponse } from 'axios'
import { useForm } from "react-hook-form";

const LoginPage = ({loginStatus}) => {
  const [showRegform, setShowForm ] = useState(false)
  const [wrongCredentials, setCredentials] = useState(false)

  const { register, handleSubmit, setError, formState: { errors }, clearErrors, reset } = useForm()

  const onSubmit = (data, e) => {
    axios
    .post("http://localhost:9999/login", data)
    .then((res) => {
      if( res.status === 200 && res.data.login === "success"){
        // if success, set the username to cookie
        var d = new Date();
        d.setTime(d.getTime() + (30*60*1000));
        document.cookie = "username=" + res.data.username + ";expires=" + d + ";"
        document.cookie = "login=" + res.data.login + ";expires=" + d + ";"
        document.cookie = "uid=" + res.data.uid + ";expires=" + d + ";"

        window.location.href = "http://localhost:3000/home"
      }
      else
        console.log(res)
    })
    .catch((e => {
      if(e.response.data.error){
        setCredentials(e.response.data.error)
      } else 
        console.log(e.response.data)
    }))
  }

  const onError = (errors, e) => console.log(errors, e);

  if (loginStatus !== "success")
  return (
    <>
      {showRegform && <RegistrationForm onClose={setShowForm} />}
      <div className="container-fluid" >
          <div className="row" style={{paddingTop:"72px", paddingBottom:"112px", minHeight:"719px", maxWidth:"980px", margin:"auto"}}>
            <div className="container col" style={{minWidth:"320px"}}>
              <div className="d-flex flex-column d-md-none align-items-center" style={{maxWidth:"416px", margin:"auto"}}>
                  <img style={{height:"106px", margin:"-28px"}} src="/Images/logo.svg" alt="logo"/>
                  <h2 style={{fontSize:"24px", paddingTop:"16px", textAlign:"center", fontFamily:"SFProDisplay-Regular, Helvetica, Arial, sans-serif"}}>
                    Facebook helps you connect and share with the people in your life.
                  </h2>
              </div>
              <div className="d-none d-md-block" style={{padding:"112px 0px"}}>
                  <img style={{height:"106px", margin:"-28px"}} src="/Images/logo.svg" alt="logo"/>
                  <h2 style={{fontSize:"28px", paddingTop:"16px", fontFamily:"SFProDisplay-Regular, Helvetica, Arial, sans-serif"}}>
                    Facebook helps you connect and share with the people in your life.
                  </h2>
              </div>
            </div>
            <div className="container col text-center d-flex flex-column justify-content-center align-items-center" style={{paddingTop:"30px"}}>
              { wrongCredentials && <div className="card text-bg-danger shadow" style={{padding:"12px", marginBottom:"3px", width:"100%", maxWidth:"400px", minWidth:"300px"}}><h6><b>Wrong Credentials</b></h6>{wrongCredentials}</div>}
              <div className="container-fluid card shadow" style={{maxHeight:"360px", minHeight:"360px", height:"100%", maxWidth:"400px", minWidth:"300px", backgroundColor:"white", padding:"0px 16px"}}>
                <form className="d-flex flex-column" 
                onSubmit={handleSubmit(onSubmit, onError)}
                method="POST"
                >
                    <input className="form-control" name="account" {...register("account")} placeholder="Email address or phone number" type="text" style={{marginTop:"16px", fontSize:"17px", padding:"14px 16px"}} />
                    <input className="form-control" name="password" {...register("password")} placeholder="Password" type="password" style={{marginTop:"16px", fontSize:"17px", padding:"14px 16px"}} />
                    <button className="btn btn-primary" type="submit" style={{marginTop:"16px", fontSize:"20px"}}>
                      <b>Log In</b>
                    </button>
                </form>
                <a href="#" style={{marginTop:"16px", textDecoration: "none"}}>Forgotten password?</a>
                <hr/>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-warning" style={{marginTop:"10px", color:"white", fontSize:"17px", width:"230px", height:"48px"}} onClick={() => setShowForm(!showRegform)}><b>Create New Account</b></button>
                </div>
              </div>
              <div style={{paddingTop:"25px"}}><b>Create a Page</b> for a celebrity, brand or business.</div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  ) 
  else window.location.href = "http://localhost:3000/home"
    
}

export default LoginPage