import React from "react";

import { NavigationContainer }
    from "@react-navigation/native";

import { createMaterialTopTabNavigator }
    from "@react-navigation/material-top-tabs";


import Home from "./Home";
import Profile from "./Profile";


const Tab = createMaterialTopTabNavigator();


const TopTabNav = () => {
    return (

        <NavigationContainer>

            <Tab.Navigator>

                <Tab.Screen
                    name="Home"
                    component={Home}
                />


                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    initialParams={{
                        name: "Rishi Mittal",
                        skill: "React Native",
                        experience: "Learning 🚀"
                    }}
                />


            </Tab.Navigator>


        </NavigationContainer>

    );
};


export default TopTabNav;