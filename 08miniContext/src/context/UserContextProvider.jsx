import React from 'react'
import UserContext  from './UserContext';

const UserContextProvider = ({childern}) =>{
    const [user,setUser] = React.usesState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider