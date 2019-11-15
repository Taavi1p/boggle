import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Colors from '../constants/Colors';

const StartScreen = props => {

    const toGame = () => {
        props.navigation.navigate('Game')
    }
    const toRules = () => {
        props.navigation.navigate('Rules')
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Boggle</Text>
            <Button title='start' onPress={toGame} style={styles.startButton}></Button>
            <Button title='rules' onPress={toRules} style={styles.rulesButton}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 30,
    },
    title: {
        fontSize: 60,
        color: 'white',
        textAlign: 'center'
    },
    startButton: {
        marginTop: 50,
    }
})

export default StartScreen;