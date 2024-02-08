import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';


const Signup = () => {
    const [formData, setFormData]=useState({})
    const [errorMessage, setErrorMessage]=useState(null);
    const [loading, setLoading]=useState(false)
    const navigate = useNavigate();


    const handalChange=(e)=>{
      setFormData({...formData,[e.target.id]:e.target.value.trim()})
    }
    const handleSubmit=async (e)=>{
      e.preventDefault();
      // Error handling
    if(!formData.username || !formData.email || !formData.password ){
       return setErrorMessage('Plese fill out all details')
    }

      try{
          setLoading(true)
          const res=await fetch("/api/auth/signup",{
              method: "POST",
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(formData)
          })
          const data=await res.json();
          if(data.success===false){
              return setErrorMessage(data.message)
          }
          setLoading(false)
          if(res.ok){
            navigate("/signin")
          }
      }
      catch(error){
        setErrorMessage(error.message)
        setLoading(false)
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
        <p className='text-sm mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis enim consequatur quisquam nisi beatae id, explicabo?</p>

      </div>
        {/* Right side  */}
        <div className="flex-1">

            <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
              <div>
                <Label value="Your username"/>
                <TextInput type='text' placeholder='Username' id='username'  onChange={handalChange}/>
              </div>

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
                  ):'Sign Up'
                }
              </Button>
              
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to='/signin' className='text-blue-500'>Sign in</Link>
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

export default Signup