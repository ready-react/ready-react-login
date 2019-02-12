import React, { Component } from 'react';
import { Grid, FormGroup, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import Icon from 'react-fontawesome';

class FormLogin extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			showFormLogin: true,
			showFormForgotPassword: false
		};
	}
	
	openForgotPassword(){
		this.setState({
			showFormLogin: false,
			showFormForgotPassword: true
		});
	}
	
	openLogIn(){
		this.setState({
			showFormLogin: true,
			showFormForgotPassword: false
		});		
	}
	
	submitLogIn() {
		window.alert('make login');
	}
	
	submitNewPassword() {
		window.alert('create new password');
	}
		
    render() {
		let borderNone = {"borderLeft": "none"};
		let showFormLogin = (this.state.showFormLogin) ? '':'hidden';
		let showFormForgotPassword = (this.state.showFormForgotPassword) ? '':'hidden';
		
		return (
			<Grid>
			  <Row className="margin-top-120">
				<Col xs={12} md={4} sm={2}></Col>
				<Col xs={12} md={4} sm={8}>
				  <div className={showFormLogin}>
					  <h3>Sign in to MyApp</h3>
					  <form>
						<FormGroup>
						  <InputGroup>
							<InputGroup.Addon><Icon name='envelope'/></InputGroup.Addon>
							<FormControl type="text" placeholder="Email" style={borderNone}/>
						  </InputGroup>
						</FormGroup>
						<FormGroup>
						  <InputGroup>
							<InputGroup.Addon><Icon name='user-lock'/></InputGroup.Addon>
							<FormControl type="password" placeholder="Password" style={borderNone}/>
						  </InputGroup>
						</FormGroup>
						<FormGroup>
						  <Button type="button" id="btnLogin" onClick={this.submitLogIn.bind(this)}>Log In</Button>
						</FormGroup>
						<div className="btns-bottom-form-login">
							<FormGroup>
							  <label>Or <a href="#" onClick={this.openForgotPassword.bind(this)}>Forgot Password</a></label>
							</FormGroup>
							<FormGroup>
							  <label>Don't have an account? <a href="#">Sign Up</a></label>
							</FormGroup>
						</div>
					  </form>
				  </div>
				  <div className={showFormForgotPassword}>
					  <h3>Reset your password</h3>
					  <p>Enter your email address and we will send you a link to reset your password.</p>
					  <form>
						<FormGroup>
						  <InputGroup>
							<InputGroup.Addon><Icon name='envelope'/></InputGroup.Addon>
							<FormControl type="text" placeholder="Email" style={borderNone}/>
						  </InputGroup>
						</FormGroup>
						<FormGroup>
						  <Button type="button" id="btnLogin" onClick={this.submitNewPassword.bind(this)}>New Password</Button>
						</FormGroup>
						<div className="btns-bottom-form-login">
							<FormGroup>
							  <label><a href="#" onClick={this.openLogIn.bind(this)}>Log In</a></label>
							</FormGroup>
						</div>
					  </form>
				  </div>
				</Col>
				<Col xs={12} md={4} sm={2}></Col>
			  </Row>
			</Grid>
		);
	}
}

export default FormLogin;



