import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
const FlatListAPI = () => {
    const [data, setData] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Products
            </Text>
            <FlatList
                data={data}
                keyExtractor={(item) =>
                    item.id.toString()
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <Text>
                            ₹ {item.price}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
    },
    heading:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:10
    },
    card:{
        padding:15,
        marginVertical:8,
        backgroundColor:"#eee",
        borderRadius:10
    },
    title:{
        fontSize:16,
        fontWeight:"600"
    }
});
export default FlatListAPI;