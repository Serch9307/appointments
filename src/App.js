import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form'
import Date from './components/Date'

function App() {
    // Dates in local Storage
    let datesInit = JSON.parse( localStorage.getItem('dates'));
    if (!datesInit) {
        datesInit = [];
    }

    // list of dates
    const [dates, updateDates] = useState(datesInit);

    // use Effect when execute some operations when the state change
    useEffect(() => {
        if (datesInit) {
            localStorage.setItem('dates', JSON.stringify(dates));            
        } else {
            localStorage.setItem('dates', JSON.stringify([]));
        }
    }, [dates, datesInit]);

    // function to show the dates and the new one
    const creatDate = date => {
        updateDates([
            ...dates,
            date
        ]);
    }

    // function to delete date by Id
    const eliminarCita = id => {
        const newDates = dates.filter(date => date.id !== id);
        updateDates(newDates);
    }

    // message about manager title
    const title = dates.length === 0 ? 'Non dates' : 'Manager dates';

	return (
        <Fragment>
			<h1>Patient Manager</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form 
                            creatDate={creatDate}
                        />
                    </div>
                    <div className="one-half column">
                        <h2>{title}</h2>
                        {dates.map(date => (
                            <Date
                                key={date.id}
                                date={date}
                                eliminarCita={eliminarCita}
                            />
                        ))}

                    </div>                    
                </div>
            </div>
		</Fragment>
	);
}

export default App;
