import React from 'react';
import App from './App'

const Box = ({ handleChange }) => {
    return (
        <div>
            <input
                placeholder="값1"
                name="num1"
                value={App.state.num1}
                onChange={() => handleChange()}
            />

            <select name='selectedValue' value={App.state.selectedValue} onChange={() => handleChange()}>
                <option value='+'> + </option>
                <option value='-'> - </option>
                <option value='*'> * </option>
                <option value='/'> / </option>
            </select>

            <input
                placeholder="값2"
                name="num2"
                value={App.state.num2}
                onChange={() => handleChange()}
            />

        </div>
    )
}

export default Box;