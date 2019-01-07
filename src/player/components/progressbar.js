import React from 'react';
import{
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet,
  View

}from 'react-native'

function ProgressBar(props){
  return(
    <View style={[]}>
      {props.seekToTime}
    </View>
  )
}

const styles=StyleSheet.create({

  container:{
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 0,

  }
})

export default ProgressBar
