import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const StartButton = props => {
    return (
             <TouchableOpacity onPress={props.onClick}>
                    <View style={styles.container}>
                        <View style={{...styles.button, ...props.style}}>
                            <Text style={styles.text}>{props.children}</Text>
                        </View>
                    </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        shadowColor: 'white',
        shadowRadius: 10,
        shadowOpacity: 0.9,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        height: 60,
        borderWidth: 5,
        borderRadius: 30,
    },
    text: {
        fontSize: 22,
        color: Colors.secondary,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'avenir-heavy'
    },
    buttonBox: {
        height: 60,
        flexDirection: 'row',
    },
})

export default StartButton;