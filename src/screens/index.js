import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash';
import Home from './Home';
import SignIn from './SignIn';

const Stack = createStackNavigator();

const AppNavigator = props => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen 
                name="Splash" 
                component={Splash} />
                <Stack.Screen 
                name="Home" 
                component={Home} />
                <Stack.Screen 
                name="SignIn" 
                component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
