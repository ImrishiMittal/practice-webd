import React, {useState} from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";


import AsyncStorage from
"@react-native-async-storage/async-storage";



const AsyncDemo = () => {


const [name,setName] = useState("");

const [storedName,setStoredName] = useState("");



// SAVE DATA

const saveData = async () => {


await AsyncStorage.setItem(
"name",
name
);


setName("");


console.log("Saved");


};



// GET DATA

const getData = async () => {


const value =
await AsyncStorage.getItem("name");


if(value){

setStoredName(value);

}


};



// REMOVE DATA

const removeData = async()=>{


await AsyncStorage.removeItem("name");


setStoredName("");


};



return(

<View style={styles.container}>


<Text style={styles.heading}>
ASYNC STORAGE
</Text>



<TextInput

placeholder="Enter Name"

value={name}

onChangeText={(text)=>
setName(text)
}

style={styles.input}

/>



<Button

title="Save"

onPress={saveData}

/>


<Button

title="Get Data"

onPress={getData}

/>



<Button

title="Delete"

onPress={removeData}

/>



<Text style={styles.result}>

Stored Name : {storedName}

</Text>



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

fontWeight:"bold",

textAlign:"center",

margin:20

},



input:{


borderWidth:1,

borderColor:"black",

padding:10,

borderRadius:10,

marginBottom:20


},



result:{

fontSize:20,

marginTop:20,

color:"green"

}


});


export default AsyncDemo;