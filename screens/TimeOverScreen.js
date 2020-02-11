import React from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import MainButton from '../components/MainButton';

const TimeOverScreen = props => {

    const isPurple = props.navigation.getParam('isPurple')

    const toMenu = () => {
        props.navigation.navigate('Start')
    }

    const toNewGame = () => {
        props.navigation.push('Solo')
    }

   return (
        <View style={{ flex: 1}}>
            <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.screen}>
                    <Text style={styles.scoreText}>Final Score</Text>
                    <Text style={styles.score}>120</Text>
                    <View style={styles.buttons}>
                        <MainButton onClick={toNewGame}>PLAY AGAIN</MainButton>
                        <MainButton onClick={toMenu}>HOME</MainButton>
                    </View>                
                </View>
           </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: '20%',
    },
    scoreText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
    },
    score: {
        textAlign: 'center',
        color: 'white',
        fontSize: 120,
        marginTop: 50,
    },
    buttons: {

    }
})

export default TimeOverScreen;