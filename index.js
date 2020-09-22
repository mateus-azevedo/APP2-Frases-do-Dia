import React from 'react';
import { AppRegistry, View, Text, ImageBackground } from 'react-native';

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

            <ImageBackground style={imagem} source={ require('./imgs/uvas.png') } >
                <Text>Legenda para a foto</Text>
            </ImageBackground>
            
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);