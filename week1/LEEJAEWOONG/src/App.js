import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMoves();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      console.log(movie);
      return <Movie title={movie.title} poster={movie.large_cover_image} key={index} />;
    });
    return movies;
  };

  _getMoves = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  //map함수로 movies배열을movie변수에 넣어줌
  //key를 사용해서 고유의 값을 부여할 수 있음
  render() {
    return <div className="App">{this.state.movies ? this._renderMovies() : 'Loading'}</div>;
  }
}

export default App;
