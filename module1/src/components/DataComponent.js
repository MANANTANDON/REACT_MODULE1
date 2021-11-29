import React from 'react'
import './DemoComponent.css'

const DateComponent = (props) =>{
    return(
        <div>
            <div style = {{padding: '35px', width: '35%'}} className = 'showType'>{props.birthDate}</div>
        </div>
    );
}

export default DateComponent;