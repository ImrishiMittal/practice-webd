import React from "react";

import {
View,
Text,
Button
} from "react-native";


import {useDispatch} 
from "react-redux";


import {addToCart}
from "../redux/action";



const Home = ({navigation}:any)=>{


const dispatch =
useDispatch();



const item = {

id:1,

name:"Laptop",

price:50000

};



return(

<View>


<Text>
HOME SCREEN
</Text>



<Text>
{item.name}
</Text>



<Button

title="Add Cart"

onPress={()=>
dispatch(addToCart(item))
}

/>



<Button

title="Go To Cart"

onPress={()=>
navigation.navigate("Cart")
}

/>


</View>

)

}


export default Home;