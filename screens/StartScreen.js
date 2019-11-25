import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground} from 'react-native';
import Colors from '../constants/Colors';
import StartButton from '../components/StartButton';
import MainButton from '../components/MainButton';

const StartScreen = props => {

    const [minutes, setMinutes] = useState(2);
    const seconds = minutes * 60;

    const toOneOnOneMode = () => {
        props.navigation.navigate('OneOnOneMode', {seconds: seconds})
    }
    const toGroupMode = () => {
        props.navigation.navigate('GroupMode', {seconds: seconds})
    }
    const toRules = () => {
        props.navigation.navigate('Rules')
    }

    const addMins = () => {
        if (minutes < 10) {
            setMinutes(minutes + 1)
        }
    }
    const subMins = () => {
        if (minutes >= 2) {
            setMinutes(minutes - 1)
        }
    }

    return (
        <View style={{ flex: 1}}>
        <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.screen}>
                <Text style={styles.title}>Boggle</Text>
                <View style={styles.buttons}>
                    <StartButton onClick={toOneOnOneMode}>1-ON-1 MODE</StartButton>
                    <StartButton onClick={toGroupMode}>GROUP MODE</StartButton>
                </View>
                <MainButton onClick={toRules}>RULES</MainButton>
                </View>
           </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
    },
    title: {
        fontSize: 75,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'avenir-heavy',
        marginBottom: '20%',

    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: '5%'
    }, 
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,

    },
    text: {
        fontSize: 30,
        color: 'white'
    },
    startButton: {
        marginTop: 50,
    },
    image: {
        height: 20,
        width: 20,
    },
    imageLeft: {
        height: 20,
        width: 20,
        transform: [{rotate: '180deg'}]
    },
    buttons: {
        marginTop: 50,
    }
})

export default StartScreen;