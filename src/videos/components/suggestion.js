import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity

}from 'react-native';

function Suggestion(props){
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container]}>
          <View style={[styles.left]}>
            <Image
              source={
                {uri: props.medium_cover_image}
              }
              style={[styles.cover]}

              />
              <View style={[styles.genero]}>
              <Text style={[styles.generotext]}>{props.genres[0]}</Text>
              </View>
            </View>
              <View style={[styles.right]}>
                <Text style={[styles.title]}>{props.title}</Text>
                <Text style={[styles.año]}>{props.year}</Text>
                <Text style={[styles.puntuacion]}>{props.rating}</Text>
              </View>
      </View>
    </TouchableOpacity>

  )
}

const styles= StyleSheet.create({
    container:{
      flexDirection: 'row',


    },
    cover:{
      height: 150,
      width: 100,
      resizeMode: 'contain',

    },

    right:{
      paddingLeft: 10,
      justifyContent: 'space-between',


    },
    left:{

    },
    title:{
      fontSize: 18,
      color: '#44546b',
    },
    año:{
      backgroundColor: '#70b124',
      paddingHorizontal: 6,
      paddingVertical: 4,
      color: 'white',
      fontSize: 11,
      borderRadius: 5,
      overflow: 'hidden',
      alignSelf: 'flex-start',

    },
    puntaje:{
      color:'#6b6b6b',
      fontSize: 14,

    },
    genero:{
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: 'black',
      paddingVertical: 5,
      paddingHorizontal: 7,
    },

    generotext:{
      color: 'white',
      fontSize: 11,
    }





})



export default Suggestion
