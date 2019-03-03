import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';


export default function Boats () {
  return (
   <View  style={{
      width: 6,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      transform:[{rotateY: -50},{rotateX: -1}],
      layoutOrigin: [5,1, 10]
    }}>
      <Text style={{fontSize: 3, textAlign: 'center', color: 'red'}}>Boats</Text>
   </View>
  )
}