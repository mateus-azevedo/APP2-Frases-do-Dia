import React from 'react';
import { AppRegistry, View, Text, Image } from 'react-native';

const Estilos = {
    
    principal: {
        paddingTop: 40
    }
    
};

const App = () => {
    const { principal } = Estilos;
    return(
        <View style={principal}>

            <Image source={ require('./imgs/uvas.png') } />
            
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);