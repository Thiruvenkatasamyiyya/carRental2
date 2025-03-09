import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import UserStatus from './UserStatus'



const Signin = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignin = async (e)=>{
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth,email,password)
      navigate('/')

    } catch (error) {
      console.log(error.code);
      setPassword("")
    }
    // setEmail("")
    const {active} = <UserStatus/>
    console.log(active);
    
  }

const handleBack = ()=>{
  navigate("/")
}
const handleRegister = ()=>{
  navigate("/register")
}

  return (
    <div className='funsignin'>
        <h1>Welcome back Cheif</h1>
        <form action="" onSubmit={handleSignin}>
        <div className='funsign-wrapper'>
        <label htmlFor="">Email address</label>
        <input type="email" value={email} onChange={e =>{setEmail(e.target.value)}} />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" value={password} onChange={e =>{setPassword(e.target.value)}} />
        </div>
        <div className='funsigninbtn'>
          <button>Signin</button>
          <button onClick={handleBack}>Back</button>
        </div>
        </form>
        <a href=""onClick={handleRegister}>Create an Account</a>
    </div>
  )
}

export default Signin