import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from 'src/screens/Splash/Splash';
import Home from 'src/screens/Home/Home';

const Stack = createNativeStackNavigator();

export default WindowStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}