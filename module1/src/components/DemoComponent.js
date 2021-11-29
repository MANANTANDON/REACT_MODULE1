import React, { useState }from 'react'
import './DemoComponent.css'
// import swal from 'sweetalert'
import Date from './DataComponent'

const DemoComponent = (props) => {
    let [nameChanged, updateType] = useState(props.name)


    const clickHandler = () => {
        // swal('You hopped in as: ' + (props.name) + (' !'))
        updateType('its your birthday ' + (props.name))
    }

    return(
        <div className = 'outerContainer'>
            <div className = 'myComponent'>
                <div className = "showName">{nameChanged}</div>
                <Date birthDate = {props.dob} />
                <div className = "showAge">{props.city}</div>
                <button className = "buttonStyle" onClick = {clickHandler}>HopIn</button>
            </div>
        </div>
    );
}

export default DemoComponent;