import React from 'react'
import{
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
  Image,
  StyleSheet

}from 'react-native'

function Fullscreen(props){
  return(

    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="gray"

      >
      {
        props.fullscreen ?
        <Image

          resizeMode="cover" // contain/stretch
          source={require('../../../assets/nofull.png')}
        />
        :
        <Image

          resizeMode="cover" // contain/stretch
          source={require('../../../assets/full.png')}
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

export default Fullscreen;
