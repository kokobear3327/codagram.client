import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return ( 
        <div className="mycard">
            <div className="card auth-card input-field">
            <h2 className="login-title">Codagram</h2>
            <input 
            type="text"
            placeholder="name"
            />
            <input 
            type="text"
            placeholder="email"
            />
            <input 
            type="text"
            placeholder="password"
            />
            <button className="btn waves-effect waves-light #1e88e5 blue darken-1">
                SignUp
            </button>
            <h5>
                <Link to="/signin">Already have an account?</Link>
            </h5>
    
            </div>
        </div>
     )
}

export default SignIn