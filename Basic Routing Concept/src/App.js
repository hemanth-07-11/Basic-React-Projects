import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Link} from "react-router-dom";
import CategorySelection from './components/CategorySelection';
import NewEntry from './components/NewEntry';
import HomePage from './components/HomePage';

class App extends Component {
  state={
    categories: ["Food", "Thoughts", "Other"]
  }
  render(){
    const {categories} = this.state
    return (
      <div className="App">
        {/* react router dom package BrowserRouter allows us to nest different routes  */}
        <BrowserRouter>
          <Link to="/"><button>HOME</button></Link>
          <Link to="/category"><button>Category</button></Link>
          <Link to="/new"><button>New Entry</button></Link>
           <Route exact path="/" component={HomePage} />
           <Route exact path="/category" 
                render={routeProps => <CategorySelection categories={categories} {...routeProps} />}
           />
           <Route exact path="/new/:id" 
            render={routeProps => <NewEntry categories={categories} {...routeProps} />}
           />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
