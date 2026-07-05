import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    Image
} from "react-native";
const SearchAPI = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const getProducts = async () => {
        const URL =
            "https://fakestoreapi.com/products";
        let result = await fetch(URL);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getProducts();
    }, []);
    const searchProduct = async (text: string) => {
        setSearch(text);
        const URL =
            "https://fakestoreapi.com/products";
        let result = await fetch(URL);
        result = await result.json();
        if (text) {
            const filteredData =
                result.filter((item: any) =>
                    item.title
                        .toLowerCase()
                        .includes(
                            text.toLowerCase()
                        )
                );
            setData(filteredData);

        }
        else {
            setData(result);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                SEARCH API
            </Text>
            <TextInput
                placeholder="Search Product"
                value={search}
                onChangeText={(text) =>
                    searchProduct(text)
                }
                style={styles.input}
            />
            <FlatList
                data={data}
                keyExtractor={(item: any) =>
                    item.id.toString()
                }
                renderItem={({ item }: any) => (
                    <View style={styles.card}>
                        <Image
                            source={{
                                uri: item.image
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <Text style={styles.price}>
                            ₹ {item.price}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}
const styles =
    StyleSheet.create({
        container: {
            flex: 1,
            padding: 10
        },

        heading: {
            fontSize: 25,
            fontWeight: "bold",
            textAlign: "center",
            margin: 10
        },
        input: {
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            padding: 10,
            marginBottom: 10
        },
        card: {
            padding: 15,
            margin: 10,
            borderWidth: 1,
            borderRadius: 10
        },
        image: {
            height: 100,
            width: 100,
            alignSelf: "center",
            resizeMode: "contain"
        },
        title: {
            fontSize: 16,
            fontWeight: "bold"
        },
        price: {
            fontSize: 18,
            color: "green"
        }
    })
export default SearchAPI;