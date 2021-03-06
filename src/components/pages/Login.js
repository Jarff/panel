import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

export class Login extends Component {
    state = {
        token: null
	}
	disabled = false;
	
    triggerChange = (element) => {
        element.addEventListener('change', (e) => {
            element.classList.remove('error');
        });
    }
    submitForm = (e) => {
		e.preventDefault();
		if(this.disabled)
			return;
		this.validateForm(e).then((data) => {
			if(!data.has_error){
				document.getElementById('submit').innerHTML = '<div class="loadingSpinner"></div>';
				this.disabled = true;
				fetch('http://localhost/api/login', {
					method: 'POST',
	
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				})
				.then((response) => {
					if(response.status === 200){
						return response.json()			
								.then((json) => {
									console.log(json);
									if(json.success){
										toast.success("Login succesfull",{
											position:"top-right",
											autoClose:5000,
											hideProgressBar: true,
											closeOnClick: true
										});
										this.setState({token: json.token});
										let new_state = this.state;
										new_state.redirect = true;
										this.setState(new_state);
										sessionStorage.setItem('token', json.token);
									}
								})
								.catch((error) => {
									console.log(error);
									document.getElementById('submit').innerHTML = 'Login';
								});

					}else{
						toast.error("Invalid username or password",{
							position:"top-right",
							autoClose:2000,
							hideProgressBar: true,
							closeOnClick: true
						});
						document.getElementById('submit').innerHTML = 'Login';
						this.disabled = false;
					}
				})
				.catch((error) => {
					console.log(error);
					toast.error("Sorry something went wrong. Please try again later", {
						position:"top-right",
						autoClose:2000,
						hideProgressBar: true,
						closeOnClick: true
					});
					document.getElementById('submit').innerHTML = 'Login';
					this.disabled = false;
				});
				//this.onSetResult('ASDFEEAW');
			}
		})
		.catch((error) => {
			console.log(error);
			this.disabled = false;
		});
	}

	validateForm = (e) => {
		return new Promise((resolve, reject) => {
			let data = { has_error : false };
			let username = document.getElementById('username'),
				password = document.getElementById('password');
			if(username.value === '' || username.value === ' '){
				toast.warn("Username can't be empty",{
					position:"top-right",
					autoClose:3000,
					hideProgressBar: true,
					closeOnClick: true
				});
				username.classList.add('error');
				this.triggerChange(username);
				data.has_error = true;
				reject('Missing parameter');
			}else{
				data.username = username.value;
			}
			if(password.value === '' || password.value === ' '){
				toast.warn("Password can't be empty",{
					position:"top-right",
					autoClose:3000,
					hideProgressBar: true,
					closeOnClick: true
				});
				password.classList.add('error');
				this.triggerChange(password);
				data.has_error = true;
				reject('Missing parameter');
			}else{
				data.password = password.value;
			}
			if(!data.has_error){
				resolve(data);
			}
		});
	}

	onSetResult = (token) => {
		/* localStorage.setItem('token', token); */
		const new_state = {
			token: 'dqowiADWADwDInad'
		}
		this.setState(new_state);
	}

    render() {		
		if(this.state.redirect){
			return (<Redirect to='/dashboard' />);
		}else{			
			console.log(this.props.token);
			if(this.props.token){
				return(
					<Redirect to='dashboard' />
				);
			}else{
				return(
					<div>
						<ToastContainer	/>
						<div className="wrapper fadeInDown">
							<div id="formContent">
									<form className="form-content">
										<input type="text" className="form-control" id="username" placeholder="Username" />
										<input type="password" className="form-control" id="password" placeholder="Password" />
										<button type="submit" disabled={this.disabled} id="submit" onClick={this.submitForm} className="login" value="login">
											Login
										</button>
									</form>
							</div>
						</div>
					</div>
				);
			}
		}
    }
}

//PropTypes
Login.propTypes = {
	token: PropTypes.string
}

export default Login