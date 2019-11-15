import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Colors from '../constants/Colors';

const StartScreen = props => {

    const toGame = () => {
        props.navigation.navigate('Game')
    }

    return (
        <View style={styles.screen}>
            <Text>Boggle</Text>
            <Button title='start' onPress={toGame}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: Colors.primary
    }
})

export default StartScreen;