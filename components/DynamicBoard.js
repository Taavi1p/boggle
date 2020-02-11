import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const lettersArray = ['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'O', 'U', 'I', 'B', 'C', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'M', 'M', 'N', 'N', 'P', 'P', 'P', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'V', 'W', 'Y']
const vowels = ['A', 'E', 'O', 'U', 'I'];
const kaas = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Qu', 'R', 'S', 'T', 'V', 'W', 'Y'];

const DynamicBoard = props => {
    const [randomLettersArray, setRandomLettersArray] = useState([]);
    const [firstRender, setFirstRender] = useState(true);
    const [guessArray, setGuessArray] = useState([]);
    const [score, setScore] = useState(0);

    if (firstRender) {
        for (i = 0; randomLettersArray.length < 16;) {
            let count = 0;
            let randomLetter = lettersArray[Math.floor(Math.random() * lettersArray.length)];
            for (j = 0; j < randomLettersArray.length; ++j) {
                if (randomLettersArray[j] == randomLetter) {
                    count++;
                }
            }
            if (count < 3) {
                if (vowels.includes(randomLetter)) {
                    let countV = 0;
                    for (e = 0; e < randomLettersArray.length; ++e) {
                        if (vowels.includes(randomLettersArray[e])) {
                            countV++;
                        }
                    }
                    if (countV < 7) {
                        randomLettersArray[i] = randomLetter;
                        i++;
                    }
                }

                else if (kaas.includes(randomLetter)) {
                    let countC = 0;
                    for (y = 0; y < randomLettersArray.length; ++y) {
                        if (kaas.includes(randomLettersArray[y]))
                            countC++;
                    }
                    if (countC < 11) {
                        randomLettersArray[i] = randomLetter;
                        i++;
                    }
                }
            }
            count = 0;
            countC = 0;
            countV = 0;
        }
        setFirstRender(false);
    }


    const clickOnTile = letter => {
        guessArray.push(letter);
    }

    const emptyArray = () => {
        setGuessArray([]);
    }

    const submitWord = () => {
        //check word npm
        //add score
    }

    return (
        <View>
            <View style={styles.board}>
                <View style={styles.cubeRow}>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[0]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[0]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[1]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[1]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[2]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[2]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[3]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[3]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cubeRow}>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[4]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[4]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[5]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[5]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[6]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[6]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[7]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[7]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cubeRow}>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[8]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[8]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[9]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[9]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[10]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[10]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[11]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[11]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cubeRow}>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[12]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[12]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[13]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[13]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[14]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[14]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { clickOnTile(randomLettersArray[15]) }}>
                        <View style={styles.cube}>
                            <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                                <View style={styles.ring}>
                                    <Text style={styles.letter}>{randomLettersArray[15]}</Text>
                                </View>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.guessContainer}>
                <TouchableOpacity onPress={emptyArray} style={styles.decline}>
                    <Image style={styles.image} source={require('../assets/decline.png')} />
                </TouchableOpacity>
                <View style={styles.guessBox}><Text style={styles.guessText}>{guessArray}</Text></View>
                <TouchableOpacity onPress={submitWord} style={styles.accept}>
                    <Image style={styles.image} source={require('../assets/checkmark.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    board: {
        height: 320,
        width: 320,
        borderWidth: 10,
        borderColor: '#20a3bd',
        borderRadius: 5,
        backgroundColor: '#0c6a7d',
        justifyContent: 'space-evenly',
    },
    cubeRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cube: {
        height: 68,
        width: 68,
        borderRadius: 4,
        overflow: 'hidden',
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    ring: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#ede7e1',
        justifyContent: 'center',
    },
    letter: {
        fontSize: 42,
        textAlign: 'center',
        fontFamily: 'avenir-heavy'
    },
    guessContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    decline: {
        marginRight: 10
    },
    guessBox: {
        backgroundColor: 'black',
        width: 200,
        height: 40,
        borderRadius: 7,
        opacity: 0.2,
        paddingHorizontal: 5,
    },
    guessText: {
        fontSize: 30,
        color: 'white',
    },
    accept: {
        marginLeft: 10
    },
    image: {
        height: 30,
        width: 30
    }
})

export default DynamicBoard;