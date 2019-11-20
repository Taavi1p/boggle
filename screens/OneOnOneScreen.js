import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import StaticBoard from '../components/StaticBoard';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const lettersArray = ['A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'E', 'E', 'E', 'E', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'M', 'N', 'N', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'U', 'U', 'V', 'W', 'Y']
let isPurple = false;

const OneOnOneScreen = props => {

    const [is, setIs] = useState(false);
    const [randomLettersArray, setRandomLettersArray] = useState([]);
    let time = 120;
    const [firstRender, setFirstRender] = useState(true);

    const togglePlayer = () => {
        setIs(!is);
        isPurple = !isPurple
    }

    if (firstRender) {
        for (i = 0; i < 16; i++) {
            randomLettersArray[i] = lettersArray[Math.floor(Math.random()*lettersArray.length)];
        }
    }

    const toStart = () => {
        clearInterval(intervally)
        props.navigation.navigate('Start');
    }

    const toWinner = () => {
        clearInterval(intervally)
        console.log('this should be the value ' + isPurple);
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
        setFirstRender(false);
    }

    console.log('--', isPurple)

    return (
        <View style={{ flex: 1}}>
            <TouchableWithoutFeedback onPress={togglePlayer} style={{flex: 1}}>
                <View style={isPurple ? styles.firstPlayer : styles.secondPlayer}>
                    <CustomHeader onClick={toStart}>end game</CustomHeader>
                    <View style={styles.screen}>
                        <View style={styles.boardBox}>
                            <StaticBoard array={randomLettersArray} />
                        </View>
                        <Text style={styles.clickText}>Click to switch turn</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
    firstPlayer: {
        backgroundColor: 'purple',
        flex: 1,
    },
    secondPlayer: {
        backgroundColor: '#009933',
        flex: 1,
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