import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { NavbarEmber } from '../NavbarEmber';
import { SideBar } from '../pages/SideBar';

export class Dashboard extends Component {
  render() {	
    return (
		<div>
			<SideBar location={this.props.location} /> 
			<div className="main-panel ps-container ps-theme-default" data-ps-id="668054d6-75da-ed0d-7e0f-6d2a64bf4bfc">
				<NavbarEmber />
				<div className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className="card card-stats">
									<div className="card-header card-header-warning card-header-icon">
										<div className="card-icon">
											<i className="material-icons">content_copy</i>
										</div>
										<p className="card-category">Used space</p>
										<h3 className="card-title">49/50</h3>
									</div>
									<div className="card-footer">
										<div className="stats">
											<i className="material-icons text-danger">warning</i>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6"></div>
							<div className="col-lg-3 col-md-6 col-sm-6"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

Dashboard.propTypes = {
    token: PropTypes.string
}

export default Dashboard
