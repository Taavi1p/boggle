import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Colors from '../constants/Colors';
import StartButtom from '../components/StartButton';
import MainButton from '../components/MainButton';

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
            <StartButtom onClick={toGame} />
           <MainButton onClick={toRules}>RULES</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    startButton: {
        marginTop: 50,
    }
})

export default StartScreen;