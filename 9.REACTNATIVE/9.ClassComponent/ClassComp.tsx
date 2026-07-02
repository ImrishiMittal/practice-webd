import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput,Button } from "react-native";
import Student from "./Student";

class ClassComp extends Component {
    fruit = () =>{
        console.warn("Hello Rishi")
    }
    render(){
        return(
            <View>
                <Text style={styles.Header}>
                Class Components
                </Text>
                <TextInput placeholder="Enter your name" style={styles.box}></TextInput>
                <Button title="Press me" onPress={this.fruit}></Button>
                <Student/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  Header: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10,
  },

  box:{
    borderWidth: 2,
    borderColor: "black",
    margin: 4,
  },

  Para: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
export default ClassComp;