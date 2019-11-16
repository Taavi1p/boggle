import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';

const lettersArray = ['a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'i', 'i', 'j', 'j', 'k', 'k', 'l', 'l', 'm', 'm', 'n', 'n', 'o', 'o', 'o', 'o', 'p', 'p', 'q', 'q', 'r', 'r', 's', 's', 't', 'u', 'u', 'u', 'u', 'v', 'v', 'w', 'w', 'x', 'y', 'y', 'z' ]

const GameScreen = props => {

    const randomLetter = lettersArray[Math.floor(Math.random()*lettersArray.length)];

    const toStart = () => {
        props.navigation.navigate('Start')
    }
    return (
        <View style={{flex: 1}}>
            <CustomHeader onClick={toStart}>cancel game</CustomHeader>
        <View style={styles.screen}>
            <View style={styles.board}>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLetter}</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    board: {
        height: 320,
        width: 320,
        borderWidth: 10,
        borderColor: '#20a3bd',
        borderRadius: 5,
        justifyContent: 'space-evenly',
        backgroundColor: '#0c6a7d'
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