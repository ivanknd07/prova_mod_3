import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import uuid from 'react-native-uuid';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import axios from 'axios';

export default function LivrosList() {

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

 useEffect(getDados,[]);

  
  return (

    <View style={styles.container}>

      <Text style={styles.Title}> ANAGNOS - LEITURA </Text>

      <View style={styles.viewColuna}>

        <TextInput style={styles.input} placeholder="Ditige um Author" onChangeText={(t) => setBuscaText(t)} value={buscaText}></TextInput>

        <TouchableOpacity style={styles.btn_pesquisa} onPress={getDados}>

          <FontAwesome5 name="search" size={30} color="white" />


        </TouchableOpacity>

      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.objectID}
        renderItem={({ item }) => (

          <View style={styles.containerLivros}>
              <Text style={styles.textAuthor}><Entypo name="user" size={24} color="black" />
                    <Text style={{fontWeight: "bold"}}>author : </Text>{item.author} </Text>

                    <Text style={styles.textTitle}><FontAwesome name="book" size={24} color="black" />
                    <Text style={{fontWeight: "bold"}}>title : </Text>{item.title}</Text>

                    <Text style={styles.textUrl}><Feather name="link" size={24} color="black" />
                    <Text style={{fontWeight: "bold"}}>url:</Text> {item.url}</Text>

          </View>
        )
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

  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 15,
    color:"skyblue" 
  },

  input: {
    height: 40,
    width: 250,
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    borderColor: 'skyblue',
    flexDirection: 'row'
  },

  viewColuna: {
    flexDirection: 'row',
    marginBottom: 0,
  },

  btn_pesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 35,
    marginTop: -4,
    backgroundColor: 'skyblue',
    width: 50,
    height: 50,
    borderRadius: 60 / 2,
  },

  containerLivros: {
    backgroundColor: 'skyblue',
    borderRadius: 5,
    height: 160,
    width: 400,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 15,
    padding: 5, 
    position:'relative'
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


});
