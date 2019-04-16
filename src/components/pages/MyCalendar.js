import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'tui-calendar/dist/tui-calendar.css';
import Calendar from '@toast-ui/react-calendar';


const calendarOptions = {
    // sort of option properties.
    defaultView: 'day',
    taskView: false,
    scheduleView: true
};

const items = [
    {time: '8hr'},
    {time: '9hr'},
    {time: '10hr'},
    {time: '11hr'},
    {time: '12hr'},
    {time: '13hr'},
    {time: '14hr'},
    {time: '15hr'},
    {time: '16hr'},
    {time: '17hr'},
    {time: '18hr'},
    {time: '19hr'},
    {time: '20hr'},
    {time: '21hr'}
];

export class MyCalendar extends Component {
    //HAce una referencia a un elementod en el DOM
    calendarRef = React.createRef();
    hourList = items.map(item => {
        return (
            <div class="rod-full-calendar-timegrid-hour" style={{height: '52px', color: '#bbb', fontWeight: 'normal'}}>
                <span style={{}}>{item.time}</span>
            </div>
        );
    });
    grisList = items.map(item => {
        return (
            <div className="rod-full-calendar-timegrid-gridline" style={{height: '52px', borderBottom: '1px solid #e5e5e5'}}></div>
        );
    });
    render() {
        return (
        <div>
            <ToastContainer />
            <div id="menu">
                <span id="menu-navi">
                    <button type="button" className="btn btn-default btn-sm move-today" data-action="move-today">Today</button>
                    <button type="button" className="btn btn-default btn-sm move-day" data-action="move-prev">
                        <i className="calendar-icon ic-arrow-line-left" data-action="move-prev"></i>
                    </button>
                    <button type="button" className="btn btn-default btn-sm move-day" data-action="move-next">
                        <i className="calendar-icon ic-arrow-line-right" data-action="move-next"></i>
                    </button>
                </span>
                <span id="renderRange" class="render-range"></span>
            </div>
            <div className="rod-full-calendar-layout" style={{backgroundColor:'white'}} >
                <div className="rod-view-3 rod-full-calendar-week-container" >
                    <div className="rod-full-calendar-dayname-layout">
                        <div className="rod-full-calendar-dayname-container rod-view-4" style={{borderTop: '1px solid rgb(229, 229, 229)',borderBottom: '1px solid rgb(229, 229, 229)',height: '42px',backgroundColor: 'inherit',textAlign: 'left'}}>
                            <div className="rod-full-calendar-dayname-leftmargin" style={{marginLeft: '72px'}}>
                                <div className="rod-full-calendar-dayname rod-full-calendar-today rod-full-calendar-holiday-sun" date={"2019-04-14"} style={{width:'100%',left:'0%',lineHeight: '42px',borderLeft: 'none',paddingLeft: '0'}}>
                                    <span className="rod-full-calendar-dayname-date-area" style={{color: "#ff4040"}}>
                                        <span className="rod-full-calendar-dayname-date">14</span>&nbsp;&nbsp;<span className="rod-full-calendar-dayname-name">Sun</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rod-full-calendar-vlayout-area rod-view-5 rod-full-calendar-vlayout-container" style={{height:'514px'}}>
                        <div className="rod-view-7" data-panel-index="0" data-auto-height="true" style={{height:'514px',position:'relative'}}>
                            <div className="rod-full-calendar-timegrid-container rod-view-8" >
                                <div className="rod-full-calendar-timegrid-left" style={{width:'72px',fontSize:'11px'}}>
                                    <div className="rod-full-calendar-timegrid-timezone" data-timezone-index="0" style={{position:'absolute',top: '0', width: '100%', left: '0%', borderRight: '1px solid #e5e5e5', backgroundColor: 'white'}}>
                                        <div class="rod-full-calendar-timegrid-hour" style={{height: '52px', color: '#bbb', fontWeight: 'normal'}}>
                                            <span style={{display:"none"}}>0 am</span>
                                        </div>
                                        {this.hourList}
                                    </div>
                                </div>
                                <div className="rod-full-calendar-timegrid-right" style={{marginLeft:'72px'}}>
                                    <div className="rod-full-calendar-timegrid-h-grid">
                                        {this.grisList}
                                    </div>
                                    <div className="rod-full-calendar-timegrid-schedules">
                                        <div className="rod-full-calendar-timegrid-schedules-container">
                                            <div className="rod-full-calendar-time-date rod-view-22 rod-full-calendar-today" style={{width: '100%', left: '0%', borderRight: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgba(81, 92, 230, 0.05)'}}>
                                                <div className="rod-full-calendar-time-date-schedule-block-wrap" style={{marginRight: '8px'}}></div>
                                                <div className="rod-full-calendar-time-guide-creation" style={{backgroundColor: 'rgba(81, 92, 230, 0.05)', border: '1px solid rgb(81, 92, 230)', top: '364px', height: '26px', display: 'block;'}}>
                                                    <span className="rod-full-calendar-time-guide-creation-label rod-full-calendar-time-guide-bottom" style={{color: 'rgb(81, 92, 230)', fontSize: '11px', fontWeight: 'bold'}}>07:00 - 07:30</span>
                                                </div>
                                            </div>
                                        </div>                                        
                                    </div>                                    
                                </div>
                                {/* Hora actual */}
                                <div className="rod-full-calendar-timegrid-hourmarker" style={{top: '44.0981%', marginTop: 'calc(-20px)', height: '26px'}}>
                                    <div className="rod-full-calendar-timegrid-hourmarker-time" style={{color: '#515ce6', fontSize: '11px', fontWeight: 'normal',paddingLeft:'35px'}}>10:49</div>
                                </div>
                                {/* Barra de la hora actual */}
                                <div className="rod-full-calendar-timegrid-hourmarker" style={{top: '44.0981%', marginLeft:'72px'}}>
                                    <div className="rod-full-calendar-timegrid-hourmarker-line-left" style={{width:'0%', borderTop: '1px dashed #515ce6'}}></div>
                                    <div className="rod-full-calendar-timegrid-todaymarker" style={{left: '0%', backgroundColor: 'rgb(81, 92, 230)', display: 'block'}}>today</div>
                                    <div className="rod-full-calendar-timegrid-hourmarker-line-today" style={{left:'0%', width: '100%', borderTop: '1px solid #515ce6'}}></div>
                                    <div className="rod-full-calendar-timegrid-hourmarker-line-right" style={{left:'100%', borderTop: 'none'}}></div>
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

MyCalendar.propTypes = {
    token: PropTypes.string
}

export default MyCalendar
