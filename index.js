import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Estilos = {
    
    principal: {
        flex: 1, //ocupa um espaço de um total de uma parte 1:1
        backgroundColor: 'cornflowerblue'
    },
    conteudo1: {
        backgroundColor: 'brown'
    },
    conteudo2: {
        backgroundColor: 'yellowgreen'
    },
    conteudo3: {
        backgroundColor: 'orangered'
    },
    
};

const App = () => {
    const { principal, conteudo1, conteudo2, conteudo3 } = Estilos;
    return(
        <View style={ principal }>
            <Text style={ conteudo1 }>Topo</Text>
            <Text style={ conteudo2 }>Conteudo</Text>
            <Text style={ conteudo3 }>Rodape</Text>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);