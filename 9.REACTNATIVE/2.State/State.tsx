/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import { View,Text, Button} from 'react-native';

const App = () =>{
  const[name, updatedName] = useState("Rishi");
  function Update(){
    updatedName("Mittal");
  }
return(
  <View>
  <Text style={{fontSize: 50}}>STATE</Text>
  <Text style={{fontSize: 27}}>{name}</Text>
  <Button title='Update' onPress={Update}></Button>
</View>
)
}
export default App;
