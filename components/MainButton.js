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
        margin: 20,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    text: {
        fontSize: 30,
        color: Colors.primary,
    }
})

export default MainButton;