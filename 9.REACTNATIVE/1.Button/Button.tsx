/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const fruit = (val: string) => {
    console.warn(val);
  };

  return (
    <View>
      <Text style={{fontSize: 40}}>Button And Its Event</Text>

      <Button
        title="On Press"
        color="black"
        onPress={() => fruit("Hello Sev")}
      />
    </View>
  );
};

export default App;