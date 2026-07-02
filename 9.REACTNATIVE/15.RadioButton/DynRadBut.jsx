import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DynRadBut = () => {
  const [skill, setSkill] = useState("");

  // Dynamic Array
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "C++",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SELECT YOUR SKILL</Text>

      {skills.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.radioContainer}
          onPress={() => setSkill(item)}
        >
          <View style={styles.radioOuter}>
            {skill === item && <View style={styles.radioInner} />}
          </View>

          <Text style={styles.label}>{item}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.result}>
        Selected Skill: {skill || "None"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },

  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
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

export default DynRadBut;