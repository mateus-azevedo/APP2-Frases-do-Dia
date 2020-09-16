import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Estilos = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        height: 60,
        width: 60
    },
    estiloView: {
        backgroundColor: 'skyblue',
        height: 300,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
};

const App = () => {
    const { estiloTexto, estiloView } = Estilos;
    return(
        <View style={ estiloView }>
            <Text style={ estiloTexto }></Text>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);