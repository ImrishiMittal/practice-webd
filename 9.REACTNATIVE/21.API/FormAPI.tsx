import React, {useState} from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from "react-native";


const FormAPI = () => {


const [name,setName] = useState("");
const [email,setEmail] = useState("");

const [nameError,setNameError] = useState("");
const [emailError,setEmailError] = useState("");



const saveData = async () => {


let valid = true;


// Name validation

if(!name){

setNameError("Please enter name");

valid=false;

}

else{

setNameError("");

}


// Email validation

if(!email){

setEmailError("Please enter email");

valid=false;

}

else{

setEmailError("");

}


// Stop API call if invalid

if(!valid){

return;

}



// API CALL

const URL =
"http://10.134.10.128:3000/users";


let result = await fetch(URL,{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

name:name,

email:email

})

});


result = await result.json();


console.log(result);


Alert.alert(
"Success",
"User Added"
);


setName("");

setEmail("");


}



return(

<View style={styles.container}>


<Text style={styles.heading}>
FORM VALIDATION + API
</Text>



<TextInput

placeholder="Enter Name"

value={name}

onChangeText={(text)=>setName(text)}

style={styles.input}

/>


{
nameError ?

<Text style={styles.error}>
{nameError}
</Text>

:

null
}




<TextInput

placeholder="Enter Email"

value={email}

onChangeText={(text)=>setEmail(text)}

style={styles.input}

/>



{
emailError ?

<Text style={styles.error}>
{emailError}
</Text>

:

null
}




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

fontWeight:"bold",

textAlign:"center",

marginBottom:20

},



input:{

borderWidth:1,

borderColor:"black",

padding:10,

borderRadius:10,

marginTop:10

},



error:{

color:"red",

marginLeft:10,

marginBottom:10

}


});


export default FormAPI;