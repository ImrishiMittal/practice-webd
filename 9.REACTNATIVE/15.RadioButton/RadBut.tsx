import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RadBut = () => {
  const [gender, setGender] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>RADIO BUTTON</Text>

      {/* Male */}
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => setGender("Male")}
      >
        <View style={styles.radioOuter}>
          {gender === "Male" && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.label}>Male</Text>
      </TouchableOpacity>

      {/* Female */}
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => setGender("Female")}
      >
        <View style={styles.radioOuter}>
          {gender === "Female" && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.label}>Female</Text>
      </TouchableOpacity>

      {/* Other */}
      <TouchableOpacity
        style={styles.radioContainer}
        onPress={() => setGender("Other")}
      >
        <View style={styles.radioOuter}>
          {gender === "Other" && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.label}>Other</Text>
      </TouchableOpacity>

      <Text style={styles.result}>
        Selected: {gender || "None"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  radioOuter: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  radioInner: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: "blue",
  },

  label: {
    fontSize: 20,
    marginLeft: 15,
  },

  result: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: "bold",
    color: "green",
  },
});

export default RadBut;