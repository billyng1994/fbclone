import {FaTimes} from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useForm } from "react-hook-form";

function getCheckedStatus(id){
  const element = document.getElementById(id)
  return element.checked
}

function getValue(id){
  const element = document.getElementById(id)
  return element.value
}

const RegistrationForm = ({ onClose }) => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const day = currentDate.getDate()
  let yearOpt = [{key: "year0", year: ""}]
  for(let i = year; i > (year-117); i--){
    yearOpt.push({
      key: "year" + i,
      year: i
    })
  }

  let monthOpt = [{key:"month0", month:"", alias:""}]
  const monthEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  for(let j = 1; j <= 12; j++){
    monthOpt.push({
      key: "month" + j,
      month: j,
      alias: monthEng[j-1]
    })
  }

  const [yearSelect, setyearSelect] = useState(year)
  const [monthSelect, setmonthSelect] = useState(month)
  const [dayOpt, sertDayOpt] = useState([])

  useEffect(() => {
    let dayEnd = 31
    let dayOpt = [{key:"day0", day:""}]
    if(monthSelect === "2"){
      if(parseInt(yearSelect)%4 === 0)
        dayEnd = 29
      else 
        dayEnd = 28
    } else if(monthSelect === "4" || monthSelect === "6" || monthSelect === "9" || monthSelect === "11")
        dayEnd = 30
  
    for(let l = 1; l <= dayEnd; l++){
      dayOpt.push({
        key: "day" + l,
        day: l
      })
      
    sertDayOpt(dayOpt)
    }
  },[yearSelect, monthSelect])
 
  const [customGender, setCustomGender] = useState(false)

  const { register, handleSubmit, setError, formState: { errors }, clearErrors, reset } = useForm()

  const onSubmit = (data) =>{
    axios
    .post("http://localhost:9999/memberRegistration", data)
    .then((res) => {
      // if success, set the username to cookie
      // var d = new Date();
      // d.setTime(d.getTime() + (30*60*1000));
      // document.cookie = "username=" + res.data.firstName + " " + res.data.lastName + ";expires=" + d + ";"
      // document.cookie = "login=success;expires=" + d + ";"
      // document.cookie = "uid=" + res.data.uid + ";expires=" + d + ";"

      window.location.href = "http://localhost:3000"
      console.log(res)
    })
    .catch((e => {
      console.log(e.response.data)
      Object.keys(e.response.data.error).forEach((key) => {
        setError(key,{type: e.response.data.error[key]["type"] , message: e.response.data.error[key]["message"]})
      })
    }))
  }
  const onError = (errors, e) => console.log(errors, e);

  return (
    <>
      <div style={{position:"fixed", backgroundColor:"rgba(255, 255, 255, .8)", width: "100%", height: "100%", zIndex:"100"}}>
          <div className="card shadow flex-column" style={{backgroundColor:"white", width:"432px",margin:"auto", marginTop:"12vh" }}>
            <div className='col-12 d-flex justify-content-end' style={{position:"absolute", padding:"5px"}}><FaTimes onClick={() => {onClose(false)}} size={25} style={{cursor:"pointer"}} /></div>
            <div className='card-body' style={{padding:"18px"}}>
              <h1 class="card-title">Sign Up</h1>
              <p className='card-text'>It's quick and easy.</p>
            </div>
            <hr style={{padding:"0", margin:"0"}} />
            <div className='card-body'>
              <form className="row" action="http://localhost:9999/memberRegistration" method="POST"
              onSubmit={handleSubmit(onSubmit, onError)}
              >
                <label className="col-6">
                  <input className={!errors.firstName ? "form-control bg-light" : "form-control bg-light is-invalid"} {...register("firstName")} type="text" placeholder={"First Name"} style={{margin:"5px 0px"}}/>
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                </label>
                <label className="col-6">
                  <input className={!errors.lastName ? "form-control bg-light" : "form-control bg-light is-invalid"} {...register("lastName")} type="text" placeholder={"Last Name"} style={{margin:"5px 0px"}}/>
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                </label>
                <label className="col-12">
                  <input className={!errors.phoneNum ? "form-control bg-light" : "form-control bg-light is-invalid"} {...register("phoneNum")} type="tel" placeholder={"Mobile"} style={{margin:"5px 0px"}}/>
                  {errors.phoneNum && <div className="invalid-feedback">{errors.phoneNum.message}</div>}
                </label>
                <label className="col-12">
                  <input className={!errors.email ? "form-control bg-light" : "form-control bg-light is-invalid"} {...register("email")} type="email" placeholder={"Email"} style={{margin:"5px 0px"}}/>
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </label>
                <label className="col-12">
                  <input className={!errors.password ? "form-control bg-light" : "form-control bg-light is-invalid"} {...register("password")} type="password" placeholder={"New password"} autoComplete="true" style={{margin:"5px 0px"}}/>
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </label>

                <div>
                  <div>Date of brith</div>
                  <div className='row'>
                    <input type="hidden" {...register("bDate")}/>
                    <label className="col-4">
                      <select className={!errors.bDate ? "form-select bg-light" : "form-select bg-light is-invalid"} 
                      name="bYear" {...register("bYear")} aria-label="Year" style={{margin:"5px 0px"}} id="bYear"
                      onChange={ () => setyearSelect(getValue("bYear"))}
                      >
                        { yearOpt.map((y) => 
                          <option key={y.key} value={y.year}>{y.year}</option>
                        )}
                      </select>
                    </label>
                    <label className="col-4">
                      <select className={!errors.bDate ? "form-select bg-light" : "form-select bg-light is-invalid"} 
                      name="bMonth" {...register("bMonth")} aria-label="Month" style={{margin:"5px 0px"}} id="bMonth"
                      onChange={ () => setmonthSelect(getValue("bMonth"))}
                      >
                        { monthOpt.map((m) => 
                          <option key={m.key} value={m.month}>{m.alias}</option>
                        )}
                      </select>
                    </label>
                    <label className="col-4">
                      <select className={!errors.bDate ? "form-select bg-light" : "form-select bg-light is-invalid"}
                      name="bDay" {...register("bDay")} aria-label="Day" style={{margin:"5px 0px"}}
                      >
                        { dayOpt.map((d) => 
                          <option key={d.key} value={d.day}>{d.day}</option>
                        )}
                      </select>
                    </label>
                    {errors.bDate && <div style={{width: "100%", marginTop: "0.25rem", fontSize: ".875em", color: "#dc3545"}}>{errors.bDate.message}</div>}  
                  </div>
                </div>

                <div>
                  <div>Gender</div>
                  <div className='row'>
                    <div className='col-4'>
                      <span className='form-check d-flex justify-content-between align-items-center' 
                      style={
                        !errors.gender ? 
                        {padding: "0.375rem 0.75rem", fontSize:"1rem", fontWeight: "400", border: "1px solid #ced4da", borderRadius: "0.375rem", transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out", margin:"5px 0px"} :
                        {padding: "0.375rem 0.75rem", fontSize:"1rem", fontWeight: "400", border: "1px solid #dc3545", borderRadius: "0.375rem", transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out", margin:"5px 0px"}
                      }
                      >
                        <label htmlFor='gender-male'>Male</label>
                        <input name="gender" {...register("gender")} type="radio" id="gender-male" value="male" onChange={() => setCustomGender(getCheckedStatus("gender-custom"))} />
                      </span>
                    </div>
                    <div className='col-4'>
                      <span className='form-check d-flex justify-content-between align-items-center' 
                      style={
                        !errors.gender ? 
                        {padding: "0.375rem 0.75rem", fontSize:"1rem", fontWeight: "400", border: "1px solid #ced4da", borderRadius: "0.375rem", transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out", margin:"5px 0px"} :
                        {padding: "0.375rem 0.75rem", fontSize:"1rem", fontWeight: "400", border: "1px solid #dc3545", borderRadius: "0.375rem", transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out", margin:"5px 0px"}
                      }  
                    >
                        <label htmlFor='gender-female'>Female</label>
                        <input name="gender" {...register("gender")} type="radio" id="gender-female" value="female" onChange={() => setCustomGender(getCheckedStatus("gender-custom"))} />
                      </span>
                    </div>
                    <div className='col-4'>
                      <span className='form-check d-flex justify-content-between align-items-center' 
                      style={
                        !errors.gender ? 
                        {padding: "0.375rem 0.75rem", fontSize:"1rem", fontWeight: "400", border: "1px solid #ced4da", borderRadius: "0.375rem", transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out", margin:"5px 0px"} :
                        {padding: "0.375rem 0.75rem", fontSize:"1rem", fontWeight: "400", border: "1px solid #dc3545", borderRadius: "0.375rem", transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out", margin:"5px 0px"}
                      }  
                      >
                        <label htmlFor='gender-custom'>Custom</label>
                        <input name="gender" {...register("gender")} type="radio" id="gender-custom" value="custom" onChange={() => setCustomGender(getCheckedStatus("gender-custom"))} />
                      </span>
                    </div>
                    {errors.gender && <div style={{width: "100%", marginTop: "0.25rem", fontSize: ".875em", color: "#dc3545"}}>{errors.gender.message}</div>}
                  </div>
                </div>                

                { customGender && <div>
                  <input className="form-control" name="customGender" type="text" placeholder="Custom gender" />
                </div>}

                <div style={{fontSize:"11px", margin:"5px 0", color:"#777"}}>People who use our service may have uploaded your contact information to Facebook. Learn more.</div>
                <div style={{fontSize:"11px", margin:"5px 0", color:"#777"}}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</div>

                <div className='d-flex justify-content-center w-100' style={{paddingTop:"12px"}}>
                  <button className='btn btn-warning' type='submit' style={{color: "white", width:"200px", height:"36px"}}><b>Sign Up</b></button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default RegistrationForm