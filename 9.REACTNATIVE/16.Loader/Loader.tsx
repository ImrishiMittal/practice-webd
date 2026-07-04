import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
} from "react-native";

const Loader = () => {

  const [loading, setLoading] = useState(false);
  const [showName, setShowName] = useState(false);

  const handlePress = () => {
    if (showName) {
      setShowName(false);
      return;
    }
    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setShowName(true);

    }, 2000);
  };


  return (
    <View style={styles.container}>

      <Text style={styles.head}>
        LOADER
      </Text>


      {
        loading &&
        <ActivityIndicator
          size={60}
          color="red"
        />
      }


      {
        showName &&
        <Text style={styles.name}>
          Rishi Mittal
        </Text>
      }


      <Button
        title={showName ? "Hide Name" : "Show Name"}
        onPress={handlePress}
      />

    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },


  head: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },


  name: {
    textAlign: "center",
    fontSize: 25,
    color: "green",
    margin: 20,
  },

});

export default Loader;