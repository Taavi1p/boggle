import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../constants/Colors';

const GameScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.board}>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>A</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>B</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>C</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>D</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>G</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>F</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>E</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>H</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>J</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>K</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>L</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>M</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>N</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>O</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>P</Text>
                        </View>
                    </View>
                    <View style={styles.cube}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>E</Text>
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