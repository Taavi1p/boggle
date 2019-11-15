import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors';

const RulesScreen = () => {
    return(
        <View style={styles.screen}>

        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        padding: 30,
        flex: 1,
        backgroundColor: Colors.primary,
    }
})

export default RulesScreen;