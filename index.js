import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Estilos = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        height: 80
    }
};

const App = () => {
    return(
        <View>
            <Text style={ Estilos.estiloTexto }>Frases do dia</Text>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);