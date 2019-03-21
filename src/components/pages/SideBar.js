import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class SideBar extends Component {
    render() {
        console.log(this.props.location);
        return (
            <div>
                <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                        EmberCom
                        </a>
                    </div>
                    <div className="sidebar-wrapper ps-container ps-theme-default">
                        <ul className="nav">                            
                            <li className="nav-item">  
                                <NavLink className="nav-link" to="/dashboard">
                                    <i className="material-icons">dashboard</i>
                                    <p>Dashboard</p>
                                </NavLink>                                
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">
                                    <i className="material-icons">person</i>
                                    <p>User Profile</p>
                                </NavLink>                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar