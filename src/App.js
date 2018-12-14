import React, { Component } from 'react';
import Header from 'components/molecules/Header'
import Author from 'components/molecules/Author'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Author />
      </div>
    );
  }
}

export default App;
