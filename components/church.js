import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';


export default function Church () {
  return (
   <View  style={{
      width: 6,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      transform: [{translate: [0, 0, -10]}],
      layoutOrigin: [-0.6,2]
    }}>
      <Text style={{fontSize: 1, textAlign: 'center', color: 'white'}}>Church</Text>
   </View>
  )
}