import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const But = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>BUTTONS</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Success", "Button Pressed")}
      >
        <Text style={styles.buttonText}>CLICK ME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },

  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default But;