import React from 'react';
import HomePage from '../pages/home';
import routes from '../utils/routes';
import { StyleSheet } from 'react-native';
import MovieDetailsPage from '../pages/movie_details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomRoutes from './bottom';

const stack = createNativeStackNavigator();
export default function StackRoutes() {
    return (
        <stack.Navigator>
            {/* <stack.Screen name={routes.HOME} component={HomePage} options={{ headerShown: false }} /> */}
            <stack.Screen name={routes.DRAWER} component={BottomRoutes} options={{ headerShown: false }} />
            <stack.Screen name={routes.DETAILS} component={MovieDetailsPage} options={{ title: "", headerShown: false }} />
        </stack.Navigator>
    );
}

const styles = StyleSheet.create({})

