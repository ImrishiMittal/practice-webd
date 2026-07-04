import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

import CustomButton from "./CustomButton";


const Home = ({navigation}: any) => {

  const user = {
    name: "Rishi Mittal",
    skill: "React Native",
    experience: "Learning Phase 🚀"
  };


  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        🏠 Home Screen
      </Text>


      <CustomButton
        title="Go To Profile"
        onPress={() =>
          navigation.navigate(
            "Profile",
            user
          )
        }
      />


    </View>

  );
};


export default Home;



const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    padding:20,
  },


  heading:{
    fontSize:30,
    textAlign:"center",
    fontWeight:"bold",
  }

});