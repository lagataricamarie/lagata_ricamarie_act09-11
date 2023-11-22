import React from 'react'
import { loginStyle } from '../LoginStyleCom/loginStlyle';

const LoginForm = () => {
  return (
    <div style={Container}>
      <form style={formContainer}>
        <h2 style={{ textAlign: "center", color: "#000" }}> Login </h2>
        <div style={{ display: "flex", flexDirection: "column", width: "100%"}} >
            <input S
            type="email"
            name='email'
            placeholder='Email'
            style={{ padding: "10px", margin: "7px 0px", border: "1px solid #cacaca", outline: "none", borderRadius: "5px" }}
            required
            />
            <input 
            type="password"
            name='password'
            placeholder='Password'
            style={{ padding: "10px", margin: "7px 0px", border: "1px solid #cacaca", outline: "none",  borderRadius: "5px"}}
            required
            />

            <div style={LinkCon}>
            <a href='#' style={{ textDecoration: "none", textAlign: "center" }} > Forgot password? </a>
            </div>

            <button style={loginStyle.ButtonStyle} > Login </button>

            <div style={LinkCon}>
            <span> Don't have an account? <a style={{textDecoration: "none"}} href='#'> SignUp </a></span>
            </div>

            <div style={loginStyle.LineStyle}>
                <span style={loginStyle.Or}> Or </span>
            </div>

            <div>
                <a to="#" style={loginStyle.facebookStyle}>
                <img src="/images/facebook.png" alt="" style={ImgStyle} />
                <span> Login with Facebook </span>
                </a>
            </div>
            <div>
                <a to="#" style={loginStyle.googleStyle}>
                <img src="/images/google.png" alt="" style={ImgStyle} />
                <span> Login with Google </span>
                </a>
            </div>

        </div>
      </form>
    </div>
);
};

const Container = { display: "flex", alignItems: "center", justifyContent: "center",
                    height: "100vh", width: "100%", backgroundColor: "#4070f4",
                }

const formContainer = { backgroundColor: "white", maxWidth: "300px", padding: "20px",
                        width: "100%", borderRadius: "10px", 
                }

const LinkCon = { textAlign: "center", fontSize: " 0.870em" }

const ImgStyle = { position: "absolute", display: "flex", backgroundColor: "white",
                   alignItems: "center", justifyContent: "center", height: "20px",
                   width: "20px", borderRadius: "50%", objectFit: "cover", top: "50%",
                   left: "15px", transform: "translateY(-50%)"
                }

export default LoginForm;
