import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Contats() {

    return (
        <View style={styles.container}>
            <Text>CONTATOS E REDES SOCIAIS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
})