import React, { useCallback, useContext } from 'react'
import {ProfileContext} from '../App'

function Profile2() {
    const {profileName, setProfileName} = useContext(ProfileContext);

    const handleProfileName = (event) => {
        setProfileName  (event.target.value);
    }
   
      return (
    <div>
        <h1>Profile Name : {profileName}</h1>
        <input onChange={handleProfileName} value={profileName}></input>
    </div>
  )
}

export default Profile2