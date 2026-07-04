import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
} from "react-native";

const Status = () => {

  const [hide, setHide] = useState(false);

  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="red"
        barStyle="light-content"
        hidden={hide}
      />

      <Text style={styles.heading}>
        STATUS BAR
      </Text>

      <Button
        title={hide ? "Show Status Bar" : "Hide Status Bar"}
        onPress={() => setHide(!hide)}
      />

    </View>
  );
};


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    padding:20
  },

  heading: {
    textAlign: "center",
    fontSize: 35,
    fontWeight:"bold",
    marginBottom:30
  }

});

export default Status;