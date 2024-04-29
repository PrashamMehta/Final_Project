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

        console.log("Registration successful.");
    };

    return (
        <div className="login">
            <div>
            <h1 style={{ textAlign: "center" }}>Register</h1></div>
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