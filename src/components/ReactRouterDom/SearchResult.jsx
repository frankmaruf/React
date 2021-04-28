import React from 'react'

function SearchResult(props) {
    const img = `https://source.unsplash.com/400x300/?${props.name}`
    return (
        <React.Fragment>
            <img src={img} alt="search result" />
        </React.Fragment>
    )
}

export default SearchResult;
