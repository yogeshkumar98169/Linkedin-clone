import React, { useState } from 'react'
import { LoginAPI,RegisterAPI } from '../Api/AuthAPI'
export default function LoginComponent() {
  const logIn=async()=>{
    try{
      let res= await LoginAPI(credentials.email,credentials.password);
      console.log(res)
      console.log(res.operationType)
      console.log(res.user.email)
    }
    catch(err){

    }
    
  }
  const [credentials,setCredentials]=useState({});
  return (
    <div className='flex flex-col place-items-center'>
      <h1 className='text-3xl font-bold'>Login Component</h1>
      <div className='flex flex-col w-44 gap-2 m-1 p-2'>
        <input className='p-2 rounded-lg text-white' type="email" placeholder='Email' onChange={(event)=>{
          setCredentials({...credentials,email:event.target.value})
        }}/>
        <input className='p-2 rounded-lg text-white' type="password"  placeholder='password'onChange={(event)=>{
          setCredentials({...credentials, password:event.target.value})
        }}/>
      </div>
      <button className='m-2 bg-sky-500 text-white px-5 py-1 rounded-lg' onClick={logIn}>Log in to Linkedin</button>
    </div>
  )
}
