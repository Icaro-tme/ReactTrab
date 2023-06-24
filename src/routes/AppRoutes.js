import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header';
import MovieScreen from '../pages/MovieScreen';
import SignUpScreen from '../pages/SignUpScreen';
import LoginScreen from '../pages/LoginScreen';
import ForgotPasswordScreen from '../pages/ForgotPasswordScreen';
import DashboardScreen from '../pages/DashboardScreen';

import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function AppRoutes (){
    return (
        <Stack.Navigator
        screenOptions={({ navigation }) => ({
        header: () => <Header navigation={navigation} />,
        })}
        >
            
            <Stack.Screen name="Movie" component={MovieScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
        
        </Stack.Navigator>
    );
};