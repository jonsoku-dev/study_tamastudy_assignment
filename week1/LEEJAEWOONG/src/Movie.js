import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
    //부모 컴포넌트에서 전달 받은 값을 체크
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string
    }

    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {

    static propTypes = {
        poster : PropTypes.string
    }

    render() {
        return (
            <img src={this.props.poster} alt="description"/>
        )
    }
}

export default Movie