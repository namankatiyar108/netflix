import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NetBackLogo } from '../utils/Constatnts';

function Login() {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);

    }

    const handleButtonClick = () =>{
        const message = validateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        if (!isSignInForm) {
          //signup logic
          createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          )
            .then((userCredential) => {
              const user = userCredential.user;

              updateProfile(auth.currentUser, {
                displayName: name.current.value,
                //photoURL: "https://example.com/jane-q-user/profile.jpg",
              })
                .then(() => {

                  const {uid, email, displayName} = auth.currentUser;
                  dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                })
                .catch((error) => {
                  setErrorMessage(error.message);
                });

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
              // ..
            });
        } else {
          //signin logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;

            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode +"-"+ errorMessage);
            });
        }
    }


  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={NetBackLogo} />
        </div>
        <form onSubmit={(e) => e.preventDefault()} 

        className='w-4/12 p-12 absolute mx-auto my-36 right-0 left-0 text-center bg-black rounded-xl bg-opacity-80'>

            <h1 className='text-red-700 font-bold p-4 text-2xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
                <input ref={name} type='text' placeholder='Full Name' className='p-2 m-2 rounded-lg bg-slate-300 bg-opacity-30' />
            )}
            <input ref={email} type='text' placeholder='Email Address' className='p-2 m-2 rounded-lg bg-slate-300 bg-opacity-30' />
            <input ref={password} type='password' placeholder='Password' className='p-2 m-2 rounded-lg bg-slate-300 bg-opacity-30'/>

            <p className='text-red-500'>{errorMessage}</p>

            <button onClick={handleButtonClick} className='p-4 m-4 bg-red-800 font-bold text-white rounded-xl'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

            <p onClick={toggleSignInForm} className='py-4 text-white cursor-pointer'>{isSignInForm ? "New to Netflix ? Sign Up" : "Already user ? Sign In"}</p>
        </form>
    </div>
  )
}

export default Login