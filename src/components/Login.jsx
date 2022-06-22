import React, { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';


function Login() {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => 
  {
    console.log(localStorage.getItem('user-info'));
    if (localStorage.getItem('user-info')) {
        navigate('/Homepage')
    }
  },[])
  async function login()
  {
     let item={username:email,password:password};
     let result= await fetch("https://reqres.in/api/login",{
        method: 'POST' ,
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(item)

     });
     if(result.status===200){
       result = await result.json();
       localStorage.setItem("user-info",JSON.stringify(result))
       navigate("/Homepage")
     }else{
      alert("Failed to login");
     }
  }
  return (
    <div>
        <h1 className="col-sm-6 offset-sm-3">Login Page</h1>
        <br />
        <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="email" 
            onChange={(e)=>setEmail(e.target.value)}
             className="form-control"/>
            <br />
            <input type="password" placeholder="password"
            onChange={(e)=>setPassword(e.target.value )} className="form-control" />
            <br />
            <button onClick={login} className="btn btn-primary">Login</button>
        </div>

    </div>
  )

  
  
  
}

export default Login;