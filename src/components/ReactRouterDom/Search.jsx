import React, { useState } from 'react'
import SearchResult from './SearchResult';

function Search() {
    const [img,setImg] = useState("");

    const inpuTEvent = (event) => {
        const data=event.target.value;
        setImg(data);
    }
    return (
        <React.Fragment>
            <input type="text" value={img} onChange={inpuTEvent} placeholder="Type anything" />
            {img === ""?null:<SearchResult name={img}/>}
            
        </React.Fragment>
    )
}

export default Search;
