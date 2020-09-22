import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Estilos = {
    
    principal: {
        flex: 1, 
        backgroundColor: 'cornflowerblue'
    },
    topo: {
        flex: 1, //1:3
        backgroundColor: 'brown'
    },
    conteudo: {
        flex: 1, //1:3
        backgroundColor: 'yellowgreen'
    },
    rodape: {
        flex: 1, //1:3
        backgroundColor: 'orangered'
    },
    
};

const App = () => {
    const { principal, topo, conteudo, rodape } = Estilos;
    return(
        <View style={ principal }>
            <Text style={ topo }>Topo</Text>
            <Text style={ conteudo }>Conteudo</Text>
            <Text style={ rodape }>Rodape</Text>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);