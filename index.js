import React from 'react';
import { View, Text, AppRegistry, TouchableOpacity } from 'react-native';

const Estilos = {
    
    principal: {
        paddingTop: 40
    },
    botao: {
        backgroundColor: '#48BBEC',
        padding: 20
    },
    textoBotao: {
        color: '#fff',
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