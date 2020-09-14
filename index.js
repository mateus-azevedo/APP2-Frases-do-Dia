import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Estilos = {
    estiloTexto: {
        fontSize: 20,
        backgroundColor: '#08509B',
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, 
            height: 2,
        },
        shadowOpacity: 0.4
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