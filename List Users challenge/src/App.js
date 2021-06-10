import React, { Component } from 'react';
import './styles/App.css';
import './styles/userList.css';

import Header from './components/Header';
import UserList from './containers/UserList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header appName="SUPER DATE"/>
                <UserList />
            </div>
        );
    }
}

export default App;
