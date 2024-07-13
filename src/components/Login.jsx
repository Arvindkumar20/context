import { useContext, useState } from "react"
import {userContext} from "../context/userContext"

export default function Login(){
    const [userEmail,setUserEmail]=useState('')
    const [password,setPassword]=useState('')
    const {setUser}=useContext(userContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
setUser({userEmail,password})
    }
  return (
    <>
      <form >
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input 
            value={userEmail}
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="
            emailHelp" 
            placeholder="Enter email"
            onChange={(e)=>{setUserEmail(e.target.value)}} 
            />
            <small id="emailHelp" className="form-text text-muted">Well never share your
                email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                    value={password}
                    type="password"
                     className="form-control" id="exampleInputPassword1"
                      placeholder=" Password"
            onChange={(e)=>{setPassword(e.target.value)}} 

                    />
                    </div>
               
                        <button 
                        type="submit"
                         className="btn btn-primary"
                         onClick={handleSubmit}
                         >Submit</button>
                        </form>
                        </>
                        )}
                        