import React from 'react';
import { AppRegistry, View, Text, ImageBackground } from 'react-native';

const Estilos = {
    
    principal: {
        paddingTop: 40
    },
    imagem: {
        justifyContent: 'flex-end'
    }
    
};

const App = () => {
    const { principal, imagem } = Estilos;
    return(
        <View style={principal}>

            <ImageBackground style={imagem} style={{width: '70%', height: '70%'}} source={ require('./imgs/uvas.png') } >
                <Text style={{color:'red', fontWeight: 'bold', fontSize: 20}}>Legenda para a foto</Text>
            </ImageBackground>
            
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);