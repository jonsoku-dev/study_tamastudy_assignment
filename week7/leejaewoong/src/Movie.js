import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  //부모 컴포넌트에서 전달 받은 값을 체크
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
  };

  render() {
    return (
      <div className="Movie">
        <div className="Movie__Columns">
          <MoviePoster poster={this.props.poster} alt={this.props.title} />
        </div>
        <div className="Movie__Columns">
          <h1 className="Movie__title">{this.props.title}</h1>
          <div className="Movie__Genres">
            {this.props.genres.map((genre, index) => (
              <MovieGenre genre={genre} key={index} />
            ))}
          </div>
          <p className="Movie__Synopsis">{this.props.synopsis}</p>
        </div>
      </div>
    );
  }
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__genre">{genre} </span>;
}

export default Movie;
