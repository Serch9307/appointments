import React from 'react';
import PropTypes from 'prop-types';

const Date = ({date,eliminarCita}) => (
    <div className="cita">
        <p>Pet: <span>{date.pet}</span></p>
        <p>Owner: <span>{date.owner}</span></p>
        <p>Date: <span>{date.date}</span></p>
        <p>Hour: <span>{date.hour}</span></p>
        <p>Symptoms: <span>{date.symptoms}</span></p>
        
        <button
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(date.id)}
        >Delete &times;
        </button>
    </div>

);

Date.propTypes = {
    date: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Date;