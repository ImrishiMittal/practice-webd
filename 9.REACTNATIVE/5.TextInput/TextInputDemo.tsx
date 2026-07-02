import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const TextInputDemo = () => {
  const [realName, DisplayName] = useState("");

  return (
    <View>
      <Text style={{ fontSize: 30 }}>TextInput Demo</Text>

      <Text style={{ fontSize: 20 }}>
        Your name is: {realName}
      </Text>

      <TextInput
        placeholder="Enter your name"
        onChangeText={(text) => DisplayName(text)}
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderRadius: 15,
        }}
      />
    </View>
  );
};

export default TextInputDemo;