import React, { useRef } from 'react'
import './Experiment.css'
import swal from 'sweetalert'
import { Sample } from './Sample'

export const Experiment = () => {

    const nameHook = useRef()

    const clickHandler = () =>{
        swal(nameHook.current.value)
        nameHook.current.value = ' '
    }
    return(
        <div className = 'ExperimentComponent'>
            <Sample />
            <div>
                <label htmlFor = 'client'> Client Name</label>
                <input type = 'text' id = 'client' className = 'ExperimentInputBox' ref = {nameHook}/>
            </div>
            <div>
                <button className = 'ExperimentButton' onClick = {clickHandler}>Approve</button>
            </div>
        </div>
    )
}