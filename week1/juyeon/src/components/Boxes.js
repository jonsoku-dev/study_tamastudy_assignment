
import React, { Component } from 'react';
import Num from './Num';

class Boxes extends Component {
    render() {
        const { nums } = this.props;
        // const Num = nums.map(num => {
        //     return <Num key={num.id} done={num.done}>{num.text}</Num>
        // });

        return (
            <div>
                {Num}
                <Num></Num>
                <input
                    placeholder="숫자"
                    name="lastNum"
                    value=''
                />
            </div>
        );
    }
}

export default Boxes;