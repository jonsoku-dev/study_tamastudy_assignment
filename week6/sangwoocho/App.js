import React, { Component } from 'react';
import axios from 'axios';
import { Accordion, AccordionItem } from 'react-sanfona';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     // stateを定義してください
//     this.state = { name: 'Unavailable' };
//     //객체에 name이라는 속성에 조상우를 담음
//   }
// }
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: {
      //   times: new Date().getTime(),
      // },ㅇㅇ
      name: 'Unavailable',
    };
  }
  sendData = () => {
    // const date = {
    // //   now: new Date(),
    // // };
    const date = JSON.stringify({
      times: new Date(),
    });

    // JSON.stringfy  / JSON.parse
    axios
      .post('http://d83f6c37.ngrok.io/calendarApi/startTimeSave', date, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(console.log('time send complete'))
      .catch(error => console.error(error));
  };

  //   axios
  //     .post('http://d83f6c37.ngrok.io/calendarApi/startTimeSave', date)
  //     .then(console.log('time send complete'))
  //     .catch(error => console.error(error));
  // };

  measureTime = () => {
    const startTime = new Date().getTime();
  };

  render() {
    return (
      <Accordion>
        {[1].map(item => {
          return (
            <AccordionItem title={`${this.state.name}`} expanded={this.state.name === 1}>
              <div id="buttonBox">
                <button
                  onClick={() => {
                    this.setState({ name: 'In production' });
                    console.log(this.state.data);
                    //this.measureTime();
                    this.sendData();
                  }}
                >
                  In production
                </button>
              </div>

              <br></br>
              <div id="buttonBox">
                <button
                  onClick={() => {
                    this.setState({ name: 'Break' });
                    this.sendData();
                    this.measureTime();
                  }}
                >
                  Break
                </button>
              </div>
              <br></br>
              <div id="buttonBox">
                <button
                  onClick={() => {
                    this.setState({ name: 'Coding' });
                    this.sendData();
                    this.measureTime();
                  }}
                >
                  Coding
                </button>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
      // <div className="container">
      //   <h1>{this.state.name}</h1>

      // <button
      //   onClick={() => {
      //     this.setState({ name: 'break' });
      //     this.sendData();
      //     this.measureTime();
      //   }}
      // >
      //     Break
      //   </button>
      //   <br></br>
      //   <button
      //     onClick={() => {
      //       this.setState({ name: 'study' });
      //       this.sendData();
      //     }}
      //   >
      //     Study
      //   </button>

      //   {/* 외부에서 정의된 text변수를 불러올때  중괄호로 묶어줌*/}

      //   {/* /* // jsx는 html과 동일하게 사용.return 내에 여러 요소가 있을수 없다 */
      //   /* //div안에 여러
      //  요소를 넣을수 있음.  */}
      //   {/* 리턴부분에는 jsx 문법, 그 외 밖은 클래스로 자바스크립트사용가능 */}
      // </div>
    );
  }
}
