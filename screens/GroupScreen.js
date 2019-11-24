import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

import StaticBoard from '../components/StaticBoard';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const GameScreen = props => {

    let time = 180;
    const [timer, setTimer] = useState();
    const [firstRender, setFirstRender] = useState(true);


    const toStart = () => {
        clearInterval(intervally);
        props.navigation.navigate('Start')
    }

    const tick = () => {
    
        let min = Math.floor(time / 60);
        let sec = time - (min * 60);
    
        //add a leading zero (as a string value) if seconds less than 10
        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min === 0 && sec == '00'){
            console.log('clear');
            clearInterval(intervally);
        }

    
        setTimer(min.toString() + ':' + sec.toString());
        time--;
    }

    if(firstRender) {
        console.log('starting the timer');
        intervally = setInterval(tick, 1000);
        setFirstRender(false);
    }

    let GameOver = <Text style={styles.timesUp}>Time's up!</Text>

    return (
        <View style={{flex: 1}}>
             <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
            <CustomHeader noColor={true} onClick={toStart}>end game</CustomHeader>
        <View style={styles.screen}>
            <View style={styles.timerBox}>
                <Image style={styles.timerImage} source={require('../assets/timer.png')} />
                <Text style={styles.time}>{timer ? timer : '3:00'}</Text>
            </View>
            <View style={styles.boardBox}>
                <StaticBoard />
            </View>
            <View style={styles.blankBox}></View>
        </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    timesUp: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'avenir-heavy',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 40
    },
    timerBox: {
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: 150,
    },
    timerImage:{
        width: 30,
        height: 30,
    },
    time: {
        fontSize: 35,
        color: 'white',
        marginLeft: 10,
    },
    boardBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    blankBox: {
        width: '100%',
        height: 35
    },
})

export default GameScreen;