import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground} from 'react-native';

const WinnerScreen = props => {

    const isPurple = props.navigation.getParam('isPurple')

    const toMenu = () => {
        props.navigation.navigate('Start')
    }

    const toNewGame = () => {
        props.navigation.navigate('OneOnOneMode')
    }
    console.log('the answer is' + isPurple)

    return (
        <View style={ isPurple ? styles.screen : styles.greenScreen}>
            <ImageBackground source={isPurple ? require('../assets/small-purple-background.jpg') : require('../assets/small-green-background.jpg')} style={styles.image}>
                <Text style={styles.title}>{ isPurple ? 'Purple wins' : 'Green wins' }</Text>
                <TouchableOpacity onPress={toNewGame}>
                    <View style={styles.biggerButton}>
                        <Text style={isPurple ? styles.biggerText : styles.greenBiggerText}>play again</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={toMenu}>
                    <View style={styles.smallerButton}>
                        <Text style={ isPurple ? styles.smallerText : styles.greenSmallerText}>menu</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#954ecf',
    },
    greenScreen: {
        flex: 1,
        backgroundColor: '#59bd73',
    },
    image: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 55,
        color: 'white',
        fontFamily: 'avenir-heavy',
        marginBottom: 70
    },
    biggerButton: {
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 20
    },
    biggerText: {
        color: '#954ecf',
        fontSize: 40,
        fontFamily: 'avenir-heavy',
    },
    greenBiggerText: {
        color: '#59bd73',
        fontSize: 40,
        fontFamily: 'avenir-heavy',
    },
    smallerButton: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 10
    },
    smallerText: {
        color: '#954ecf',
        fontSize: 30,
        fontFamily: 'avenir-heavy',
    },
    greenSmallerText: {
        color: '#59bd73',
        fontSize: 30,
        fontFamily: 'avenir-heavy',
    }
})

export default WinnerScreen;