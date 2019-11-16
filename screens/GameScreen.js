import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const lettersArray = ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'e', 'e', 'e', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'i', 'i', 'j', 'j', 'k', 'k', 'l', 'l', 'l', 'm', 'm', 'n', 'n', 'o', 'o', 'o', 'o', 'o', 'p', 'p', 'p', 'q', 'r', 'r', 's', 's', 's', 't', 't', 't', 'u', 'u', 'u', 'u', 'v', 'v', 'w', 'x', 'y', 'z' ]

const GameScreen = props => {

    let randomLettersArray = [];

    for (i = 0; i < 16; i++) {
        randomLettersArray[i] = lettersArray[Math.floor(Math.random()*lettersArray.length)];
    }

    const toStart = () => {
        props.navigation.navigate('Start')
    }
    return (
        <View style={{flex: 1}}>
            <CustomHeader onClick={toStart}>cancel game</CustomHeader>
        <View style={styles.screen}>
            <View style={styles.timerBox}>
                <Image style={styles.timerImage} source={require('../assets/timer.png')} />
            </View>
            <View style={styles.boardBox}>
            <View style={styles.board}>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[0]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[1]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[2]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[3]}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[4]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[5]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[6]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[7]}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[8]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[9]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[10]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[11]}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[12]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[13]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[14]}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[15]}</Text>
                        </View>
                    </View>
                </View>
            </View>
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
        flexDirection: 'row'
    },
    timerImage:{
        width: 40,
        height: 40,
    },
    boardBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    board: {
        height: 320,
        width: 320,
        borderWidth: 10,
        borderColor: '#20a3bd',
        borderRadius: 2,
        backgroundColor: '#0c6a7d',
       justifyContent: 'space-evenly',
    },
    cubeRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cube: {
        height: 70,
        width: 70,
        borderRadius: 3,
        backgroundColor: '#e3d9d1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ring:{
        height: 60,
        width: 60,
        borderRadius: 60/2,
        backgroundColor: '#ede7e1',
    },
    letter: {
        fontSize: 40,
        textAlign: 'center'
    }
})

export default GameScreen;