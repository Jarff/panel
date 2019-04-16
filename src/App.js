import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './material-dashboard.css';
import './App.css';
import { Login } from './components/pages/Login';
import { isNull } from 'util';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import MyCalendar from './components/pages/MyCalendar';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {token:null}
	}
	componentWillMount(){		
		if(!isNull(sessionStorage.getItem('token'))){
			this.setState({token:sessionStorage.getItem('token')})
		}
	}
	render() {		
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
					<Route exact
						path="/calendar"
						render = {(props) => <MyCalendar {...props} token={this.state.token} />}
					/>
				</div>
			</Router>
		);
  }
}

export default App;
