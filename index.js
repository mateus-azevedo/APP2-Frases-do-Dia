import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Estilos = {
    estiloTexto: {
        fontSize: 30,
        backgroundColor: '#08509B',
        // height: 60,   //Tirando o tamanho fixo dos componentes da minha View
        // width: 60,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    estiloTexto2: {
        fontSize: 30,
        backgroundColor: '#2A48FA',
        // height: 60,   //Tirando o tamanho fixo dos componentes da minha View
        // width: 60,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    estiloView: {
        backgroundColor: 'skyblue',
        height: 600,
        justifyContent: 'space-between',
        alignItems: 'stretch', //stretch é o valor padrão do alignItems. Só funciona quando não tenho um tamanho fixo para os componentes dentro da View
        flexDirection: 'column'
    }
};

const App = () => {
    const { estiloTexto, estiloTexto2, estiloView } = Estilos;
    return(
        <View style={ estiloView }>
            <Text style={ estiloTexto }>A</Text>
            <Text style={ estiloTexto2 }>B</Text>
            <Text style={ estiloTexto }>C</Text>
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);