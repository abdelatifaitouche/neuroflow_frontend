import { getProfile } from '@/services/profileService'
import React, { useEffect, useState } from 'react'

function ProfileHeader() {

    const [user , setUser] = useState(null)

    const fetchUser = async () => {
        const userData = await getProfile() ; 
        setUser(userData)
    }

    useEffect(()=>{
        fetchUser();
    } , [])


  return (
    <div className='flex items-center gap-2 p-3'>
        <div className='bg-black w-[30px] h-[30px] rounded-md'>

        </div>
        <div className='flex flex-col justify-center'>
            <h2 className='text-sm font-bold'>{user && user.username}</h2>
            <h4 className='text-xs'>Neuroflow.inc</h4>
        </div>
    </div>
  )
}

export default ProfileHeader
