import React from 'react'
import{
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image
}from 'react-native'

function Loading(props){
  return(
    <View style={[styles.container]}>
      <Image
        style={[styles.logo]}
        resizeMode="cover" // contain/stretch
        source={require('../../../assets/logo.png')}
      />
      <ActivityIndicator/>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  logo:{
    width: 280,
    height: 80,
    marginBottom: 10,


  }
})

export default Loading;
