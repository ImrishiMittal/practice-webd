import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";

const Dabana = () => {
  return (
    <View style={style.container}>
      <Text style={style.heading}>
        PRESSABLE
      </Text>
      <Pressable
        style={style.button}
        onPress={() =>
          Alert.alert("Clicked", "Button Pressed")
        }
        onLongPress={() =>
          Alert.alert("Hold", "Long Press Done")
        }
        onPressIn={() =>
          console.log("Press Started")
        }
        onPressOut={() =>
          console.log("Press Released")
        }
      >
        <Text style={style.text}>
          Press Me
        </Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  }
});
export default Dabana;