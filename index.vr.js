import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
} from 'react-vr';
import Church from './components/church.js';
import Bar from './components/bar.js';

export default class HelloVirtualWorld extends React.Component {
    constructor(){
      super();
      this.state = {
        render: 'map',
        option: null
      };
    }
  render () {
    console.log(this.state.option)
  return (
   <View  style={{
      width: 2,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      transform: [{translate: [0, 0, -5]}],
      layoutOrigin: [0.5,0.5]
    }}>
    {this.state.render === 'map'
      ?  <View>
           <Pano source={asset('harbour.jpg')}/>
           <Church/>
           <Bar/>
        </View>
      : <View>
          <VrButton onClick={() => {this.setState(() => ({render : 'map', option : 'historical'}))}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>See historical Sites</Text>
          </VrButton>
          <VrButton onClick={() => {this.setState(() => ({render : 'map', option: 'outdoor'}))}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Outdoor Activities</Text>
          </VrButton>
          <VrButton onClick={() => {this.setState(() => ({render : 'map', option: 'chill'}))}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Restaurant & Chill</Text>
          </VrButton>
        </View>
    }
   </View>
  )
  }
};

AppRegistry.registerComponent('HelloVirtualWorld', () => HelloVirtualWorld);
