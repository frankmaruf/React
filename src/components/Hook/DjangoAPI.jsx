import React, { useEffect, useState } from 'react'
import Loading from './Loading';
export const DjangoAPI = () => {
    const [students,setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDjangoData = async () => {
        try{
            const response = await fetch("http://localhost:8000/api/students-list/")
            setLoading(false);
            setStudents( await response.json())
        }catch(error){
            setLoading(false);
            console.log("my error is "+ error);
        }

    }
    useEffect(()=>{
        getDjangoData();
    },[])

    if (loading) {
        return <Loading/>
    }

    return(
        <React.Fragment>
            <h1>Students List:</h1>
            <div className="container-fluid mt-5">
                <div className='row text-center'>

            {
                students.map((curElem)=>{
                    const {id,name,profile_pic,contract,present_Address,Class,roll}=curElem;
                    return(
                        <div className="col-10 col-md-4 mt-5" key={id}>
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                <div className="image">
                                    <img src={profile_pic} className="rounded" alt="#" width="155"/>
                                </div>
                                <div className="ml-3 w-100">
                                    <h4 className="mb-0 mt-0 text-left">{name}</h4><span className="text-left">{contract}</span>
                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                        <div className="d-flex flex-column"><span className="articles">{Class}</span><span className="number1">38</span></div>
                                        <div className="d-flex flex-column"><span className="articles">{present_Address}</span><span className="number2">980</span></div>
                                        <div className="d-flex flex-column"><span className="articles">{roll}</span><span className="number3">8.2</span></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    )
                })
            }


                </div>
            </div>
        </React.Fragment>
    )
}