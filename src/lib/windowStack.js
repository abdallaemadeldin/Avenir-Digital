import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from 'src/screens/Splash/Splash';
import Home from 'src/screens/Home/Home';
import Profile from 'src/screens/Profile/Profile';

const Stack = createNativeStackNavigator();

export default WindowStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, animation: "slide_from_bottom" }} />
                <Stack.Screen name="Home" component={Home} options={{ animation: "slide_from_bottom" }} />
                <Stack.Screen name="Profile" component={Profile} options={{
                    animation: "slide_from_right",
                    headerStyle: { backgroundColor: '#f1f1f1' },
                    headerTintColor: "#000",
                    title: '',
                    headerBackTitle: "back"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}