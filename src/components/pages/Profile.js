import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { NavbarEmber } from '../NavbarEmber';
import { SideBar } from '../pages/SideBar';
import { SideNav, SideNavItem, Button, Modal, Input, Icon, Row, Col} from 'react-materialize';
import { Calendar } from 'react-calendar';
import CardDate from '../CardDate';

export class Profile extends Component {
	state = {
		date: new Date(),
		modal: false,
	}
	modalButton = React.createRef();
	modalButtonEdit = React.createRef();

	onChange = date => {
		let new_state = this.state;
		new_state.date = date;
		this.setState(new_state);
		toast.success("Date updated",{
			position:"top-right",
			autoClose:3000,
			hideProgressBar: true,
			closeOnClick: true
		});
	};

	openModal = e => {
		// console.log(e.currentTarget);
		this.modalButton._btnEl.click();
	}

	openModalEdit = e => {
		this.modalButtonEdit._btnEl.click();
	}


	render() {
		return (
			<div>
				<ToastContainer	/>
				<SideBar location={this.props.location} /> 
					<div className="main-panel ps-container ps-theme-default" data-ps-id="668054d6-75da-ed0d-7e0f-6d2a64bf4bfc">
						<NavbarEmber />
						<div className="content">
								<div className="container-fluid">
									<SideNav
										trigger={<Button floating large className='red' waves='light' icon='event' />}
										options={{ closeOnClick: true, edge: 'right' }}
									>
										<SideNavItem href='#' icon='cloud'>First Link With Icon</SideNavItem>
										<div className="w100">
											<Calendar
												onChange={this.onChange}
												value={this.state.date}
											/>	
										</div>
									</SideNav>    
									<Modal
										header='Modal Header'
										trigger={
											<Button style={{ display: 'none' }} ref={button => this.modalButton = button}>MODAL</Button>
										}
										actions={
											<Button floating className="blue" modal="close" waves="light"><Icon small>add</Icon></Button>
										}
									>
										<Input placeholder="Nombre del cliente" s={6} />										
										<Input s={12} type='select' label="Servicio" defaultValue='0'>
											<option value='1'>Corte caballero</option>
											<option value='2'>Corte completo caballero</option>
											<option value='3'>Lavado kul</option>
										</Input>
										<Input s={6} type='select' label="Hora inicio" defaultValue='0'>
											<option value='1'>09:00 am</option>
											<option value='2'>10:00 am</option>
											<option value='3'>11:00 am</option>
										</Input>
										<Input s={6} type='select' label="Hora fin" defaultValue='0'>
											<option value='1'>09:00 am</option>
											<option value='2'>10:00 am</option>
											<option value='3'>11:00 am</option>
										</Input>
									</Modal>
									<Modal
										bottomSheet
										trigger={
											<Button style={{display:'none'}} ref={button => this.modalButtonEdit = button}></Button>
										}
									>
										<Row>
											<Input label="Servicio" s={3} value="Corte clasico caballero" />	
											<Input label="Atiende" s={3} value="Timmothy Hawkins" />	
											<Input label="Lugar" s={3} value="Barbería el triunfo" />	
											<Input label="Cliente" s={3} value="John Smith" />	
										</Row>
										<Row>
											<Input label="Fecha" s={3} value="23 marzo de 2019" />	
											<Input label="Hora inicio" s={3} value="09:30 am" />											
											<Input label="Hora Final" s={3} value="10:30 am" />	
											<Input label="Costo" s={3} value="$ 150.00" />	
										</Row>
										<Row>
											<Col s={4}></Col>
											<Col s={4}></Col>
										</Row>
									</Modal>
									<div className="row">
										<div className="col-md-12">
											<div className="card">
												<div className="card-header card-header-primary">
													<h4 className="card-title ">Martes 22 de Marzo 2019</h4>
													<p className="card-category">Barbería el triunfo</p>
												</div>
												<div className="card-body">
													<div className="table-responsive">
														<table className="table events">
															<thead className=" text-primary">
																<tr>
																	<th className="text-center" style={{width: '10%'}}></th>
																	<th className="text-center" style={{width: '25%'}}>Timmothy Hawkins</th>
																	<th className="text-center" style={{width: '25%'}}>Renee Hill</th>
																	<th className="text-center" style={{width: '25%'}}>Brian Simpson</th>
																	<th className="text-center" style={{width: '25%'}}>Leo Gomez</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<th className="text-center">09:00</th>
																	<th className="text-center">
																		<div className="evt-creator" onClick={this.openModal} style={{position:'absolute',height:'100%', width: '100%', top: '0', left:'0'}}></div>
																		<CardDate buttonEl={this.openModalEdit} test={'hola'} />
																	</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">10:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">11:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">12:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">13:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">14:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">15:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">16:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">17:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">18:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">19:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
																<tr>
																	<th className="text-center">20:00</th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																	<th className="text-center evt-creator" onClick={this.openModal}></th>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
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
