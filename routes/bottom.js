import React from 'react';
import routes from '../utils/routes';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import { Ionicons } from '@expo/vector-icons';
import FavouritePage from '../pages/favourite';
import IconWithBadge from '../components/icon.badge';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import ProfilePage from '../pages/profile';



const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    const { isLogged } = useSelector(state => state.user.user)
    const Tabs = [
        { title: 'Home', component: HomePage, route: routes.HOME },
        { title: 'Favourite', component: FavouritePage, route: routes.FAVOURITES },
        { title: 'Profile', component: isLogged ? ProfilePage : LoginPage, route: routes.PROFILE },
    ];
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
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
                        default:
                            iconName = 'circle';
                    }

                    return route.name === routes.FAVOURITES ? (
                        <IconWithBadge name={iconName} color={color} size={size} focused={focused} />
                    ) : (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                headerShown: false,
                tabBarStyle: {
                    left: 0,
                    right: 0,
                    borderTopWidth: 0,
                    position: 'absolute',
                    shadowColor: 'transparent',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                },
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: 'gray',
            })
            }
        >
            {Tabs.map((tab) => (
                <Tab.Screen
                    key={tab.title}
                    name={tab.route}
                    component={tab.component}
                    // options={{ title: '' }}
                    options={{ title: tab.title }}
                />
            ))}
        </Tab.Navigator>
    );
}
