import React from 'react'
import { Wrapper } from './Wrapper'

export const Sample = () => {
    return(
        <Wrapper>
            <div>
                <label htmlFor = 'state'>Client State</label>
                <input type = 'text' id = 'state' className = 'sampleTextBox'/>
            </div>
        </Wrapper>
    )
}