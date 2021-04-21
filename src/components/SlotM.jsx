import React from "react";

const SlotM =(props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '🎅';
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    let {x,y,z} = props;


    if(x===y && (y===z)){
        return(
            <React.Fragment>
                <div className='slot_inner'>
                <h1> {x} {y} {z}</h1>
                <h1> This is Matching.</h1>
                <hr/>
                </div>
            </React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
            <div className='slot_inner'>
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is not Matching.</h1>
                <hr/>
                </div>
            </React.Fragment>
        )
    }
}

export default SlotM;