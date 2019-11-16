import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Colors from '../constants/Colors';
import CustomHeader from '../components/CustomHeader';

const RulesScreen = props => {

    const toStart = () => {
        props.navigation.navigate('Start')
    }

    return(
        <View style={{flex: 1}}>
            <CustomHeader onClick={toStart}>Back</CustomHeader>
            <View style={styles.screen} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>main rules</Text>
                        <TouchableOpacity>
                            <Image style={styles.arrow} source={require('../assets/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.closedBottom}></View>
                    <View style={styles.openRules}></View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        padding: 30,
        flex: 1,
        backgroundColor: Colors.primary,
    },
    container: {
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'red',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 30,
        color: 'white'
    },
    arrow: {
        height: 30,
        width: 30,
    }
})

export default RulesScreen;