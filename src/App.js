import React, { Component } from 'react';
import Header from './components/header';
import TweetContainer from './containers/tweetContainer'

import './App.css';
import ProfileContainer from "./containers/profileContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Twitter Clone" />
	      <div className="main-contents">
          <ProfileContainer/>
          <TweetContainer />
        </div>
      </div>
    );
  }
}

export default App;
