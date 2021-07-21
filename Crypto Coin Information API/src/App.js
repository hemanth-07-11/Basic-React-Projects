import React, { Component } from 'react';
import Header from './Header';
import DataCoin from "./Components/DataCoin";
import "./style.css"

class App extends Component {
  state = {
    coins: []
  }
  async componentDidMount() {
      const  url='https://api.coingecko.com/api/v3/coins/list';
      const res=await fetch(url);
      const data=await res.json();
      console.log(data)
      this.setState({coins: data});
  }
  render() {
    const { coins } = this.state;
    console.log(this.state)
    const coinsList = (coins.length > 0) ? (
      <DataCoin />
    ) :
      (
        <div>
          <div className="loading-content"> Loading The Coins List </div>
        </div>
      );

    return (
      <div basename="/Cryptocoin-Wiki">
        <Header />
        {coinsList}
      </div>
    )
  }
}

export default App;