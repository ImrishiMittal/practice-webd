import React, {useState} from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";


const InputField = () => {


const [id,setId] = useState("");

const [user,setUser] = useState<any>(null);



const getUser = async () => {


const URL =
`http://10.134.10.128:3000/users/${id}`;


let result = await fetch(URL);


result = await result.json();


setUser(result);


};



return(

<View style={styles.container}>


<Text style={styles.heading}>
GET API WITH INPUT FIELD
</Text>



<TextInput

placeholder="Enter User ID"

value={id}

onChangeText={(text)=>setId(text)}

style={styles.input}

/>



<Button
title="Get User"
onPress={getUser}
/>



{
user ?

<View style={styles.card}>


<Text>
ID : {user.id}
</Text>


<Text>
Name : {user.name}
</Text>


<Text>
Email : {user.email}
</Text>


</View>


:

null

}



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
margin:10,
borderRadius:10

},



card:{

marginTop:20,
padding:15,
borderWidth:1,
borderRadius:10

}


});


export default InputField;