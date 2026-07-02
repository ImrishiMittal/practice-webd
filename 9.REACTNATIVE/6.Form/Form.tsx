import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const submitForm = () => {
    setShowDetails(true);
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setShowDetails(false);
    setShowPassword(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FORM</Text>

      <TextInput
        style={styles.form}
        placeholder="Enter your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.form}
        placeholder="Enter your Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.form}
        placeholder="Enter your Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
      />

      <View style={styles.button}>
        <Button
          title={showPassword ? "Hide Password" : "Show Password"}
          onPress={() => setShowPassword(!showPassword)}
        />
      </View>

      <View style={styles.button}>
        <Button title="Submit" onPress={submitForm} />
      </View>

      <View style={styles.button}>
        <Button title="Clear Form" color="red" onPress={clearForm} />
      </View>

      {showDetails && (
        <View style={styles.details}>
          <Text style={styles.detailHeading}>Submitted Details</Text>

          <Text>Name : {name}</Text>

          <Text>Email : {email}</Text>

          <Text>Password : {password}</Text>
        </View>
      )}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginBottom: 20,
  },

  form: {
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 18,
  },

  button: {
    marginTop: 10,
  },

  details: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: "#000",
    padding: 15,
    borderRadius: 10,
  },

  detailHeading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
});