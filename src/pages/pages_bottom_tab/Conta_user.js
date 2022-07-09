import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Conta_user() {

    return (
        <View style={styles.container}>
            <Text>CONTA USUARIO</Text>
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