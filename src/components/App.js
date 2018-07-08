import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/App.css';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../firebase';
import { authorize } from '../actions';
import Nav from './nav';
import Home from './home';
import Chat from './chat';
import SignUp from './sign-up';
import SignIn from './sign_in';


class App extends Component {
  componentWillMount() {
    auth.onAuthStateChanged(user => {
      console.log('USER:', user);
      this.props.authorize(user);
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </div>
    );
  }
}

export default withRouter(connect(null, { authorize })(App));
