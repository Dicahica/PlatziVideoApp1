import React, {Component} from 'react';
import{
  Text,

}from 'react-native';
import { connect } from 'react-redux';

import Home from './screens/containers/home';
import Header from './sections/header.js';
import SuggestionList from './videos/containers/suggestion-list';
import API from '../utils/api';
import CategoryList from './videos/containers/category-list';
import Movie from './screens/containers/movie.js';

class AppLayout extends Component{
  async componentDidMount(){
    const suggestionList =await API.getSuggestion(10);
    const categoryList =await API.getMovies(10);
    //console.log(categoryList);
    //console.log(suggestionList);
    //this.setState({
      //suggestionList: movies,
      //categoryList: categories,
    //})
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render(){
    if(this.props.selectedMovie){
      return <Movie/>
    }
    return(
      <Home>
        <Header />
        <Text>Buscador</Text>
        <CategoryList
          //list ={this.state.categoryList}
        />
        <SuggestionList
          //list ={this.state.suggestionList}
        />
      </Home>


    )
  }
}
function mapStateToProps(state){
  return{
    selectedMovie:state.selectedMovie
  }
}

export default connect(mapStateToProps)(AppLayout);
