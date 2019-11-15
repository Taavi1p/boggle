import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const CustomHeader = props => {
    return (
        <View style={styles.header}> 
            <TouchableOpacity onPress={props.onClick} style={styles.backButton}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
    },
    backButton: {
    },
    buttonText: {
        fontSize: 25,
        color: 'white'
    }
})

export default CustomHeader;