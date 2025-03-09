import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'



const Register = () => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const handleSubmit = async (e)=>{
       
        e.preventDefault()
        console.log(email,password);
        try {
           await createUserWithEmailAndPassword(auth, email, password);
           navigate("/");
        } 
        catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate()

    const handleBack = ()=>{
    navigate("/")
}
  return (
    <div className='funsignin'>
        <h1>Register and Explore</h1>
        <form onSubmit={handleSubmit}>
            <div className='funsign-wrapper'>
                <label htmlFor="">Name</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Email address</label>
                <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" value={password} onChange={e=>{setPassword(e.target.value)}} />
            </div>
            <div className='funsigninbtn'>
                <button>SignUp</button>
                <button onClick={handleBack}>Back</button>

                
            </div>
        </form>
    </div>
  )
}

export default Register