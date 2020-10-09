import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({creatDate}) => {
    // Crear State de Citas
    const [myDate, updateDate] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    });
    const [bug, updateBug] = useState(false);

    // Function to manage handler input user
    const handleChange = e => {
        //console.log(e.target.name, e.target.value);
        updateDate({
            ...myDate,
            [e.target.name]: e.target.value
        })
    }

    // Destructuring to extract values 
    const { pet, owner, date, hour, symptoms } = myDate;

    // When the user press add Date
    const submitDate = e => {
        e.preventDefault();

        // Validate
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' ||
            hour.trim() === '' || symptoms.trim() === ''  ) {
            updateBug(true);
            return;
        }

        // remove bug message
        updateBug(false);

        // Assign Id
        myDate.id = uuidv4();        

        // Create Date
        creatDate(myDate);

        // Initialize the form
        updateDate({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        });        
    }

    return ( 
        <Fragment>
            <h2>Creat Date</h2>

            { bug ? <p className="alerta-error">All fields are required</p> : null }
            
            <form
                onSubmit={submitDate}
            >
                <label>Pet's Name</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's name"
                    onChange={handleChange}
                    value={pet}
                />
                <label>Owner's Name</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Pet owner's name"
                    onChange={handleChange}
                    value={owner}
                />
                <label>Date</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />   
                <label>Hour</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />                 
                <label>Symptoms</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add Date</button>

            </form>

        </Fragment>
     );
}

Form.propTypes = {
    creatDate: PropTypes.func.isRequired
}

export default Form;