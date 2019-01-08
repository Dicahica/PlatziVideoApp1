import React, { Component } from 'react';


import MovieLayout from '../components/movielayout';
import Player from '../../player/containers/player.js';
import Header from  '../../sections/header';

class Movie extends Component{
  render(){
  return(
    <MovieLayout>
      <Header />
      <Player />
    </MovieLayout>
    )
  }
}

export default Movie
