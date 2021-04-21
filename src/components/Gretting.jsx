import React from 'react'

let currentDate = new Date();
currentDate = currentDate.getHours();

const cssStyle = {};

let gretting = '';
if (currentDate>=1  && currentDate < 12){
    gretting = "Good Morning";
    cssStyle.color = "green";
}else if (currentDate>=12 && currentDate<19){
    gretting = "Good Afternoon";
    cssStyle.color = "Orange";
}else{
    gretting = "Good Night";
    cssStyle.color = "Dark";
}


function Gretting(){
    return(
        <React.Fragment>
            <h1>Hello,<span style={cssStyle}>{gretting} Sir</span></h1>
        </React.Fragment>
    );
}
export default Gretting;
