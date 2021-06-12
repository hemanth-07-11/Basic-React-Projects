import React from 'react'
import Car from './Car';

function CarList(props) {

    const cars = props.filterCars.map((car) => {
        return <Car name={car.name} brand={car.brand} id={car.id}/>
    })
    return (
        <div className="carList">
            {cars}
        </div>
    )
}

export default CarList;
