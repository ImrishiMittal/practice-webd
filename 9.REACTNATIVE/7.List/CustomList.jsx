import React from "react";
import { View,Text,StyleSheet, ScrollView } from "react-native";

const CustomList = () =>{
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
        },
        {
            id : 5,
            name: "Shiv"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Rishi"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Sanvi"
        },
        {
            id : 6,
            name: "Tarun"
        },
        {
            id : 6,
            name: "Subedar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Shekhar"
        },
        {
            id : 6,
            name: "Gautam"
        },
        {
            id : 6,
            name: "Bhjuna"
        },
        {
            id : 6,
            name: "Mahato"
        },
        {
            id : 6,
            name: "Ravi"
        },
        {
            id : 6,
            name: "Sidhu"
        },
        {
            id : 6,
            name: "Shiva"
        },
    ]
    return(
        <View>
            <Text style={style.Header}> 
                Custom List (map function)
            </Text>
            <ScrollView>
            {
                users.map((Item)=><Text style={style.Para}>{Item.name}</Text>)
            }
            </ScrollView>
        </View>
    )
}

export default CustomList;

const style = StyleSheet.create({
    Header : {
        textAlign:'center',
        fontSize: 28
    },
    Para:{
        marginLeft:4,
        fontSize:20,
        color:"green",
        marginBottom:1
    }
})