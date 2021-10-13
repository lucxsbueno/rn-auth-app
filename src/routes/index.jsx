import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//Screens
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

export function StackRoutes() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}