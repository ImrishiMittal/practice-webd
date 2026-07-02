import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const CompList = () => {

  const users = [
    {
      id: 1,
      name: "Prabha",
      email: "prabha@gmail.com"
    },
    {
      id: 2,
      name: "Rudra",
      email: "rudra@gmail.com"
    },
    {
      id: 3,
      name: "Sakti",
      email: "sakti@gmail.com"
    },
    {
      id: 4,
      name: "Shankar",
      email: "shankar@gmail.com"
    },
    {
      id: 5,
      name: "Shiv",
      email: "shiv@gmail.com"
    },
    {
      id: 6,
      name: "Shekhar",
      email: "shekhar@gmail.com"
    }
  ];

  return (
    <View>
      <Text style={styles.header}>Component List</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserData item={item} />}
      />
    </View>
  );
};

const UserData = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Name : {item.name}</Text>
      <Text style={styles.email}>Email : {item.email}</Text>
    </View>
  );
};

export default CompList;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 15,
  },

  card: {
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#E8F5E9",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  email: {
    fontSize: 16,
    color: "blue",
    marginTop: 4,
  },
});