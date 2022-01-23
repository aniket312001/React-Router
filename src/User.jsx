import React from 'react'
import { useLocation, useParams,useNavigate } from 'react-router-dom';

const User = ()=>{

    let { id } = useParams();
    let loc = useLocation()
    console.log(loc)


    const navigate = useNavigate();

    

    return (
        <>
            <h1>User Page {id} {loc.pathname} </h1>

            <button onClick={()=>{navigate('/about');}}>About</button>
        </>
    )
}

export default User