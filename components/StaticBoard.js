import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const lettersArray = ['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'O', 'U', 'I', 'B', 'C', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'M', 'M', 'N', 'N', 'P', 'P', 'P', 'R', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'V', 'W', 'Y']
const vowels = ['A', 'E', 'O', 'U', 'I'];
const kaas = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Qu', 'R', 'S', 'T', 'V', 'W', 'Y'];

const StaticBoard = props => {
    const [randomLettersArray, setRandomLettersArray] = useState([]);
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
        setFirstRender(false);
    }
    return (
        <View style={styles.board}>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[0]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[1]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[2]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[3]}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[4]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[5]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[6]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[7]}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[8]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[9]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[10]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[11]}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[12]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[13]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[14]}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.cube}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{randomLettersArray[15]}</Text>
                        </View>
                    </LinearGradient>
                </View>
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
        borderRadius: 2,
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
    ring:{
        height: 60,
        width: 60,
        borderRadius: 60/2,
        backgroundColor: '#ede7e1',
        justifyContent: 'center',
    },
    letter: {
        fontSize: 42,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'avenir-heavy'
    }
})

export default StaticBoard;