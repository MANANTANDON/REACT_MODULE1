import React, {useState} from 'react';
import './ExpenseForm.css';
// import swal from 'sweetalert'


const ExpenseForm = (props) =>{

    let [ allUserData, setUserData ] = useState({
        name: '',
        city: '',
        date: '',
        year: ''
    })

    // let [ userName, setUserName ] = useState('')
    // let [ userCity, setUserCity ] = useState('')
    // let [ userDate, setUserDate ] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        // swal(allUserData.name + " " + allUserData.city + " " + allUserData.date)
        // setUserName('')
        // setUserCity('')
        // setUserDate('')


        props.sendDataToAppComponent(allUserData)
        setUserData({
            name: '',
            city: '',
            date: '',
            year: ''
            
        })
    }

    const usernameHandler = (event) => {
        setUserData((prevState) => {
            return{
                ...prevState,
                name: event.target.value
            }
        })
    }

    const userCityHandler = (event) =>{
        setUserData((prevState) => {
            return{
                ...prevState,
                city: event.target.value
            }
        })
    }

    const userDaterHandler = (event) =>{

        const splitYear = event.target.value.split('-')
        setUserData((prevState) => {
            return{
                ...prevState,
                date: event.target.value,
                year: splitYear[0]
            }
        })
    }
    return(
        <div>
            <form className = 'ExpenditureForm' onSubmit = {submitHandler}>
                <input type = "text" placeholder = 'userName' onChange = {usernameHandler} className = 'aba'/><br />
                <input type = "text" placeholder = 'userCity' onChange = {userCityHandler} className = 'ab1'/><br />
                Date of Birth: <input type = "date" onChange ={userDaterHandler}/><br /><br />
                <hr />
                <input type = 'submit' value = 'Chip!' className = 'ab2'/>
            </form>
        </div>
    );

}

export default ExpenseForm;






























