import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
} from "react-native";

const Dialog = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.main}>

      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
      >

        <View style={styles.modalContainer}>

          <View style={styles.box}>

            <Text style={styles.text}>
              Hello Rishi 😎
            </Text>

            <Button
              title="Close Box"
              onPress={() => setShowModal(false)}
            />

          </View>

        </View>

      </Modal>


      <Button
        title="Open Box"
        onPress={() => setShowModal(true)}
      />


    </View>
  );
};


const styles = StyleSheet.create({

  main: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },


  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },


  box: {
    backgroundColor: "white",
    width: 250,
    padding: 30,
    borderRadius: 20,
    elevation: 10,
  },


  text: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  }

});

export default Dialog;