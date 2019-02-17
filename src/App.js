import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Login } from './components/pages/Login';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {token:null}
	}
	componentWillMount(){
		if(localStorage.getItem('token') !== null){
			this.setState({token:localStorage.getItem('token')})
		}
	}
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" token={this.state.token} component={Login} />
				</div>
			</Router>
		);
  }
}

export default App;
