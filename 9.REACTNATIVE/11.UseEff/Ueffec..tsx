import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TextInput,Button } from "react-native";

const Ueffec = ()=>{
    const [count,setCount] = useState(0);
    const  [setdata, updateData]  =useState(100)
    
    useEffect(()=>{
        console.warn(count)
    },[count])
        return(
            <View>
                <Text style={styles.Header}>
                USE EFFECT
                </Text>
                <Text style={styles.Header}>
                {count}...........
                {setdata}
                </Text>
                <TextInput placeholder="Enter your name" style={styles.box}></TextInput>
                <Button title="Add on..." onPress={()=>setCount(count + 1)}></Button>
                <Button title="Add on..." onPress={()=>updateData(setdata + 1)}></Button>
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
export default Ueffec;