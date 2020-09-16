import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Estilos = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        paddingTop: 15,
        color: '#fff',
        fontStyle: 'italic',
        fontWeight: '100',
        textAlign: 'center',
        textDecorationLine: 'underline'
        
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0, 
        //     height: 2,
        // },
        // shadowOpacity: 0.4
    }
};

const App = () => {
    return(
        <View style={{elevation: 3}}>
            <Text style={ Estilos.estiloTexto }>Frases do dia</Text>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);