
import './App.css';
import React, { Component } from 'react'
import Search from './components/Search';
import CarList from './components/CarList';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       cars : [
         {name:"City", brand:"Honda"},
         {name:"Creta", brand:"Hyundai"},
         {name:"Nexon", brand:"Tata"},
         {name:"Swift", brand:"Maruthi"},
         {name:"Innova", brand:"Toyota"},
         {name:"Fortuner", brand:"Toyota"},
         {name:"BMW1", brand:"BMW"},
         {name:"Audi-01", brand:"Audi"}
        ],

        searchCar:''
    }
  }
  
  handleInput = (e) => {
    
    this.setState({ searchCar: e.target.value})

    console.log(e.target.value);
  }
  render() {


    let filterCars= this.state.cars.filter((car) => {
      return car.name.toLowerCase().includes(this.state.searchCar.toLowerCase())
    })


    return (
      <div className="App">
        <h2>CAR SEARCH CHALLENGE</h2>
        <Search handleInput={this.handleInput}/>
        <CarList filterCars={filterCars}/>
      </div>
    )
  }
}

export default App;