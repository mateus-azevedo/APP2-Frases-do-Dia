import React from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

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

const gerarNovaFrase = () => {
    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);

    var frases = Array();
    frases[0] = 'aa';
    frases[1] = 'bb';
    frases[2] = 'cc';
    frases[3] = 'dd';
    frases[4] = 'ee';

    var fraseEscolhida = frases[ numeroAleatorio ];
    
    Alert.alert(fraseEscolhida);
}

const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return(
        <View style={principal}>

            <Image source={require('./imgs/logo.png')} />
            <TouchableOpacity 
                onPress={gerarNovaFrase}
                style={botao}>

                <Text style={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);