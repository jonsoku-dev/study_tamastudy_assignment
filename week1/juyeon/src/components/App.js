import React, { Component } from 'react';
import Page from './Page';
import Input from './Input';
import Boxes from './Boxes'
import Num from './Num';
import Sum from './Sum';

class App extends Component {
    state = {
        input: '',
        nums: [
            { id: 0, text: '첫번째 일정 입니다.', done: true },
            { id: 1, text: '두번째 일정 입니다.', done: false },
        ]
    };

    onChangeHandler = (e) => {
        const { value } = e.target;
        this.setState({
            input: value,
        });
    };

    onChangeHandler = (e) => {
        const { value } = e.target;
        this.setState({
            input: value,
        });
    };


    render() {

        const { input, nums } = this.state;
        const { onChangeHandler } = this;

        return (
            <Page>
                <Input onChange={onChangeHandler} value={input} />
                <Boxes nums={nums} />
            </Page>
        );
    }
}

export default App;
