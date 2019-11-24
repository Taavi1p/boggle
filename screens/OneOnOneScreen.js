import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback, ImageBackground} from 'react-native';

import StaticBoard from '../components/StaticBoard';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

let isPurple = false;
let firstRender = true;
const possibleTimes = [60, 90, 120];

const OneOnOneScreen = props => {

    const [is, setIs] = useState(false);
    const randomTime = possibleTimes[Math.floor(Math.random()*possibleTimes.length)];
    let time = randomTime;

    const togglePlayer = () => {
        setIs(!is);
        isPurple = !isPurple
    }

    const toStart = () => {
        clearInterval(intervally)
        time = randomTime;
        firstRender = true;
        props.navigation.navigate('Start');
    }

    const toWinner = () => {
        clearInterval(intervally);
        firstRender = true;
        console.log(firstRender)
        props.navigation.navigate({routeName: 'Winner', params: {isPurple: isPurple}})
    }

    const tick = () => {

        let min = Math.floor(time / 60);
        let sec = time - (min * 60);

        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min === 0 && sec == '00'){
            clearInterval(intervally);
            toWinner();
        }
        console.log(time)
        time--;
    }

    if(firstRender) {
        console.log('starting the timer');
        intervally = setInterval(tick, 1000);
        firstRender = false;
        console.log('action');
    }

    console.log('--', isPurple)

    return (
        <View style={{ flex: 1}}>
            <ImageBackground source={isPurple ? require('../assets/small-green-background.jpg') : require('../assets/small-purple-background.jpg')} style={{width: '100%', height: '100%'}} >
            <TouchableWithoutFeedback onPress={togglePlayer} style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <CustomHeader noColor={true} onClick={toStart}>end game</CustomHeader>
                    <View style={styles.screen}>
                        <View style={styles.boardBox}>
                            <StaticBoard />
                        </View>
                        <Text style={styles.clickText}>Click to switch turn</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    boardBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outline: {
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: Colors.primary,
    },
    clickText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'avenir-heavy',
        marginBottom: 30,
        textAlign: 'center',
    }
})

export default OneOnOneScreen;