import React from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity } from 'react-native';

const Estilos = {
    
    principal: {
        backgroundColor: '#ff1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
    
};

const botaoPressionado = () => {

}

const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return(
        <View style={principal}>

            <Image source={require('./imgs/logo.png')} />
            <TouchableOpacity style={botao}>
                <Text style={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);