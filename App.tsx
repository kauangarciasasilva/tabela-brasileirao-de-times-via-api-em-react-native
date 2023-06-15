import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import DetailPage from "./scr/entitys/page/detail-page";
import HomePage from "./scr/entitys/page/home-page";
import Tabela from "./scr/entitys/components/tabela-componets";


export default function App(){

    const Stack = createNativeStackNavigator();

       
    
    return(
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="detail" component={DetailPage} />
          <Stack.Screen name="Tabela" component={Tabela} />
        </Stack.Navigator>
      </NavigationContainer>
 
    );
}