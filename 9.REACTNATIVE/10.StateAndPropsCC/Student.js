import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput,Button } from "react-native";

class Student extends Component {
    render(){
        return(
            <View>
                <Text style={styles.Header}>
                Student Name : {this.props.name}
                </Text>
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
  Para: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
export default Student;