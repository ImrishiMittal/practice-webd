import React from "react";
import { View,Text,StyleSheet, FlatList } from "react-native";

const AList = () =>{
    const users = [
        {
            id : 1,
            name: "Prabha"
        },
        {
            id : 2,
            name: "Rudra"
        },
        {
            id : 3,
            name: "Sakti"
        },
        {
            id : 4,
            name: "Shankar"
        }
    ]
    return(
        <View>
            <Text style={style.Header}> 
                List
            </Text>
            <FlatList
            data={users}
            renderItem={({item})=><Text style={style.Para}>{item.name}</Text>}
            keyExtractor={item=>item.id.toString()}
            />
        </View>
    )
}

export default AList;

const style = StyleSheet.create({
    Header : {
        textAlign:'center',
        fontSize: 30
    },
    Para:{
        marginLeft:4,
        fontSize:20,
        color:"green"
    }
})