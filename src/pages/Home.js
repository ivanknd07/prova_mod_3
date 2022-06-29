import React, { useState } from 'react';
import { StyleSheet, View, touchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LivrosList from './LivrosList';
import AddLivros from './AddLivros';
import EditLivros from './EditLivros';
import RemoverLivros from './RemoverLivros';

const Tab = createBottomTabNavigator();
export default function Home() {

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="LivrosList"
                component={LivrosList}
                options={{
                    tabBarLabel: 'LivrosList',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bookmark-box-multiple" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="AddLivros"
                component={AddLivros}
                options={{
                    tabBarLabel: 'AddLivros',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-plus-multiple" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="EditLivros"
                component={EditLivros}
                options={{
                    tabBarLabel: 'EditLivros',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="file-document-edit" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="RemoverLivros"
                component={RemoverLivros}
                options={{
                    tabBarLabel: 'RemoverLivros',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="close-box-multiple" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}