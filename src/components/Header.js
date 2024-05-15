import React, {useEffect} from 'react'
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { NetLogo, useLogo } from '../utils/Constatnts';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {

        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unSubscribe();
  }, []);

  const handleSignout =()=>{
    signOut(auth).then(() => {

    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' 
        src={NetLogo} alt='logo'/>
        {user && <div className='flex p-2'>
          <img className='w-12 h-12' src={useLogo} alt='logo' />
          <button onClick = {handleSignout} className='flex text-red-500 p-1 h-10 mx-2 rounded-md bg-black'>SignOut</button>
        </div>
}
    </div>
  )
}

export default Header