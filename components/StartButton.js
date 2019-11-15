import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const StartButton = props => {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.button}>
                <Text style={styles.text}>START GAME</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        width: 250,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 30,
        color: Colors.primary,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})

export default StartButton;