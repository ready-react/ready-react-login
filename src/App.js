import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReadyReactLoginPage from './ready-react-login/ReadyReactLoginPage';


const READY_COMPONENT = '<ReadyReactLoginPage/>';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <ReadyReactLoginPage/>
        </section>
      </div>
    );
  }
}

export default App;
