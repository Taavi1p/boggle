import React, {useState} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import DynamicBoard from '../components/DynamicBoard';

const SoloScreen = props => {
    let time = 120;
    let score = 0;
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
        //check against an array of already submitted words
        <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
            <CustomHeader noColor={true} onClick={toStart}>end game</CustomHeader>
            <View style={styles.timerBox}>
                <Text style={styles.time}>{timer ? timer : '2:00'}</Text>
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
        marginLeft: 'auto',
    },
    boardBox: {
        paddingTop: '7%',
        alignItems: 'center',
        flex: 1
    }
})

export default SoloScreen;