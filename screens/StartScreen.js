import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native';
import Colors from '../constants/Colors';
import StartButtom from '../components/StartButton';
import MainButton from '../components/MainButton';

const StartScreen = props => {

    const [minutes, setMinutes] = useState(2);
    const [isSoloMode, setIsSoloMode] = useState(false);
    const [is1on1Mode, setIs1on1Mode] = useState(false);
    const [isGroupMode, setIsGroupMode] = useState(false);

    const toGame = () => {
        props.navigation.navigate({routeName: 'Game', params: {
            isSoloMode: isSoloMode, is1on1Mode: is1on1Mode, isGroupMode: isGroupMode, minutes: minutes
        }})
    }
    const toRules = () => {
        props.navigation.navigate('Rules')
    }

    const startSoloGame = () => {
        setIsSoloMode(true);
        setIs1on1Mode(false);
        setIsGroupMode(false);
        console.log('-----------------------');
        console.log('solo mode  ' + isSoloMode);
        console.log('1on1 mode  ' + is1on1Mode);
        console.log('group mode  ' + isGroupMode);
        toGame();
    }

    const start1on1Game = () => {
        setIsSoloMode(false);
        setIs1on1Mode(true);
        setIsGroupMode(false);
        toGame();
    }

    const startGroupGame = () => {
        setIsSoloMode(false);
        setIs1on1Mode(false);
        setIsGroupMode(true);
        toGame();
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
        <View style={styles.screen}>
            <Text style={styles.title}>Boggle</Text>
            <View style={styles.container}>
                <Text style={styles.text}>minutes</Text>
                <View style={styles.box}>
                    <TouchableOpacity onPress={subMins}>
                        <Image style={styles.imageLeft} source={require('../assets/arrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{minutes}</Text>
                    <TouchableOpacity onPress={addMins}>
                        <Image style={styles.image} source={require('../assets/arrow.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttons}>
                <StartButtom onClick={startSoloGame}>SOLO GAME</StartButtom>
                <StartButtom onClick={start1on1Game}>1-ON-1 MODE</StartButtom>
                <StartButtom onClick={startGroupGame}>GROUP MODE</StartButtom>
            </View>
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
        fontFamily: 'avenir-heavy',
        marginBottom: 40,

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