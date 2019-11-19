import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import StaticBoard from '../components/StaticBoard';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const lettersArray = [['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'E', 'E', 'O', 'O', 'O','U', 'U', 'I', 'I',], 
['B', 'C', 'D', 'F', 'G', 'G', 'H', 'H', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'M', 'N', 'N', 'P', 'P', 'Q', 'R', 
'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'V', 'W', 'Y']]

const GameScreen = props => {

    const [randomLettersArray, setRandomLettersArray] = useState([]);
    let time = 120;
    const [timer, setTimer] = useState();
    const [firstRender, setFirstRender] = useState(true);

    if (firstRender) {
        for (i = 0; i < 16; i++) {
            randomLettersArray[i] = lettersArray[Math.floor(Math.random()*lettersArray.length)];
        }
    }
    
    

    const toStart = () => {
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

    return (
        <View style={{flex: 1}}>
            <CustomHeader onClick={toStart}>cancel game</CustomHeader>
        <View style={styles.screen}>
            <View style={styles.timerBox}>
                <Image style={styles.timerImage} source={require('../assets/timer.png')} />
                <Text style={styles.time}>{timer ? timer : '2:00'}</Text>
            </View>
            <View style={styles.boardBox}>
                <StaticBoard array={randomLettersArray} />
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primary,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})

export default GameScreen;