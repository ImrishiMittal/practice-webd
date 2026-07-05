import React, {useState} from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from "react-native";


const GetData = () => {


const [name,setName] = useState("");
const [email,setEmail] = useState("");



const saveData = async () => {

    console.log("Button Pressed");
  
    const URL = "http://10.134.10.128:3000/users";
  
    try {
  
      let result = await fetch(URL, {
  
        method: "POST",
  
        headers: {
          "Content-Type": "application/json"
        },
  
        body: JSON.stringify({
          name: name,
          email: email
        })
  
      });
  
  
      result = await result.json();
  
      console.log("API RESPONSE:", result);
  
  
      Alert.alert(
        "Success",
        "User Saved"
      );
  
  
      setName("");
      setEmail("");
  
    }
  
    catch(error){
  
      console.log("ERROR:", error);
  
    }
  
  }



return(

<View style={styles.container}>


<Text style={styles.heading}>
POST API DATA
</Text>


<TextInput
placeholder="Enter Name"
value={name}
onChangeText={(text)=>setName(text)}
style={styles.input}
/>


<TextInput
placeholder="Enter Email"
value={email}
onChangeText={(text)=>setEmail(text)}
style={styles.input}
/>



<Button
title="Save User"
onPress={saveData}
/>


</View>

)

}



const styles =
StyleSheet.create({


container:{
padding:20
},


heading:{
fontSize:25,
textAlign:"center",
fontWeight:"bold",
marginBottom:20
},


input:{

borderWidth:1,
borderColor:"black",
padding:10,
margin:10,
borderRadius:10

}


});


export default GetData;