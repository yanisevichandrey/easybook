import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import Login from './Login';
import UserProfile from './UserProfile';
import Header from './Header';
import HomePage from './Home';
import Restaurant from './Restaurant';

class App extends Component {

  render() {
    return (
      <div className="App" >
        <Header />
        <HomePage />
        {  <Login 
          addUser={this.props.addUser}
          users={this.props.users}
        />  }
        {<UserProfile />}
        <Restaurant />
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users.users
  }
}

const mapDispatch = dispatch => ({
  addUser: newUsers => dispatch.users.addUser(newUsers)
})

export default connect(mapState, mapDispatch)(App);
