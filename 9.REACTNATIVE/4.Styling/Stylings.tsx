import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import Exstyle from "./style";

const Stylings = () =>{
    return(
        <View>
            <Text style={styles.textColor}>HELLO</Text>
            <Text style={{fontSize: 50, color:'orange'}}>RISHI</Text>
            <Text style={Exstyle.textColor}>MITTAL</Text>
            <Text style={[Exstyle.textColor, styles.textColor]}>BACKPACKER</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    textColor : {
        color: "black",
        fontSize:25,
        backgroundColor:"#E87E68",
        borderRadius:50,
        padding:5,
        textAlign:'center',
        borderColor:'#030000',
        borderWidth:2
    }
})






export default Stylings;