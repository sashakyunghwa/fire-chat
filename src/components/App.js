import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import Chat from './chat';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
      </div>
    );
  }
}

export default App;
