import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';


import { FontAwesome5 } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import axios from 'axios';

export default props => {

    const [buscaText, setBuscaText] = useState('');
    const [dados, setDatos] = useState('');



    async function getDados() {
        try {
            const response = await axios.get(`https://hn.algolia.com/api/v1/search/?query=${buscaText}`);
            //BUSCA POR UM AUTOR ESPECIFICO: https://hn.algolia.com/api/v1/search/?query=tags=author_:${buscaText}
            setBuscaText([])
            console.log(response.data.hits);
            setDatos(response.data.hits);

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(getDados, []);

   
    const getActions = (item) => {
        const navigation = useNavigation();
        return (
            <>
                
                <TouchableOpacity style={styles.btn_edit}  onPress={() => navigation.navigate('AddLivros', item)}>
                    <Feather name="edit" size={20} color="white" />
                </TouchableOpacity>

            </>

        )
    }
/*
    function alertRemove(item){
       Alert.alert('EXCLUIR LIVRO', 'Deseja excluir esse livro', [
        {
        text: 'SIM',
        onPress(){
            console.warn('DELETANDO ' + item.id) 
        }
       },
       {
        text: 'NÃO'
       }
       
       ])
    }
*/
    const EditLivro = ({ item }) => {
        return (         
            <ListItem>
                <ListItem.Content>
                <View style={styles.containerLivros}>

                    <Text style={styles.textAuthor}><Entypo name="user" size={24} color="black" />
                    <Text style={{fontWeight: "bold"}}>author : </Text>{item.author} </Text>

                    <Text style={styles.textTitle}><FontAwesome name="book" size={24} color="black" />
                    <Text style={{fontWeight: "bold"}}>title : </Text>{item.title}</Text>

                    <Text style={styles.textUrl}><Feather name="link" size={24} color="black" />
                    <Text style={{fontWeight: "bold"}}>url:</Text> {item.url}</Text>
                  
                </View>

                </ListItem.Content>

                <View>
                {getActions(item)}
                </View>
                
            </ListItem>


        );
    };


    return (

        <View  style={{
            flex: 1
          }}>

            <FlatList
                data={dados}
                keyExtractor={(item) => item.objectID}
                renderItem={({ item, index }) => <EditLivro item={item} />
                }

            />

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 110,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: -6,
    },

  
    viewColuna: {
        flexDirection: 'row',
        marginBottom: 0
    },

   

    requisicao: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    containerLivros: {
        backgroundColor: 'skyblue',
        borderRadius: 5,
        height: 160,
        width: 400,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin:5,
        padding: 15,
        position: 'relative'
    },

    viewAuthor: {

    },

    textAuthor: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        fontSize: 15
    },

    viewTitle: {

    },

    textTitle: {
        fontSize: 15
    },

    viewUrl: {

    },

    textUrl: {
        fontSize: 15
    },

    textItem: {

    },

    btn_edit: {
        margin: 15,
        marginTop: 15,
        alignSelf: 'center',
        backgroundColor:'orange',
        padding:8,
        borderRadius:5
    }

});
