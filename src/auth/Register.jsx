import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'



const Register = () => {
    const errorMessages = {
        "auth/invalid-credential": "Invalid email or password. Please try again.",
        "auth/invalid-email": "Invalid email or password. Please try again.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password.",
        "auth/missing-password" : "Incorrect password.",
        "auth/network-request-failed": "Network error. Check your connection.",
        "auth/too-many-requests": "Too many failed attempts. Try again later.",
    };
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const [error,setError] = useState('')

    const handleSubmit = async (e)=>{
       
        e.preventDefault()

        try {
           await createUserWithEmailAndPassword(auth, email, password);
           navigate("/");
        } 
        catch (err) {
            setError(errorMessages[err.code])

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
                <label htmlFor=""style={{fontSize : '16px'}}>Name</label>
                <input type="text" className='input-box'  name="" id="" />
                <label htmlFor=""style={{fontSize : '16px'}}>Email address</label>
                <input type="email" className='input-box'  value={email} onChange={e=>{setEmail(e.target.value)}}/>
                <label htmlFor=""style={{fontSize : '16px'}}>Password</label>
                <input type="password" className='input-box'  name="" id="" value={password} onChange={e=>{setPassword(e.target.value)}} />
                {error ? <p style={{color:"red"}} >{error}</p>:""}
            </div>
            <div className='funsigninbtn'>
                <button className='navbar__buttons__register btn-primary'>SignUp</button>
                <button className='navbar__buttons__sign-in btn-primary-2' onClick={handleBack}>Back</button>

                
            </div>
        </form>
    </div>
  )
}

export default Register