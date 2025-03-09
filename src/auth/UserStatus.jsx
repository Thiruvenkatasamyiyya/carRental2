import { onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase'

const UserStatus = () => {
    const [active,setActive] = useState('null')

    const statusData = async()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setActive(true)
            }
            else{
                setActive(false)
            }
        })
    }
    statusData()
  return (
    {active}
  )
}

export default UserStatus