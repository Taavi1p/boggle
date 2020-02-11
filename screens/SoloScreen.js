import React, {useState} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import DynamicBoard from '../components/DynamicBoard';

const SoloScreen = props => {

    let score = 0;
    let time = 10;
    const [timer, setTimer] = useState();
    const [firstRender, setFirstRender] = useState(true);

    const toStart = () => {
        clearInterval(intervally);
        props.navigation.navigate('Start')
    }

    const toTimeOver = () => {
        clearInterval(intervally);
        props.navigation.navigate({routeName: 'TimeOver', params: {score: score}})
    }

    const tick = () => {
    
        let min = Math.floor(time / 60);
        let sec = time - (min * 60);
    
        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min === 0 && sec == '00'){
            clearInterval(intervally);
            toTimeOver();
        }

    
        setTimer(min.toString() + ':' + sec.toString());
        time--;
    }

    if(firstRender) {
        console.log('starting the timer');
        intervally = setInterval(tick, 1000);
        setFirstRender(false);
    }

    return (
        <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
            <CustomHeader noColor={true} onClick={toStart}>end game</CustomHeader>
            <View style={styles.timerBox}>
                <Image style={styles.timerImage} source={require('../assets/timer.png')} />
                <Text style={styles.time}>{timer ? timer : '3:00'}</Text>
            </View>
            <View style={styles.scoreBox}>
                <Text style={styles.score}>{score}</Text>
            </View>
            <View style={styles.boardBox}>
                <DynamicBoard />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
    scoreBox: {
        alignItems: 'center',
    },
    score: {
        color: 'white',
        fontSize: 70,
    }
})

export default SoloScreen;