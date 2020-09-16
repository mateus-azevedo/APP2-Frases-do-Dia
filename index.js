import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Estilos = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        height: 60,
        width: 60,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    estiloTexto2: {
        fontSize: 30,
        backgroundColor: '#2A48FA',
        height: 60,
        width: 60,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    estiloView: {
        backgroundColor: 'skyblue',
        height: 300,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
};

const App = () => {
    const { estiloTexto, estiloTexto2, estiloView } = Estilos;
    return(
        <View style={ estiloView }>
            <Text style={ estiloTexto }>A</Text>
            <Text style={ estiloTexto2 }>B</Text>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);