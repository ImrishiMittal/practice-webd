import React, {useEffect, useState} from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image
} from "react-native";


const DelUpListAPI = () => {


const [data,setData] = useState([]);



const getProducts = async () => {

const URL =
"https://fakestoreapi.com/products";


let result = await fetch(URL);


result = await result.json();


setData(result);

};



useEffect(()=>{

getProducts();

},[]);



// DELETE

const deleteProduct = (id:any) => {


const newData =
data.filter((item:any)=>
item.id !== id
);


setData(newData);


};



// UPDATE

const updateProduct = async (id:any) => {

    const URL = 
    `https://fakestoreapi.com/products/${id}`;
  
  
    let result = await fetch(URL,{
  
      method:"PUT",
  
      headers:{
        "Content-Type":"application/json"
      },
  
      body:JSON.stringify({
  
        title:"Updated Product",
        price:999,
        description:"Updated from React Native",
        image:"https://i.pravatar.cc",
        category:"test"
  
      })
  
    });
  
  
    result = await result.json();
  
  
    console.log(
      "Updated Data:",
      result
    );
  
  
  };



return(

<View style={styles.container}>


<Text style={styles.heading}>
PRODUCT LIST
</Text>



<FlatList

data={data}

keyExtractor={(item:any)=>
item.id.toString()
}


renderItem={({item}:any)=>(


<View style={styles.card}>


<Image

source={{uri:item.image}}

style={styles.image}

/>


<Text style={styles.title}>
{item.title}
</Text>



<Text style={styles.price}>
₹ {item.price}
</Text>



<View style={styles.btnBox}>


<Button

title="Update"

onPress={()=>
updateProduct(item.id)
}

/>


<Button

title="Delete"

onPress={()=>
deleteProduct(item.id)
}

/>



</View>


</View>


)}


/>



</View>


)

}



const styles =
StyleSheet.create({


container:{

flex:1,
padding:10

},



heading:{

fontSize:25,
fontWeight:"bold",
textAlign:"center",
marginBottom:10

},



card:{

backgroundColor:"#fff",
padding:15,
margin:10,
borderRadius:10,
elevation:5

},



image:{

height:120,
width:120,
alignSelf:"center",
resizeMode:"contain"

},



title:{

fontSize:16,
fontWeight:"bold",
marginVertical:10

},



price:{

fontSize:18,
color:"green",
marginBottom:10

},



btnBox:{

flexDirection:"row",
justifyContent:"space-around"

}


});



export default DelUpListAPI;