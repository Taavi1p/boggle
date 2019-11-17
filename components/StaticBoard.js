import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const StaticBoard = props => {
    return (
        <View style={styles.board}>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[0]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[1]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[2]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[3]}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[4]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[5]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[6]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[7]}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[8]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[9]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[10]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[11]}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[12]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[13]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[14]}</Text>
                    </View>
                </View>
                <View style={styles.cube}>
                    <View style={styles.ring}>
                        <Text style={styles.letter}>{props.array[15]}</Text>
                    </View>
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
        textAlign: 'center',
    }
})

export default StaticBoard;