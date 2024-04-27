import { useContext, useState } from "react";
import "../login/login.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import LoginWithGoogleBtn from '../path/to/login-with-google-btn';


const Login = ()=> {

    const [credentials,setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const {user, loading, error, dispatch} = useContext(AuthContext);
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async(e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res =  await axios.post("/auth/login",credentials)
            dispatch({type:"LOGIN_SUCCESS",payload : res.data } )
            navigate("/")
        } catch (err) {
            dispatch({type:"LOGIN_FAILURE", payload: err.reponse.data})            
        }
    }

    const loginwithgoogle = ()=>{
        window.open("http://localhost:3300/auth/google/callback","_self")
        dispatch()  
        navigate()
    }

    return (     
        <div className="login">
            <h1 style = {{textAlign:"center"}}>Login</h1>
            <div className="form">
                <form className='login-form'>
                    <input type="text" name="" id="username" onChange={handleChange} placeholder = "username"/>
                    <input type="password" name="" id="password" onChange={handleChange} placeholder = "password"/>
                    <button disabled={loading} onClick={handleClick}>Login</button>
                    {error && <span>{error.message}</span>}
                    <p className = 'message'>Not Registered? <a href="/register">Create an Account</a></p>
                </form>
                <button className='login-with-google-btn' onClick={loginwithgoogle}>
                    SignIn with Google
                </button>
            </div>
        </div>
    )
};

export default Login;