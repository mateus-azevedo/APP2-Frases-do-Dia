import React from 'react';
import { View, Text, AppRegistry, TouchableOpacity } from 'react-native';

const Estilos = {
    
    principal: {
        paddingTop: 40
    },
    botao: {
        backgroundColor: '#fff',
        padding: 10,
        borderColor: '#1d8eb8',
        borderWidth: 1,
        borderRadius: 8
    },
    textoBotao: {
        color: '#48BBEC',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
    
};

const botaoPressionado = () => {
    alert('Botão Pressionado');
}

const App = () => {
    const { principal, botao, textoBotao } = Estilos;
    return(
        <View style={principal}>

            <TouchableOpacity style={botao}>
                <Text style={textoBotao}>Clique Aqui</Text>
            </TouchableOpacity>
            
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);