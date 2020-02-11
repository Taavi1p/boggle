import React, {useState} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import Colors from '../constants/Colors';
import StartButton from '../components/StartButton';
import MainButton from '../components/MainButton';

const StartScreen = props => {

    const [minutes, setMinutes] = useState(2);
    const seconds = minutes * 60;

    const toOneOnOneMode = () => {
        props.navigation.navigate('OneOnOneMode')
    }
    const toGroupMode = () => {
        props.navigation.navigate('GroupMode')
    }
    const toRules = () => {
        props.navigation.navigate('Rules')
    }

    const toSoloMode = () => {
        props.navigation.navigate('Solo')
    }

    return (
        <View style={{ flex: 1}}>
        <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.screen}>
                <Text style={styles.title}>Boggle</Text>
                <View style={styles.buttons}>
                    <View style={styles.buttonBox}>
                        <StartButton style={styles.purple} onClick={toSoloMode}>SOLO MODE</StartButton>
                    </View>
                    <View style={styles.buttonBox}>
                        <StartButton style={styles.green} onClick={toOneOnOneMode}>1-ON-1 MODE</StartButton>
                    </View>
                    <View style={styles.buttonBox}>
                        <StartButton style={styles.red} onClick={toGroupMode}>GROUP MODE</StartButton>
                    </View>
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
    green: {
        backgroundColor: '#3399ff',
        borderColor: '#0066ff',
    },
    red: {
        backgroundColor: '#33cc33',
        borderColor: '#009933'
    },
    purple: {
        backgroundColor: '#9966ff',
        borderColor: '#9933ff',
    },
    buttonBox: {
        height: 60,
        flexDirection: 'row',
        marginTop: 20,
    },
    dummy: {
        height: 1,
        width: 30,
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