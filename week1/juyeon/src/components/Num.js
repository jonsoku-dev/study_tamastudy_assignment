import React, { Component } from 'react';


class Num extends Component {
    render() {
        const {  } = this.props;

        return (
            <div>
                <div >
                    <input
                        placeholder="숫자"
                        name="num1"
                        value=''
                    />
                    {/* <div >{children}</div> */}
                    <select name='selectedValue'>
                        <option value='+'> + </option>
                        <option value='-'> - </option>
                        <option value='*'> * </option>
                        <option value='/'> / </option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Num;