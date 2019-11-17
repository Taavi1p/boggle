import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import StaticBoard from '../components/StaticBoard';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const lettersArray = ['A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'E', 'E', 'E', 'E', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'M', 'N', 'N', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'U', 'U', 'V', 'W', 'Y']

const GameScreen = props => {

    const [randomLettersArray, setRandomLettersArray] = useState([]);
    const isSoloMode = props.navigation.getParam('isSoloMode');
    const is1on1Mode = props.navigation.getParam('is1on1Mode');
    const isGroupMode = props.navigation.getParam('isSoloMode');
    const minutes = props.navigation.getParam('minutes');
    const [timer, setTimer] = useState('');
    const [firstRender, setFirstRender] = useState(true);

    let time = 120;
    const [board, setBoard] = useState(<Text>board failed to load</Text>);

    if (firstRender) {
        time = minutes * 60;
        console.log('solo ' + isSoloMode);
        console.log('1on1 ' + is1on1Mode);
        console.log('group ' + isGroupMode);
        for (i = 0; i < 16; i++) {
            randomLettersArray[i] = lettersArray[Math.floor(Math.random()*lettersArray.length)];
        };
        if (is1on1Mode || isGroupMode) {
            setBoard(<StaticBoard array={randomLettersArray} />);
            console.log('board');
        }
    }
    
    

    const toStart = () => {
        props.navigation.setParams({isSoloMode: false, is1on1Mode: false, isGroupMode: false})
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
                <Text style={styles.time}>{timer}</Text>
            </View>
            <View style={styles.boardBox}>
                {board}
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
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