import React from 'react';
import{
  View,
  Text,
  ImageBackground,
  StyleSheet

}from 'react-native'

function Category(props){
  return(
    <ImageBackground
      style={[styles.wrapper]}
      source={{uri:props.background_image}}>

      <Text style={[styles.genre]}>{props.genres[0]} </Text>
    </ImageBackground>


  )
}

const styles=StyleSheet.create(
  {
    wrapper:{
      width: 250,
      height: 100,
      borderRightWidth: 7,
      borderRightColor: '#FFFFFF',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',


    },
    genre:{
      color: '#FFFFFF',
      shadowRadius: 10,
      fontSize: 30,
      fontWeight: 'bold',
  
    }

  }
)

export default Category;
