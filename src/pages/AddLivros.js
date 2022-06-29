import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet,Button } from 'react-native'
import {  NativeBaseProvider } from 'native-base';
import { useRoute } from '@react-navigation/native';



export default ({ route, navigation }) => {
    const [addLivro, setAddLivro] = useState(route.params ? route.params : {})
    return (
        <NativeBaseProvider>
            <View style={style.form}>
                <Text>AUTHOR</Text>
                <TextInput
                    style={style.input}
                    onChangeText={author => (setAddLivro({ ...addLivro, author }))}
                    placeholder=" Informe o author do livro"
                    value={addLivro.author}
                />

                <Text>TITLE</Text>
                <TextInput
                    style={style.input}
                    onChangeText={title => (setAddLivro({ ...addLivro, title }))}
                    placeholder=" Informe o title do livro"
                    value={addLivro.title}
                />

                <Text>URL</Text>
                <TextInput
                    style={style.input}
                    onChangeText={url => (setAddLivro({ ...addLivro, url }))}
                    placeholder=" Informe o title do livro"
                    value={addLivro.url}
                />
                <Button 
                title='SALVAR'
                onPress={() => {
                    navigation.goBack()
                }}
                />


            </View>
        </NativeBaseProvider>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },

    input: {
        height: 40,
        borderColor: 'skyblue',
        borderWidth: 1,
        marginBottom: 10
    }
})