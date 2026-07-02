import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
} from "react-native";

const SecList = () => {

  const users = [
    {
      title: "Python Developers",
      data: [
        {
          id: 1,
          name: "Prabha",
          email: "prabha@gmail.com",
          stack: "Python, Java, Django, SpringBoot",
        },
        {
          id: 2,
          name: "Rudra",
          email: "rudra@gmail.com",
          stack: "Python, Java, SQL, SpringBoot",
        },
        {
          id: 3,
          name: "Sakti",
          email: "sakti@gmail.com",
          stack: "Python, Java, Django, SQL",
        },
      ],
    },

    {
      title: "Java Developers",
      data: [
        {
          id: 4,
          name: "Shankar",
          email: "shankar@gmail.com",
          stack: "Java, Django, SQL, SpringBoot",
        },
        {
          id: 5,
          name: "Shiv",
          email: "shiv@gmail.com",
          stack: "Python, Java, Django, SQL, SpringBoot",
        },
        {
          id: 6,
          name: "Shekhar",
          email: "shekhar@gmail.com",
          stack: "Python, Django, SQL, SpringBoot",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Section List
      </Text>

      <SectionList
        sections={users}

        keyExtractor={(item) => item.id.toString()}

        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>
            {title}
          </Text>
        )}

        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.email}>
              {item.email}
            </Text>

            <Text style={styles.stack}>
              {item.stack}
            </Text>

          </View>
        )}

      />

    </View>
  );
};

export default SecList;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10,
  },

  header: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },

  sectionHeader: {
    backgroundColor: "black",
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
  },

  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
    backgroundColor: "#E8F5E9",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
  },

  email: {
    fontSize: 16,
    color: "blue",
    marginTop: 3,
  },

  stack: {
    fontSize: 15,
    color: "green",
    marginTop: 3,
  },

});