import React from 'react';
import{
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet

}from 'react-native'

function PlayPause(props){
  return(
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="gray"

      >
      {
        props.paused ?
        <Image

          resizeMode="cover" // contain/stretch
          source={require('../../../assets/play.png')}
        />
        :
        <Image

          resizeMode="cover" // contain/stretch
          source={require('../../../assets/pause.png')}
        />

      }

    </TouchableHighlight>
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

export default PlayPause
