import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const SignIn = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () => {
        fetch("/signup", {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"",
                password:"",
                email:""
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    M.toast({html: data.error})
                }
            })
    }



    return ( 
        <div className="mycard">
            <div className="card auth-card input-field">
            <h2 className="login-title">Codagram</h2>
            <input 
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input 
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
            type="text"
            placeholder="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #1e88e5 blue darken-1"
            onClick={()=>PostData()}
            >
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