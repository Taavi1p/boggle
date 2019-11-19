import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DynamicBoard = props => {
    return (
        <View style={styles.board}>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                    <TouchableHighlight onPress={}>
                        <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                            <View style={styles.ring}>
                                <Text style={styles.letter}>{props.array[0]}</Text>
                            </View>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[1]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[2]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[3]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[4]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[5]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[6]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[7]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[8]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[9]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[10]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[11]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
            </View>
            <View style={styles.cubeRow}>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[12]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[13]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[14]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
                </View>
                <View style={styles.cube}>
                <TouchableHighlight onPress={}>
                    <LinearGradient colors={['#ffffff', '#e3d9d1', '#ab9e91']} style={styles.gradient}>
                        <View style={styles.ring}>
                            <Text style={styles.letter}>{props.array[15]}</Text>
                        </View>
                    </LinearGradient>
                    </TouchableHighlight>
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

export default DynamicBoard;