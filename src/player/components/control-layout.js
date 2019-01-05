import React from 'react';
import{
  View,
  StyleSheet

}from 'react-native'

function ControlLayout(props) {
  return(
    <View style={[styles.container]}>
      {props.children}

    </View>

  )
}

const styles=StyleSheet.create({
  container:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 35,
    backgroundColor: 'rgba(255,255,255,0.3)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  }
})
export default ControlLayout;
