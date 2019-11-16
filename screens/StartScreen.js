import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native';
import Colors from '../constants/Colors';
import StartButtom from '../components/StartButton';
import MainButton from '../components/MainButton';

const StartScreen = props => {

    const optionsArray = ['show', 'hidden', 'none']
    const [minutes, setMinutes] = useState(2);
    const [optionNum, setOptionNum] = useState(0)
    let option = <Text style={styles.text}>{optionsArray[optionNum]}</Text>

    const toGame = () => {
        props.navigation.navigate('Game')
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

    const timerOptionsLast = () => {
        if (optionNum === 0) {
            setOptionNum(2);
        } else {
            setOptionNum(optionNum - 1)
        }
    }

    const timerOptionsNext = () => {
        if (optionNum === 2) {
            setOptionNum(0)
        }else {
            setOptionNum(optionNum + 1)
        }
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Boggle</Text>
            <View style={styles.container}>
                <Text style={styles.text}>timer</Text>
                <View style={styles.box}>
                    <TouchableOpacity onPress={timerOptionsLast}>
                        <Image style={styles.imageLeft} source={require('../assets/arrow.png')} />
                    </TouchableOpacity>
                    {option}
                    <TouchableOpacity onPress={timerOptionsNext}>
                        <Image style={styles.image} source={require('../assets/arrow.png')} />
                    </TouchableOpacity>
                </View>
            </View>
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
        fontWeight: 'bold',
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
        width: 130,

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
    }
})

export default StartScreen;