import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TextInput,Button } from "react-native";

const Comp = ()=>{
    const [show, setShow] = useState(true)
        return(
            <View>
                <Text style={styles.Header}>
                USE EFFECT FOR UNMOUNT COMP
                </Text>
                <Button title="Toggle" onPress={()=>setShow(!show)}/>
                {show?<Student/> : null}
            </View>
        )
    }
    const Student = () =>{
let timer =setInterval(() => {
console.warn("Timer called"); }, 2000)
useEffect (() => {
return () => clearInterval(timer) })
        return(
            <View>
                <Text>Student</Text>
            </View>
        )
    }

const styles = StyleSheet.create({
  Header: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 10,
  },

  box:{
    borderWidth: 2,
    borderColor: "black",
    margin: 4,
  },

  Para: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
export default Comp;