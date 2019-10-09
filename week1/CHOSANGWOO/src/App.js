import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // stateを定義してください
    this.state = { name: '입력대기' };
    //객체에 name이라는 속성에 조상우를 담음
  }

  render() {
    //여기서 주석은 슬러쉬로 가능
    //이벤트와 스테이트가 있음
    const text = 'TAMASTUDY2';
    return (
      <div className="container">
        <h1>어떤스터디에 참가하십니까?</h1>
        <h1>답변 : {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: '마크업' });
          }}
        >
          마크업
        </button>
        <button
          onClick={() => {
            this.setState({ name: '리액트' });
          }}
        >
          리액트
        </button>

        {/* 외부에서 정의된 text변수를 불러올때  중괄호로 묶어줌*/}

        {/* /* // jsx는 html과 동일하게 사용.return 내에 여러 요소가 있을수 없다 */
        /* //div안에 여러
        요소를 넣을수 있음.  */}
        {/* 리턴부분에는 jsx 문법, 그 외 밖은 클래스로 자바스크립트사용가능 */}
      </div>
    );
  }
}

export default App;
