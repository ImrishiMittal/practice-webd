/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text,View,Button} from 'react-native'

const Props = () => {
  const [name,ChangeName] = useState("Rishi")
  return (
    <View>
      <Text style={{fontSize:44}}>Props</Text>
      <Button title='Press' onPress={()=>ChangeName("Mittal")}></Button>
      <User name={name}/>

    </View>
  );
}
const User = ({name}:{name : String})=>{
  return(
    <View style={{marginTop:20}}>
      <Text>Name : {name}</Text>
    </View>
  )
}

export default Props;