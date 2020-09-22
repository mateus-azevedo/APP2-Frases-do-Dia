import React from 'react';
import { View, Text, AppRegistry, Button } from 'react-native';

const Estilos = {
    
    principal: {
        paddingTop: 40
    }
    
};

const botaoPressionado = () => {
    alert('Botão Pressionado');
}

const App = () => {
    const { principal } = Estilos;
    return(
        <View style={principal}>

            <Button 
                onPress={ botaoPressionado }
                title="Clique Aqui"
                color="#841584"
                accessibilityLabel="Clique para abrir as notícias"
            />
            
        </View>
    );
};

AppRegistry.registerComponent('app2', () => App);