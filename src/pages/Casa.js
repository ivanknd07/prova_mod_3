import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default class Homme extends Component {
    constructor(props) {
        super(props)
        this.irAddLivro = this.irAddLivro.bind(this)
        this.irEditLivro = this.irEditLivro.bind(this)
        this.irLivroList = this.irLivroList.bind(this)
        this.irRemoverLivros = this.irRemoverLivros.bind(this)
    }

    irLivroList() {
        this.props.navigation.navigate("LivrosList")
    }

    irAddLivro() {
        this.props.navigation.navigate("AddLivros")
    }

    irEditLivro() {
        this.props.navigation.navigate("EditLivros")
    }

    irRemoverLivros() {
        this.props.navigation.navigate("RemoverLivros")
    }

    render() {

        const Tab = createBottomTabNavigator()
        const Stack = createStackNavigator()
     
        return (
         
            <View style={styles.container}>

                <TouchableOpacity style={styles.btn_home} onPress={this.irLivroList}>

                    <Ionicons name="library" size={100} color="skyblue" />
                    <Text style={styles.textBtn}>BIBLIOTECA</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_home} onPress={this.irAddLivro}>

                    <AntDesign name="addfolder" size={100} color="skyblue" />
                    <Text style={styles.textBtn}>ADICIONAR LIVRO</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_home} onPress={this.irEditLivro}>

                    <FontAwesome name="edit" size={100} color="skyblue" />
                    <Text style={styles.textBtn}>EDITAR LIVRO</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_home} onPress={this.irRemoverLivros}>

                    <AntDesign name="delete" size={100} color="skyblue" />
                    <Text style={styles.textBtn}>EXCLUIR LIVRO</Text>

                </TouchableOpacity>

            </View>
           
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },


    btn_home: {
        margin: 30,
    },

    textBtn: {
        color: 'skyblue',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center'
    }



})