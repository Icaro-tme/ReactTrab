{/* <Stack.Screen name="SignUp" component={SignUpScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}

// Compare this snippet from src\routes\AppRouts.js:

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header';
import SignUpScreen from '../pages/SignUpScreen';
import LoginScreen from '../pages/LoginScreen';
import ForgotPasswordScreen from '../pages/ForgotPasswordScreen';
import DashboardScreen from '../pages/DashboardScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function AuthRoutes (){

    return (
        <Stack.Navigator
        screenOptions={({ navigation }) => ({
        header: () => <Header navigation={navigation} />,
        })}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
    );
}



