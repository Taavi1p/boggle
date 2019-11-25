import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const CustomHeader = props => {
    return (
        <View style={props.noColor ? styles.noColor : styles.header }> 
            <TouchableOpacity onPress={props.onClick} style={styles.backButton}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
        paddingTop: 20,

    },
    noColor: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20
    },
    buttonText: {
        fontSize: 25,
        color: 'white'
    }
})

export default CustomHeader;