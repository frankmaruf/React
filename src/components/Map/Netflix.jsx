import React from 'react';
import Cdata from "./Cdata";
import Card from "./Card";



const Netflix = () => {
return(
    <React.Fragment>
        {
            Cdata.map((value)=>{
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
            })
        }
    </React.Fragment>
//     <Card 
//                 key = {Cdata[3].id}
//                 imgsrc={Cdata[3].imgsrc}
//                 info = {Cdata[3].info}
//                 name = {Cdata[3].name}
//                 link = {Cdata[3].link}
//                 btn_name = {Cdata[3].btn_name}
// />
)
};


export default Netflix;