import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default function Options () {
  handleClick = (e) => {
    console.log(e.target.value)
  }
  return (
   <View  style={{
      width: 2,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      transform: [{translate: [0, 0, -5]}],
      layoutOrigin: [0.5,0.5]
    }}>
    <VrButton onClick={() => {handleClick('historical')}}>
      <Text style={{fontSize: 0.2, textAlign: 'center'}}>See historical Sites</Text>
    </VrButton>
    <VrButton onClick={() => {handleClick('historical')}}>
      <Text style={{fontSize: 0.2, textAlign: 'center'}}>Outdoor Activities</Text>
    </VrButton>
    <VrButton onClick={() => {handleClick('historical')}}>
      <Text style={{fontSize: 0.2, textAlign: 'center'}}>Restaurant & Chill</Text>
    </VrButton>
   </View>
  )
}