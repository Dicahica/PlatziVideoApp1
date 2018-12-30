import React from 'react';
import{
  View,
  StyleSheet

}from 'react-native';

function HorizontalSeparator(props){
  return(
    <View style={[styles.separator]}/>


  )
}

const styles=StyleSheet.create({
  separator:{
    borderRightWidth: 2,
  }
}
)

export default HorizontalSeparator
