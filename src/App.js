import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './material-dashboard.css';
import { Login } from './components/pages/Login';
import { isNull } from 'util';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {token:null}
	}
	componentWillMount(){		
		if(!isNull(sessionStorage.getItem('token'))){
			console.log('entra');
			this.setState({token:sessionStorage.getItem('token')})
		}
	}
	render() {
		console.log(this.props.location);		
		return (
			<Router>
				<div className="App">
					<Route exact path="/"
						render = {(props) => <Login {...props} token={this.state.token} />}
					/>					   
					<Route exact
						path="/dashboard"
						render = {(props) => <Dashboard {...props} token={this.state.token} />}
					/>
					<Route exact
						path="/profile"
						render = {(props) => <Profile {...props} token={this.state.token} />}
					/>
				</div>
			</Router>
		);
  }
}

export default App;
