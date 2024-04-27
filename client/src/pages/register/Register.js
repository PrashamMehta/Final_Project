// import "../register/register.css"

// const Register = ()=> {
//     return (
//         <div className="login">
//             <h1 style = {{textAlign:"center"}}>Register</h1>
//             <div className="form">
//                 <form className='login-form'>
//                     <input type="text" name="" id="" placeholder = "username"/>
//                     <input type="email" name="" id="" placeholder = "email"/>
//                     <input type="password" name="" id="" placeholder = "password"/>
//                     <input type="password" name="" id="" placeholder = "confirm password"/>
//                     <button>Register</button>
//                     <p className = 'message'>Already Registered? <a href="/login">Login</a></p>
//                 </form>
//                 <button className='login-with-google-btn'>
//                     Sign with Google
//                 </button>
//             </div>
//         </div>
//     )
// };

// export default Register;

// import React, { useState } from "react";
// import "../register/register.css";

// const Register = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isPasswordMatch, setIsPasswordMatch] = useState(false);

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setIsPasswordMatch(e.target.value === confirmPassword);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     setIsPasswordMatch(e.target.value === password);
//   };

//   const handleRegister = () => {
//     // Perform registration logic here if needed
//     // Only triggered when passwords match
//     if (isPasswordMatch) {
//       // Register logic
//       console.log("Passwords matched. Registering user...");
//     }
//   };

//   return (
//     <div className="login">
//       <h1 style={{ textAlign: "center" }}>Register</h1>
//       <div className="form">
//         <form className="login-form">
//           <input type="text" name="" id="" placeholder="username" />
//           <input type="email" name="" id="" placeholder="email" />
//           <input
//             type="password"
//             name=""
//             id=""
//             placeholder="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <input
//             type="password"
//             name=""
//             id=""
//             placeholder="confirm password"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//           />
//           <button onClick={handleRegister} disabled={!isPasswordMatch}>
//             Register
//           </button>
//           <p className="message">
//             Already Registered? <a href="/login">Login</a>
//           </p>
//         </form>
//         <button className="login-with-google-btn">SignUp with Google</button>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from 'react';
// import "../register/register.css";

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [isPasswordMatch, setIsPasswordMatch] = useState(false);
//     const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(false);

//     const handleUsernameChange = (e) => {
//         setUsername(e.target.value);
//         checkAllFieldsFilled();
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         checkAllFieldsFilled();
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         setIsPasswordMatch(e.target.value === confirmPassword);
//         checkAllFieldsFilled();
//     };

//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value);
//         setIsPasswordMatch(e.target.value === password);
//         checkAllFieldsFilled();
//     };

//     const checkAllFieldsFilled = () => {
//         if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
//             setAreAllFieldsFilled(true);
//         } else {
//             setAreAllFieldsFilled(false);
//         }
//     };

//     const handleRegister = () => {
//         if (isPasswordMatch && areAllFieldsFilled) {
//             // Registration logic
//             console.log("Registration successful!");
//         } else {
//             alert("Please fill all fields and ensure passwords match.");
//         }
//     };

//     return (
//         <div className="login">
//             <h1 style={{ textAlign: "center" }}>Register</h1>
//             <div className="form">
//                 <form className='login-form'>
//                     <input
//                         type="text"
//                         name=""
//                         id=""
//                         placeholder="username"
//                         value={username}
//                         onChange={handleUsernameChange}
//                     />
//                     <input
//                         type="email"
//                         name=""
//                         id=""
//                         placeholder="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                     />
//                     <input
//                         type="password"
//                         name=""
//                         id=""
//                         placeholder="password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                     />
//                     <input
//                         type="password"
//                         name=""
//                         id=""
//                         placeholder="confirm password"
//                         value={confirmPassword}
//                         onChange={handleConfirmPasswordChange}
//                     />
//                     <button onClick={handleRegister} disabled={!isPasswordMatch || !areAllFieldsFilled}>
//                         Register
//                     </button>
//                     <p className='message'>Already Registered? <a href="/login">Login</a></p>
//                 </form>
//                 <button className='login-with-google-btn'>
//                     Sign with Google
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Register;


import React, { useState } from 'react';
import "../register/register.css";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setIsPasswordMatch(e.target.value === password);
    };

    const handleRegister = () => {
        if (!username || !email || !password || !confirmPassword) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
        
        if (!isPasswordMatch) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        // Perform registration logic here
        console.log("Registration successful.");
    };

    return (
        <div className="login">
            <h1 style={{ textAlign: "center" }}>Register</h1>
            <div className="form">
                <form className='login-form'>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="confirm password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <button onClick={handleRegister}>
                        Register
                    </button>
                    <p className='message'>Already Registered? <a href="/login">Login</a></p>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </form>
                <button className='login-with-google-btn'>
                    Sign with Google
                </button>
            </div>
        </div>
    );
};

export default Register;

