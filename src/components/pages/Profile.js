import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { NavbarEmber } from '../NavbarEmber';
import { SideBar } from '../pages/SideBar';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import { Calendar } from 'react-calendar';

export class Profile extends Component {
  render() {
    return (
      <div>
        <SideBar location={this.props.location} /> 
        <div className="main-panel ps-container ps-theme-default" data-ps-id="668054d6-75da-ed0d-7e0f-6d2a64bf4bfc">
            <NavbarEmber />
            <div className="content">
                <div className="container-fluid">
					<SideNav
						trigger={<Button>Mostrar Calendario</Button>}
						options={{ closeOnClick: true, edge: 'right' }}
						>
						<SideNavItem href='#' icon='cloud'>First Link With Icon</SideNavItem>
						<div class="w100">
							<Calendar />	
						</div>
					</SideNav>                
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
