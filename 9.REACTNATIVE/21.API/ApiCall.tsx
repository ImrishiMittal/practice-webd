import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
const ApiCall = () => {
  const [data, setData] = useState<any>(undefined);
  const getAPIData = async () => {
    const URL =
      "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(URL);
    result = await result.json();
    setData(result);
  }
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <Text style={styles.heading}>
        API CALLING
      </Text>
      {
        data ?
        <View>
          <Text>
            ID : {data[0].id}
          </Text>
          <Text>
            TITLE : {data[0].title}
          </Text>
          <Text>
            BODY : {data[0].body}
          </Text>
        </View>
        :
        <Text>
          Loading...
        </Text>
      }
    </View>
  );
}
const styles = StyleSheet.create({
heading : {
textAlign:'center',
fontSize:25,
fontWeight:'bold'
}
})

export default ApiCall;