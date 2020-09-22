import React from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';

const Estilos = {
    
    principal: {
        paddingTop: 40
    },
    imagem: {
        justifyContent: 'center'
    }
    
};

const App = () => {
    const { principal, imagem } = Estilos;
    return(
        <View style={principal}>

            <Image style={imagem} source={ require('./imgs/uvas.png') } >
                <Text>Legenda para a foto</Text>
            </Image>
            
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);