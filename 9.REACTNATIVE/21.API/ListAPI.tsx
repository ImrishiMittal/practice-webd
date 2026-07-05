import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";
const ListAPI = () => {
    const [data, setData] = useState([]);
    const getAPIData = async () => {
        const URL =
            "https://fake-json-api.mock.beeceptor.com/users";
        let result = await fetch(URL);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        getAPIData();
    }, []);
    return (
        <ScrollView>
            <Text style={styles.heading}>
                API CALLING
            </Text>
            {
                data.length ?
                    data.map((item: any) => (
                        <View style={styles.card}
                            key={item.id}>
                            <Text style={styles.text}>
                                Name : {item.name}
                            </Text>
                            <Text>
                                Email : {item.email}
                            </Text>
                            <Text>
                                Company : {item.company}
                            </Text>
                        </View>
                    ))
                    :
                    <Text>
                        Loading...
                    </Text>
            }
        </ScrollView>
    )
}
const styles =
    StyleSheet.create({
        heading: {
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            margin: 10
        },
        card: {
            borderWidth: 1,
            borderColor: "black",
            padding: 10,
            margin: 10,
            borderRadius: 10
        },
        text: {
            fontSize: 18,
            fontWeight: "bold"
        }
    })


export default ListAPI;