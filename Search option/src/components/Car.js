import React from 'react'

function Car({name, brand, id}) {
    return (
        <div key= {id} style= {{width: 200, border:'solid', margin: 10}}>
            <p>Name: {name}</p>
            <p>Brand: {brand}</p>
        </div>
    )
}

export default Car
