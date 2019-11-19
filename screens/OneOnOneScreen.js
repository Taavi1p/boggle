import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import StaticBoard from '../components/StaticBoard';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const lettersArray = ['A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'E', 'E', 'E', 'E', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'K', 'K', 'L', 'L', 'M', 'M', 'M', 'N', 'N', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'U', 'U', 'V', 'W', 'Y']

const OneOnOneScreen = props => {

    const [randomLettersArray, setRandomLettersArray] = useState([]);
    let time = props.navigation.getParam('seconds');
    const [firstRender, setFirstRender] = useState(true);
    const [firstPlayer, setFirstPlayer] = useState(true);
    const [secondPlayer, setSecondPlayer] = useState(true);
    const [haha, setHaha] = useState(true);

    const togglePlayer = () => {
        console.log('works')
        setHaha(!haha)
    }

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

        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min === 0 && sec == '00'){
            console.log('clear');
            clearInterval(intervally);
        }
        time--;
    }

    if(firstRender) {
        console.log('starting the timer');
        intervally = setInterval(tick, 1000);
        setFirstRender(false);
    }

    return (
        <View style={{ flex: 1}}>
            <TouchableWithoutFeedback onPress={togglePlayer} style={{flex: 1}}>
                <View style={haha ? styles.firstPlayer : styles.secondPlayer}>
                    <CustomHeader onClick={toStart}>end game</CustomHeader>
                    <View style={styles.screen}>
                        <View style={styles.boardBox}>
                            {/* <Text style={styles.playerText}>{haha ? 'Player 1' : 'Player 2'}</Text> */}
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
    // playerText: {
    //     fontSize: 40,
    //     color: 'white',
    //     fontFamily: 'avenir-heavy',
    //     marginBottom: 30,
    //     marginTop: 'auto'
    // },
    clickText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'avenir-heavy',
        marginBottom: 30,
        textAlign: 'center',
    }
})

export default OneOnOneScreen;