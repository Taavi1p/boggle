import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import StaticBoard from '../components/StaticBoard';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const lettersArray = ['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'O', 'U', 'I', 'B', 'C', 'C', 'D', 'F', 'G', 'G', 'H', 'H', 'J', 'K', 'L', 'M', 'M', 'M', 'N', 'N', 'P', 'P', 'R', 'R', 'S', 'S', 'T', 'T', 'T', 'V', 'W', 'Y']
const vowels = ['A', 'E', 'O', 'U', 'I'];
const kaas = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Qu', 'R', 'S', 'T', 'V', 'W', 'Y'];
const GameScreen = props => {

    const [randomLettersArray, setRandomLettersArray] = useState([]);
    let time = 120;
    const [timer, setTimer] = useState();
    const [firstRender, setFirstRender] = useState(true);

    if (firstRender) {
        for (i = 0; randomLettersArray.length < 16;) {
            let count = 0;
            let randomLetter = lettersArray[Math.floor(Math.random()*lettersArray.length)];
            for( j = 0; j < randomLettersArray.length; ++j){
                if(randomLettersArray[j] == randomLetter){
                    count++;
                    console.log('found the same letter in the array');
                }
            }
            if (count < 3){
                console.log('otsin seda ' + randomLetter)
                if (vowels.includes(randomLetter)){
                    let countV = 0;
                    for( e = 0; e < randomLettersArray.length; ++e){
                        if(vowels.includes(randomLettersArray[e])){
                            countV++;
                        }
                    }
                    console.log('thats how many vowels there was' + countV)
                    if (countV < 7) {
                        randomLettersArray[i] = randomLetter;
                        console.log('adding a vowel');
                        i++;
                    }   
                }

                else if (kaas.includes(randomLetter)) {
                    let countC = 0;
                    for( y = 0; y < randomLettersArray.length; ++y){
                        if(kaas.includes(randomLettersArray[y]))
                            countC++;
                    }
                    console.log('thats how many kaashäälikuid there was' + countC)
                    if (countC < 11) {
                        randomLettersArray[i] = randomLetter;
                        console.log('adding a kaashäälik');
                        i++;
                    }
                }
            }
            count = 0;
            countC = 0;
            countV = 0;
        }
    }
    
    

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