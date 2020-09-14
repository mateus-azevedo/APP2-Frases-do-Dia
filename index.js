import React from 'react';
import { View, Text, AppRegistry, TouchableWithoutFeedback } from 'react-native';

const Estilos = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        marginHorizontal: 10,
        paddingVertical: 20
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