import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const AGrid = () => {

  const users = [
    { id: 1, name: "Prabha" },
    { id: 2, name: "Rudra" },
    { id: 3, name: "Sakti" },
    { id: 4, name: "Shankar" },
    { id: 5, name: "Shiv" },
    { id: 6, name: "Shekhar" },
    { id: 7, name: "Rishi" },
    { id: 8, name: "Sanvi" },
    { id: 9, name: "Tarun" },
    { id: 10, name: "Gautam" }
  ];

  return (
    <View>
      <Text style={styles.Header}>GRID</Text>

      <FlatList
        data={users}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.GridItem}>
            <Text style={styles.Para}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10,
  },

  GridItem: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    margin: 5,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },

  Para: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
export default AGrid;