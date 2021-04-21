import React from "react"
import Card from './Card'
import Cdata from "./Cdata"
import {Netflix,Amazon} from "./SeriesFrom"



const Cards = () =>{
    return(
        <React.Fragment>
        <h1>List of top 5 Netflix Series</h1>
        {
            Cdata.map((value)=>{
                return(
                    <Card
                        key = {value.id}
                        imgsrc={value.imgsrc}
                        name={value.name}
                        info={value.info}
                        link={value.link}
                        btn_name = {value.btn_name}
                    />
                );
            })
        }      
        </React.Fragment>
    )
}

const CoditionalCard=()=>{
    const SeriesNet = "Netflix"
    const SeriesAma="Amazon"
    const btnNetflix =()=>{
        
    }
    const btnAmazon =()=>{

    }
    return(
        <React.Fragment>
            <div>
            <button onChange={btnNetflix}>NetFlix</button>
            <button onChange={btnAmazon}>NetFlix</button>
            </div>
        </React.Fragment>
    )

}


export default Cards;
export {CoditionalCard,Cards};