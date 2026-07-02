import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Student from "./Student";

class SPC extends Component {
  constructor() {
    super();

    this.state = {
      name: "Rishi",
      inputName: "",
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.Header}>
          State and Props Components
        </Text>

        <Text style={styles.Para}>
          Name: {this.state.name}
        </Text>

        <TextInput
          placeholder="Enter your name"
          style={styles.box}
          onChangeText={(text) =>
            this.setState({ inputName: text })
          }
        />

        <Button
          title="Press Me"
          onPress={() =>
            this.setState({
              name: this.state.inputName,
            })
          }
        />
        <Student name={this.state.name}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10,
    fontWeight: "bold",
  },

  box: {
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },

  Para: {
    fontSize: 22,
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
});

export default SPC;