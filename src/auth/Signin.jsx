import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import UserStatus from './UserStatus'



const Signin = () => {
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
  const navigate = useNavigate()

  const handleSignin = async (e)=>{
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth,email,password)
      navigate('/')

    } catch (err) {
      setError(errorMessages[err.code])
      setPassword("")
    }
    setTimeout(() => {
      setError("")
    }, 5000);
    
  }

const handleBack = ()=>{
  navigate("/")
}
const handleRegister = ()=>{
  navigate("/register")
}

// handle error


  return (
    <div className='funsignin'>
        <h1>Welcome back Cheif</h1>
        <form action="" onSubmit={handleSignin}>
        <div className='funsign-wrapper'>
        <label htmlFor="" style={{fontSize : '16px'}}>Email address</label>
        <input type="email" className='input-box' placeholder='test@gmail.com' value={email} onChange={e =>{setEmail(e.target.value)}} />
        <label htmlFor="" style={{fontSize : '16px'}}>Password</label>
        <input type="password" className='input-box' name="psw" id="" value={password} onChange={e =>{setPassword(e.target.value)}} />
        {error ? <p style={{color:"red"}} >{error}</p>:""}
        </div>
        <div className='funsigninbtn'>
          <button className='navbar__buttons__register btn-primary'>Signin</button>
          <button className='navbar__buttons__sign-in btn-primary-2' onClick={handleBack}>Back</button>
        </div>
        </form>
        <a href=""onClick={handleRegister}>Create an Account</a>
    </div>
  )
}

export default Signin