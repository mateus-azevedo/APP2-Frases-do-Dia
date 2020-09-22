import React from 'react';
import { AppRegistry, View, Text, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
    
    principal: {
        backgroundColor: '#E6CCBE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoSub: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#538530'
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
    numeroAleatorio = Math.floor(numeroAleatorio * 10);

    var frases = Array();
    frases[0] = '"Pode ser voluntária no nosso tbm. Se quiser kk"';
    frases[1] = '"Vão querer fazer call hoje ?"';
    frases[2] = '"Será q o Vinicius jogou o trabalho no ava?"';
    frases[3] = '"Mlk carente demais quer atençao adota um animal"';
    frases[4] = '"sim!!! estou sem mic"';
    frases[5] = '"funciona, mas n entendi como tá funcionando essa recursividade"';
    frases[6] = '"Lança uma gambiarra"';
    frases[7] = '"Perguntinha rápida, vocês fazem fluxograma antes de fazer o código?"';
    frases[8] = '"A parada é marcar uma call , td mundo entra"';
    frases[9] = '"sem pressão aqui é xandão"';

    var fraseEscolhida = frases[ numeroAleatorio ];
    
    Alert.alert(fraseEscolhida);
}

const App = () => {
    const { principal, textoSub, botao, textoBotao } = Estilos;
    return(
        <View style={principal}>

            <Image source={require('./imgs/logo.png')} />
            <Text style={textoSub}>DreamTeam</Text>
            <TouchableOpacity 
                onPress={gerarNovaFrase}
                style={botao}>

                <Text style={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);