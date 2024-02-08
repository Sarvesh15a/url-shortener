import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { signInSuccess , signInStart, signInFailure } from '../redux/user/userSlice';
import {useDispatch,useSelector} from 'react-redux'


const Signin = () => {
    const [formData, setFormData]=useState({})
    const {loading, error:errorMessage}=useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handalChange=(e)=>{
      setFormData({...formData,[e.target.id]:e.target.value.trim()})
    }
    const handleSubmit=async (e)=>{
      e.preventDefault();
      // Error handling
    if( !formData.email || !formData.password ){
       return dispatch(signInFailure('Plese fill out all details'))
    }

      try{
          dispatch(signInStart())
          const res=await fetch("/api/auth/signin",{
              method: "POST",
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(formData)
          })
          const data=await res.json();
          if(data.success===false){
              dispatch(signInFailure(data.message))
          }
          
          if(res.ok){
            dispatch(signInSuccess(data))
            navigate("/dashboard")
          }
      }
      catch(error){
        dispatch(signInFailure(error.message))
      }
    }

  return (
    <div className='min-h-sreeen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row
      md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <div className=' font-bold dark:text-white text-4xl' >

          <span className='px-2 py-1 bg-gradient-to-r from-blue-500
          via-purple-600 to bg-pink-500 rounded-lg text-white' >URL</span>
          Shortener
        </div>
        <p className='text-sm mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima laborum in voluptate saepe tempora recusandae ea debitis!</p>

      </div>
        {/* Right side  */}
        <div className="flex-1">

            <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
             
              <div>
                <Label value="Your email"/>
                <TextInput type='email' placeholder='example@gmail.com' id='email'  onChange={handalChange}/>
              </div>

              <div>
                <Label value="Your Password"/>
                <TextInput type='password' placeholder='Password' id='password'  onChange={handalChange}/>
              </div>

              <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                {
                  loading ?(
                    <>
                    <Spinner size='sm'/>
                    <span className='pl-3'>Loading...</span></>
                  ):'Sign in'
                }
              </Button>
             
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Don't have an account?</span>
              <Link to='/' className='text-blue-500'>Sign up</Link>
            </div>   
            <div>
                <Alert className='mb-5' color='failure'>
                  {errorMessage}
                </Alert>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signin