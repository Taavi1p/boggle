import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
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

            </View>
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