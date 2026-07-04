import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

const Profile = ({route}: any) => {


  const {
    name,
    skill,
    experience
  } = route.params || {};


  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        👤 Profile
      </Text>


      <Text style={styles.info}>
        Name : {name || "No Name"}
      </Text>


      <Text style={styles.info}>
        Skill : {skill || "No Skill"}
      </Text>


      <Text style={styles.info}>
        Status : {experience || "No Data"}
      </Text>


    </View>

  )
}


export default Profile;



const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

heading:{
fontSize:30,
fontWeight:"bold"
},

info:{
fontSize:20,
margin:5
}

})