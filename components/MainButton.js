import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const MainButton = props => {
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={props.onClick}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 40,
        shadowColor: 'grey',
        shadowRadius: 40,
        shadowOpacity: 0.5,
        elevation: 5
    },
    button: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    text: {
        fontSize: 25,
        color: Colors.primary,
        textAlign: 'center',
    }
})

export default MainButton;