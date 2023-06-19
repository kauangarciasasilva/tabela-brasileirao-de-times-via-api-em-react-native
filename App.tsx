import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

import Tabela from "./tabela/tabela-componets";
import TimeInfo from "./time/componets/time-info-componets";
import TimesController from "./time/time-controller";


export default function App(){

    const Stack = createNativeStackNavigator();

       
    
    return(
        <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="Time" component={TimesController} />
          <Stack.Screen name="TimeInfo" component={TimeInfo} />
          <Stack.Screen name="Tabela" component={Tabela} />
        </Stack.Navigator>
      </NavigationContainer>
 
    );
}