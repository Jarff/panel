import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class CardDate extends Component {

    openModalEdit = (e) => {
        this.props.buttonEl();
    }
    render() {
        return (
        <div>
            <div onClick={this.openModalEdit} role="button" className="NlL62b EfQccc elYzab-cXXICe-Hjleke  EiZ8Dd KKjvXb oMTcIc jKgTF" style={{top: "50%", height: "100%", left: "0%", width: "100%", backgroundColor: "rgb(3, 155, 229)", borderColor: "rgb(3, 155, 229)"}}>
                <div aria-hidden="true" className="lFe10c">
                    <div className="Jmftzc RIOtYe cpCWFd EiZ8Dd" style={{maxHeight: '15px'}}>
                        <span className="FAxxKc">Corte Clásico Caballero</span>
                    </div>
                    <div className="Jmftzc gVNoLb  EiZ8Dd">9:30 – 10:30am</div>
                    <div className="Jmftzc EiZ8Dd" data-dragsource-type="3" data-eventid="5c5apm7b7n8rb6lmhk0cj07h8u">John Smith</div>
                </div>
            </div>        
        </div>
        )
    }
}

CardDate.propTypes = {
    buttonEl: PropTypes.func.isRequired
}

export default CardDate
