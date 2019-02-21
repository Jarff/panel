import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Login extends Component {
    state = {
        token: null
    }
    triggerChange = (element) => {
        element.addEventListener('change', (e) => {
            element.classList.remove('error');
        });
    }
    submitForm = (e) => {
		let has_error = false;
		let data = {};
		e.preventDefault();
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
			has_error = true;
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
			has_error = true;
		}else{
			data.password = password.value;
		}
		if(!has_error){
			fetch('http://localhost/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				console.log(json);
				if(json.success){
					toast.success("Login succesfull",{
						position:"top-right",
						autoClose:5000,
						hideProgressBar: true,
						closeOnClick: true
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
			//this.onSetResult('ASDFEEAW');
		}
	}
	onSetResult = (token) => {
		localStorage.setItem('token', token);
		const new_state = {
			token: 'dqowiADWADwDInad'
		}
		this.setState(new_state);
	}

    render() {
        return(
            <div>
                <ToastContainer	/>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                            <form className="form-content">
                                <input type="text" className="form-control" id="username" placeholder="Username" />
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                                <input type="submit" id="submit" onClick={this.submitForm} className="login" value="login" />
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login