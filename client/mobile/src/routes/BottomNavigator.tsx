import React from 'react';
import { Home, Favorites, Categories, MyOrders, Profile } from '../pages';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/colors';

const Tab = createMaterialBottomTabNavigator();


const BottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home'
            activeColor={colors.red}
            inactiveColor={'gray'}
            barStyle={{ backgroundColor: 'white' }}
            keyboardHidesNavigationBar={true}
            sceneAnimationEnabled={true}
           

        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={25} />
                    ),
                }}
                name="Home"
                component={Home} />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="heart" color={color} size={25} />)
                }}
                name="Favorites"
                component={Favorites} />

            <Tab.Screen
                name="Categories"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="apps" color={color} size={25} />
                    )
                }}

                component={Categories} />

            <Tab.Screen
                name="MyOrders"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="cart" color={color} size={25} />)
                }}
                component={MyOrders} />

            <Tab.Screen
                name="Profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" color={color} size={25} />)
                }}
                component={Profile} />
        </Tab.Navigator>
    );
}

export default BottomNavigator;