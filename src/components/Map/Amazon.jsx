import React from 'react'
import Cdata from "./Cdata";
import Card from "./Card";


const Amazon = () =>{
    return(
        <React.Fragment>
            {Cdata.map((value)=>{
                return(
                    <Card 
                     key = {value.id}
                     imgsrc={value.imgsrc}
                     info = {value.info}
                     name = {value.name}
                     link = {value.link}
                    btn_name = {value.btn_name}
                                                />
                )
            })}
        </React.Fragment>
//         <Card 
//                     key = {Cdata[1].id}
//                     imgsrc={Cdata[1].imgsrc}
//                     info = {Cdata[1].info}
//                     name = {Cdata[1].name}
//                     link = {Cdata[1].link}
//                     btn_name = {Cdata[1].btn_name}
// />
    )
}

export default Amazon;