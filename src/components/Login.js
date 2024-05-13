import React, { useState } from 'react'
import Header from './Header'

function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);

    }


  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        </div>
        <form className='w-4/12 p-12 absolute mx-auto my-36 right-0 left-0 text-center bg-black rounded-xl bg-opacity-80'>

            <h1 className='text-red-700 font-bold p-4 text-2xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
                <input type='text' placeholder='Full Name' className='p-2 m-2 rounded-lg bg-slate-300 bg-opacity-30' />
            )}
            <input type='text' placeholder='Email Address' className='p-2 m-2 rounded-lg bg-slate-300 bg-opacity-30' />
            <input type='password' placeholder='Password' className='p-2 m-2 rounded-lg bg-slate-300 bg-opacity-30'/>

            <button className='p-4 m-4 bg-red-800 font-bold text-white rounded-xl'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p onClick={toggleSignInForm} className='py-4 text-white cursor-pointer'>{isSignInForm ? "New to Netflix ? Sign Up" : "Already user ? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login