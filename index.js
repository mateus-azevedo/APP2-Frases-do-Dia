import React from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';

const Estilos = {
    
    principal: {
        backgroundColor: '#538530',
        flex: 1
    },
    
};

const botaoPressionado = () => {

}

const App = () => {
    const { principal } = Estilos;
    return(
        <View style={principal}>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);