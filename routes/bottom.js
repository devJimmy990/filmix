import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '../utils/routes';
import HomePage from '../pages/home';
import FavouritePage from '../pages/favourite';
import LoginPage from '../pages/login';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case routes.HOME:
                            iconName = 'home';
                            break;
                        case routes.FAVOURITES:
                            iconName = 'heart';
                            break;
                        case routes.PROFILE:
                            iconName = 'person';
                            break;
                    }
                    if (route.name === routes.HOME) {
                        iconName = 'home';
                    } else if (route.name === routes.FAVOURITES) {
                        iconName = 'heart';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                style: { backgroundColor: 'red' }, // Set background color of tab bar
                activeTintColor: 'red', // Set color for active tab
                inactiveTintColor: 'gray', // Set color for inactive tab
            }}
        >
            <Tab.Screen name={routes.HOME} component={HomePage} options={{ headerShown: false, title: "Home" }} />
            <Tab.Screen name={routes.FAVOURITES} component={FavouritePage} options={{ headerShown: false, title: "Favourite" }} />
            <Tab.Screen name={routes.PROFILE} component={LoginPage} options={{ headerShown: false, title: "Favourite" }} />
        </Tab.Navigator>
    );
}