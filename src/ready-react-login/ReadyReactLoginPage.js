import React, { Component } from 'react';
import './ReadyReactLoginPage.css';
import FormLogin from './FormLogin.js';

class ReadyReactLoginPage extends Component {
	render() {	
		return (
		  <div className="ready-react-login-page">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"></link>
			<div id="WrapLoginPage"><FormLogin/></div>
		  </div>
		);	
		
	}
}

export default ReadyReactLoginPage;
