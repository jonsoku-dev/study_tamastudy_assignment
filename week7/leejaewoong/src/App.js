import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import axios from 'axios';

class App extends Component {
  state = { times: '' };

  componentDidMount() {
    this._getMoves();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMoves = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  // __sendData = () => {
  //   console.log('button clicked');
  //   let data3 = JSON.stringify({
  //     times: this.state.times,
  //     name: 'Unavailable',
  //   });

  //   console.log(data3);

  //   axios
  //     .post('http://554d0c5e.ngrok.io/calendarApi/startTimeSave', data3, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then(console.log('time send complete'))
  //     .catch(error => console.error(error));
  // };
  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  //map함수로 movies배열을movie변수에 넣어줌
  //key를 사용해서 고유의 값을 부여할 수 있음
  render() {
    return (
      <div className="Movies">
        {this.state.movies ? this._renderMovies() : 'Loading'}

        {/* <button
          onClick={() => {
            this.setState({ times: '8888' });
            this.__sendData();
          }}
        ></button> */}
      </div>
    );
  }
}

export default App;
