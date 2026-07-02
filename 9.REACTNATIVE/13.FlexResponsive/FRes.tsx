import React from "react";
import { View, Text, StyleSheet } from "react-native";
const FRes = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.Header}>FLEXBOX</Text>
            <View
                style={{
                    flex: 1,
                    backgroundColor: "red",
                    flexDirection: "row",
                }}
            >
                <View style={{ flex: 1, backgroundColor: "black" }} />
                <View style={{ flex: 1, backgroundColor: "brown" }} />
                <View style={{ flex: 1, backgroundColor: "orange" }} />
            </View>
            <View style={{ flex: 2, backgroundColor: 'yellow' }}></View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    Header: {
        textAlign: "center",
        fontSize: 28,
        marginBottom: 10,
    },

    box: {
        borderWidth: 2,
        borderColor: "black",
        margin: 4,
    },

    Para: {
        fontSize: 18,
        color: "green",
        fontWeight: "bold",
    },
});
export default FRes