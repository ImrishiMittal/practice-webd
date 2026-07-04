import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const CustomButton = ({title, onPress}: any) => {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CustomButton;


const styles = StyleSheet.create({

  button:{
    backgroundColor:"#000",
    padding:15,
    borderRadius:10,
    margin:10,
  },

  text:{
    color:"white",
    fontSize:18,
    textAlign:"center",
    fontWeight:"bold"
  }

});