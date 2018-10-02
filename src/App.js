import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReadyReactLoginPage from './ready-react-login/ReadyReactLoginPage';


const READY_COMPONENT = '<ReadyReactLoginPage/>';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ready React <span>{READY_COMPONENT}</span></h1>
        </header>
        <section>
          <ReadyReactLoginPage/>
        </section>
      </div>
    );
  }
}

export default App;
