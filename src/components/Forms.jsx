import React,{useState} from 'react'


const Forms = () => {
    const [name,setName] = useState();
    const [fullName, setFullName] = useState();

   const inEvent =(event) =>{
       console.log(event.target.value);
       setName(event.target.value);
   }
   const onSubmit = () => {
       setFullName(name);
   }
   return(
    <React.Fragment>
        <div>
                <h1>Hello {fullName}</h1>
                <input type='text' placeholder="Enter Your Name" value={name} onChange={inEvent}/>
                <button onClick={onSubmit}> Click Me 👍 </button>
            </div>
    </React.Fragment>
   );
}

const LoginForm =() => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [fullName,setFullName] = useState();

    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(firstName+" "+lastName);
    }
    const inptEventFirst = (event) => {
        console.log(event.target.value);
        setFirstName(event.target.value);
    };
    const inptEventLast = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value);
    }
    return(
        <React.Fragment>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                <div>
                    <h1>Hello {fullName}</h1>
                    <input type="text"
                        placeholder="Enter Your First Name"
                        onChange={inptEventFirst}
                        value={firstName}
                    />
                    <br/>
                    <input type="text"
                        placeholder="Enter Your Last Name"
                        onChange={inptEventLast}
                        value={lastName}
                    />
                    <button type="submit">Submit Me 👍</button>
                </div>
                </form>
            </div>
        </React.Fragment>
    )
}
const SimpleForm = () => {
    const [userProfile, setUserProfile] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        console.log(event.target.placeholder);

        // const value = event.target.value;
        // const name = event.target.name;
        const {value,name} = event.target;

        setUserProfile((preValue)=>{
            console.log(preValue)
            return {
                ...preValue,
                [name] : value,
            }
            // if(name === "fName"){
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // }else if(name === 'lName'){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     }
            // }else if(name === "email"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone,

            //     }
            // }else if(name==="phone"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,
            //     }
            // }
            
        });
    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert('form submitted');
    };
    
    return(
        <React.Fragment>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                <div>
                    <h1>Hello, {userProfile.fname} {userProfile.lname}</h1>
                    <p>{userProfile.email}</p>
                    <p>{userProfile.phone}</p>
                    <input type="text"
                        placeholder="Enter Your First Name"
                        name='fname'
                        onChange={inputEvent}
                        value={userProfile.fname}
                        autoComplete="off"
                    />
                    <br/>
                    <input type="text"
                        placeholder="Enter Your Last Name"
                        name='lname'
                        onChange={inputEvent}
                        value={userProfile.lname}
                        autoComplete='off'
                    />
                    <br/>
                    <input type="email"
                    placeholder="Enter Your Email"
                    name='email'
                    onChange={inputEvent}
                    value={userProfile.email}
                    autoComplete="off"
                    />
                    <br/>
                    <input type="number"
                    placeholder="Enter Your Email"
                    name='phone'
                    onChange={inputEvent}
                    value={userProfile.phone}
                    autoComplete="off"
                    />
                    <button type="submit">Submit Me 👍</button>
                    <a href="http://www.facebook.com">My</a>
                </div>
                </form>
            </div>
        </React.Fragment>
    )
};


export default Forms;
export {LoginForm,SimpleForm};