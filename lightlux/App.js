import React, {useState, useEffect} from "react";

import {View, StyleSheet, Image, TouchableOpacity, Alert} from "react-native";

import Torch from "react-native-torch";

import RNShake from "react-native-shake";

const App = ()=>{
  const [toggle, setToggle] = useState(false);
  
  const handToggle = () => setToggle(odlToggle => !odlToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(()=>{
      setToggle(odlToggle => !odlToggle);
    });

    return () => subscription.remove();
  }, []);

  return <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={handToggle}>

      <Image 
        style={toggle ? style.lightOn : style.lightOff}
        source={toggle 
          ? require('./assets/icons/eco-light.png')
          : require('./assets/icons/eco-light-off.png')
        
        }
      />

      <Image 
        style={style.diologo}
        source={toggle 
          ? require('./assets/icons/logo-dio.png')
          : require('./assets/icons/logo-dio-white.png')
        }
      />    
      
    </TouchableOpacity>
  </View>;
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  lightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  diologo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }  



});