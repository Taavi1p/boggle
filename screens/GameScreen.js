import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../constants/Colors';

const GameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Game Screen</Text>
            <View style={styles.board}>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>A</Text>
                    </View>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>B</Text>
                    </View>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>C</Text>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>D</Text>
                    </View>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>E</Text>
                    </View>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>F</Text>
                    </View>
                </View>
                <View style={styles.cubeRow}>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>G</Text>
                    </View>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>H</Text>
                    </View>
                    <View style={styles.cube}>
                        <Text style={styles.letter}>I</Text>
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
    board: {
        height: 300,
        width: 300,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 5,
    },
    cubeRow: {
        flexDirection: 'row'
    },
    cube: {
        height: 130,
        width: 130,
        borderRadius: 5,
        backgroundColor: '#e3d9d1',
    },
    letter: {
        fontSize: 100,
    }
})

export default GameScreen;