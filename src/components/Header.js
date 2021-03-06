import {Link} from 'react-router-dom'

const handleLogout = () => {
  // Clear cookie
  document.cookie = "login=; Max-Age=-99999999;"
  document.cookie = "username=; Max-Age=-99999999;"
  document.cookie = "uid=; Max-Age=-99999999";
  console.log(document.cookie)
  window.location.href = "http://localhost:3000"
}

const Header = ({username, memberData}) => {
  return (
    <>
      <nav className="shadow-sm" style={{backgroundColor: "white", position:"fixed", width:"100%", height:"56px", zIndex:"4"}} >
        <div className="container-fluid d-flex align-items-center">
          <div style={{zIndex:"4", padding:"6px"}}>
            <Link className="navbar-brand " to="/home">
                <svg viewBox="0 0 36 36" fill="url(#jsc_s_2n)" height="40" width="40">
                  <defs>
                    <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2n">
                      <stop offset="0%" stop-color="#0062E0"></stop>
                      <stop offset="100%" stop-color="#19AFFF"></stop>
                    </linearGradient>
                  </defs>
                    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                    <path d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" style={{fill: "white"}}></path>
                </svg>
            </Link>
          </div>
          <div className="d-flex align-items-center" style={{maxWidth: "320px", minWidth: "90px", position:"fixed", zIndex:"3", paddingLeft:"50px"}}>
            <label className="w-100 d-flex bg-light align-items-center" style={{borderRadius: "28px", height: "40px", borderColor: "transparent", paddingLeft: "8px"}} >
              <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh gl3lb2sf hhz5lgdu">
                <g fill-rule="evenodd" transform="translate(-448 -544)">
                  <g fill-rule="nonzero">
                    <path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path>
                    <path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path>
                    <path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path>
                    <path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path>
                  </g>
                </g>
              </svg>
              <input className="w-100 d-md-block d-none" type="text" placeholder="Search Facebook" 
              style={{border:"none", padding:"8px", backgroundColor:"transparent"}}/>
            </label>

          </div>

          
          <div className="d-none d-xl-flex justify-content-center w-100" id="navbarNavAltMarkup" style={{position: "fixed", zIndex:"1"}}>
            <ul className="d-flex justify-content-center"  style={{listStyleType: "none", flexGrow: "1", margin: "auto"}}>
              <li style={{ flexGrow: "1", maxWidth: "129.6px"}}>
                <Link to="/home">
                  <svg viewBox="0 0 28 28" height="28" width="28" style={{fill:"rgba(var(--bs-primary-rgb)"}}>
                    <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>            
                  </svg>
                </Link>
              </li>
              <li style={{ flexGrow: "1", maxWidth: "129.6px"}}>
                <svg viewBox="0 0 28 28" height="28" width="28" style={{fill:"rgba(var(--bs-primary-rgb)"}}>
                  <path d="M5.75 4A.75.75 0 015 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-.75.75zm.75 11.251a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 28a.75.75 0 01-.75-.75v-6.5a.75.75 0 011.5 0v6.5a.75.75 0 01-.75.75zm15.737-16.234L23.214 6.5H9.5v11h13.715l-1.728-5.266a.749.749 0 010-.468zM4.75 5h19.5a.75.75 0 01.713.986l-1.974 6.006 1.974 6.023a.75.75 0 01-.713.985H4.75a.75.75 0 010-1.502L8 17.5v-11H4.75a.749.749 0 110-1.5z"></path>
                </svg>
              </li>
              <li style={{ flexGrow: "1", maxWidth: "129.6px"}}>
                <svg viewBox="0 0 28 28" fill="currentColor" height="28" width="28" style={{fill:"rgba(var(--bs-primary-rgb)"}}>
                  <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
                </svg>
              </li>
              <li style={{ flexGrow: "1", maxWidth: "129.6px"}}>
                <svg viewBox="0 0 28 28" fill="currentColor" height="28" width="28" style={{fill:"rgba(var(--bs-primary-rgb)"}}>
                  <path d="M17.5 23.75 21.75 23.75C22.164 23.75 22.5 23.414 22.5 23L22.5 14 22.531 14C22.364 13.917 22.206 13.815 22.061 13.694L21.66 13.359C21.567 13.283 21.433 13.283 21.34 13.36L21.176 13.497C20.591 13.983 19.855 14.25 19.095 14.25L18.869 14.25C18.114 14.25 17.382 13.987 16.8 13.506L16.616 13.354C16.523 13.278 16.39 13.278 16.298 13.354L16.113 13.507C15.53 13.987 14.798 14.25 14.044 14.25L13.907 14.25C13.162 14.25 12.439 13.994 11.861 13.525L11.645 13.35C11.552 13.275 11.419 13.276 11.328 13.352L11.155 13.497C10.57 13.984 9.834 14.25 9.074 14.25L8.896 14.25C8.143 14.25 7.414 13.989 6.832 13.511L6.638 13.351C6.545 13.275 6.413 13.275 6.32 13.351L5.849 13.739C5.726 13.84 5.592 13.928 5.452 14L5.5 14 5.5 23C5.5 23.414 5.836 23.75 6.25 23.75L10.5 23.75 10.5 17.5C10.5 16.81 11.06 16.25 11.75 16.25L16.25 16.25C16.94 16.25 17.5 16.81 17.5 17.5L17.5 23.75ZM3.673 8.75 24.327 8.75C24.3 8.66 24.271 8.571 24.238 8.483L23.087 5.355C22.823 4.688 22.178 4.25 21.461 4.25L6.54 4.25C5.822 4.25 5.177 4.688 4.919 5.338L3.762 8.483C3.729 8.571 3.7 8.66 3.673 8.75ZM24.5 10.25 3.5 10.25 3.5 12C3.5 12.414 3.836 12.75 4.25 12.75L4.421 12.75C4.595 12.75 4.763 12.69 4.897 12.58L5.368 12.193C6.013 11.662 6.945 11.662 7.59 12.193L7.784 12.352C8.097 12.609 8.49 12.75 8.896 12.75L9.074 12.75C9.483 12.75 9.88 12.607 10.194 12.345L10.368 12.2C11.01 11.665 11.941 11.659 12.589 12.185L12.805 12.359C13.117 12.612 13.506 12.75 13.907 12.75L14.044 12.75C14.45 12.75 14.844 12.608 15.158 12.35L15.343 12.197C15.989 11.663 16.924 11.663 17.571 12.197L17.755 12.35C18.068 12.608 18.462 12.75 18.869 12.75L19.095 12.75C19.504 12.75 19.901 12.606 20.216 12.344L20.38 12.208C21.028 11.666 21.972 11.666 22.62 12.207L23.022 12.542C23.183 12.676 23.387 12.75 23.598 12.75 24.097 12.75 24.5 12.347 24.5 11.85L24.5 10.25ZM24 14.217 24 23C24 24.243 22.993 25.25 21.75 25.25L6.25 25.25C5.007 25.25 4 24.243 4 23L4 14.236C2.875 14.112 2 13.158 2 12L2 9.951C2 9.272 2.12 8.6 2.354 7.964L3.518 4.802C4.01 3.563 5.207 2.75 6.54 2.75L21.461 2.75C22.793 2.75 23.99 3.563 24.488 4.819L25.646 7.964C25.88 8.6 26 9.272 26 9.951L26 11.85C26 13.039 25.135 14.026 24 14.217ZM16 23.75 16 17.75 12 17.75 12 23.75 16 23.75Z"></path>
                </svg>
              </li>
            </ul>
          </div>

          <div className="d-md-none" style={{paddingLeft: "45px", zIndex:"4"}}>
            <button
            type="button" 
            data-bs-toggle="collapse"
            href="collapse"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
            style={{borderColor: "transparent"}}
            >
              <span>
                <svg viewBox="0 0 28 28" fill="currentColor" height="28" width="28">
                  <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
                </svg>
              </span>
            </button>
          </div>

          <div className="d-flex" style={{position:"fixed", zIndex:"2", right:"0"}}>
            <div className="bg-light d-flex justify-content-center align-items-center mx-1" style={{height:"40px", width:"40px", borderRadius: "20px", overflow:"hidden"}}>
              <Link to="/personal">
                {memberData && <img src={memberData.profileImg} alt="profileImg" style={{width:"100%"}}/>}
              </Link>
            </div>      
            <div className="bg-light d-sm-flex d-none justify-content-center align-items-center mx-1 " style={{height:"40px", width:"40px", borderRadius: "20px"}}>
              <svg fill="currentColor" viewBox="0 0 44 44" width="1em" height="1em">
                  <circle cx="7" cy="7" r="6"></circle>
                  <circle cx="22" cy="7" r="6"></circle>
                  <circle cx="37" cy="7" r="6"></circle>
                  <circle cx="7" cy="22" r="6"></circle>
                  <circle cx="22" cy="22" r="6"></circle>
                  <circle cx="37" cy="22" r="6"></circle>
                  <circle cx="7" cy="37" r="6"></circle>
                  <circle cx="22" cy="37" r="6"></circle>
                  <circle cx="37" cy="37" r="6"></circle>
                </svg>
            </div>
            <div className="bg-light d-sm-flex d-none justify-content-center align-items-center mx-1" style={{height:"40px", width:"40px", borderRadius: "20px"}}>
              <svg viewBox="0 0 28 28" alt="" fill="currentColor" height="20" width="20">
                <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
              </svg>
            </div>
            <div className="bg-light d-sm-flex d-none justify-content-center align-items-center mx-1" style={{height:"40px", width:"40px", borderRadius: "20px"}}>
              <svg viewBox="0 0 28 28" alt="" fill="currentColor" height="20" width="20">
                <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
              </svg>
            </div>
            <div className="dropdown">
              <div className="bg-light d-flex justify-content-center align-items-center mx-1" style={{height:"40px", width:"40px", borderRadius: "20px"}}
                id="settingDropdown" data-bs-toggle="dropdown" aria-expanded="false"
              >
                <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em">
                  <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
                </svg>
              </div>              
              <ul class="dropdown-menu" aria-labelledby="settingDropdown">
                <li>
                  <div className='d-flex align-items-center dropdown-item'>
                    <Link to="/personal" style={{textDecoration: "none", color:"black"}}>{username}</Link>
                  </div>
                </li>
                <li><a class="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header