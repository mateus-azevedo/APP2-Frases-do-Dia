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

            <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
                   style={{width: 400, height: 400}} />
            
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);