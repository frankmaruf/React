import React from 'react'
import {useParams,useLocation,useHistory} from "react-router-dom"

function User({match}) {
    return (
        <React.Fragment>
            <h1>Hello User {match.params.name}</h1>
        </React.Fragment>
    )
}


function Users() {
    const {fname,lname} = useParams();
    const loaction = useLocation();
    const history = useHistory();
    console.log(history)
    return (
        <React.Fragment>
            <h3>Hello User {fname} {lname}</h3>
            <p>My location is {loaction.pathname}</p>
            {loaction.pathname===`/user/maruf` ? <button onClick={()=>(history.push("/"))}>Home Page</button>:null}
            
        </React.Fragment>
    )
}

export default User;
export {Users};
