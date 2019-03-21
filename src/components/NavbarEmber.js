import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavbarEmber extends Component {

    logout(){
        console.log(sessionStorage.getItem('token'));
        sessionStorage.clear();
        window.location.href = '/';
    }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
            <div className="container-fluid">
                <div className="navbar-wrapper">
                    <Link className="navbar-brand" to="#">
                        NOMBRE
                        <div className="ripple-container"></div>
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                    <span className="navbar-toggler-icon icon-bar"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="#pablo" onClick={this.logout} id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="material-icons">person</i>
                                <p className="d-lg-none d-md-block">Account</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavbarEmber
