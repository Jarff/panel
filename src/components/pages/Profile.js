import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { NavbarEmber } from '../NavbarEmber';
import { SideBar } from '../pages/SideBar';

export class Profile extends Component {
  render() {
    return (
      <div>
        <SideBar location={this.props.location} /> 
        <div className="main-panel ps-container ps-theme-default" data-ps-id="668054d6-75da-ed0d-7e0f-6d2a64bf4bfc">
            <NavbarEmber />
            <div className="content">
            <div className="preloader-wrapper big active">
			<div className="preloader-background">
				<div className="preloader-wrapper big active">
					<div className="spinner-layer spinner-blue-only">
						<div className="circle-clipper left">
							<div className="circle"></div>
						</div>
						<div className="gap-patch">
							<div className="circle"></div>
						</div>
						<div className="circle-clipper right">
							<div className="circle"></div>
						</div>
					</div>
				</div>
			</div>
                <div className="container-fluid">
                
                </div>
            </div>
        </div>
      </div>
	  </div>
    )
  }
}

Profile.propTypes = {
    token: PropTypes.string
}

export default Profile
