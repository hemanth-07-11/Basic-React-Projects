import React from 'react'

function Search(props) {
    return (
        <div className="search">
            <input type="text" onChange={props.handleInput}/>
        </div>
    )
}

export default Search
