import React from "react";

import {
View,
Text,
Button
} from "react-native";


import {
useSelector,
useDispatch
}
from "react-redux";


import {
removeFromCart
}
from "../redux/action";



const Cart =()=>{


const cart =
useSelector(
(state:any)=>state.cart
);



const dispatch =
useDispatch();



return(

<View>


<Text>
Cart Items : {cart.length}
</Text>


{
cart.map((item:any)=>(


<View key={item.id}>


<Text>
{item.name}
</Text>



<Button

title="Remove"

onPress={()=>
dispatch(removeFromCart(item.id))
}

/>


</View>


))

}


</View>


)

}


export default Cart;