import { View } from 'native-base'
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { ScreenStackHeaderRightView } from 'react-native-screens'
import { Button, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import Casa from './pages/Casa'
import Home from './pages/Home'
import AddLivros from './pages/AddLivros'
import LivrosList from './pages/LivrosList'
import EditLivros from './pages/EditLivros'
import RemoverLivros from './pages/RemoverLivros'


import Conta_user from './pages/pages_bottom_tab/Conta_user'
import Contats from './pages/pages_bottom_tab/Contats'
import Config from './pages/pages_bottom_tab/Config'
import Compartilhar from './pages/pages_bottom_tab/Compartilhar'
import { LivrosProvider } from './pages/contexto/LivrosContext'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyAbas() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Casa"
                component={Casa}
                options={{
                    title: " ",
                    tabBarLabel: 'HOME',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={'skyblue'} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Contats"
                component={Contats}
                options={{
                    title: "CONTATOS",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="email-plus-outline" color={'skyblue'} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Config"
                component={Config}
                options={{
                    title: "CONFIGURAÇÃO",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cog-outline" color={'skyblue'} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Compartilhar"
                component={Compartilhar}
                options={{
                    title: "COMPARTILHAR",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="share-variant" color={'skyblue'} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>

    )
}
function MyStack() {
    return (

        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='HOME' options={{ title: "ANAGNOS - LEITURA" }} component={MyAbas} />
            <Stack.Screen name='Conta_user' component={MyAbas} />
            <Stack.Screen name='LivrosList' options={{ title: "LISTA DE LIVROS" }} component={LivrosList} />
            <Stack.Screen name='AddLivros' options={{ title: "FORMULARIO DE LIVRO" }} component={AddLivros} />
            <Stack.Screen name='EditLivros' options={{ title: "EDITAR LIVRO" }} component={EditLivros} />
            <Stack.Screen name='RemoverLivros' options={{ title: "REMOVER LIVRO" }} component={RemoverLivros} />
        </Stack.Navigator>


    );
}
const screenOptions = {
    headerStyle: {
        backgroundColor: 'skyblue',
    },
    
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
        alignItems: 'center',
    },
    tabBarStyle:{
        backgroundColor:'skyblue'

    },
}

export default function App() {


    return (
        <LivrosProvider>
        <NavigationContainer>
            <MyStack />

        </NavigationContainer>
        </LivrosProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: -6,
    },
    headerStyle: {
        backgroundColor: 'orange',

    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 15,
    },

});