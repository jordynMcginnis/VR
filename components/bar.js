import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';


export default function Bar () {
  return (
   <View  style={{
      width: 6,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      transform:[{rotateY: -50},{rotateX: -1}],
      layoutOrigin: [-10.5,1]
    }}>
      <Text style={{fontSize: 3, textAlign: 'center', color: 'white'}}>Bar</Text>
   </View>
  )
}