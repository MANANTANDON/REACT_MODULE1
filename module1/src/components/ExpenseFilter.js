import React from 'react'
import swal from 'sweetalert'
import './ExpenseFilter.css'

 const ExpenseFilter = (props) => {

    const submitHandler = (event) => {
        swal("You have selected: " +  event.target.value)
        props.sendDataToParentComponent(event.target.value)
    }

    return(
        <div>   
            <div className = 'ExpenseFilterContainer'>  
                <select className = 'ExpenseFilterTextBox' onChange = {submitHandler}>
                    <option value = 'all'>All</option>
                    <option value = '2019'>2019</option>
                    <option value = '2020'>2020</option>
                    <option value = '2021'>2021</option>
                    <option value = 'none'>None</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter
