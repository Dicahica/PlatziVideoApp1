import React from 'react';
import{
  Text,
  View,
  StyleSheet,
  ImageBackground
}from 'react-native';

function CategoryListLayout(props){
  return(
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.container}
    >
        <Text style={[styles.title]}>{props.title}</Text>
        {props.children}

    </ImageBackground>
  )

}
const styles= StyleSheet.create({
  container:{
    paddingVertical: 5,
    paddingHorizontal: 10,
    padding: 5,


  },
  title:{
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 0,
    fontWeight: 'bold',

  }
})

export default CategoryListLayout
