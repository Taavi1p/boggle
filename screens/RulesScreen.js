import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import CustomHeader from '../components/CustomHeader';

const RulesScreen = props => {

    const [isMainRulesOpen, setIsMainRulesOpen] = useState(false);
    const [isScoringOpen, setIsScoringOpen] = useState(false);
    const [is1on1Open, setIs1on1Open] = useState(false);
    const [isGroupOpen, setIsGroupOpen] = useState(false);

    const toStart = () => {
        props.navigation.navigate('Start')
    }

    let mainRulesContent = <Text style={styles.rulesText}>
        Boggle is a popular word game for any number of players.
        Players have usually 2 or 3 minutes to find as many words on the grid as they can, according to the following rules

        The letters must be connected as a chain, where the next letter is connected vertically, horizontally or diagonally to the last one.
        Words should contain at least three letters.
        No letter cube may be used more than once within a single word.
    </Text>;
    let scoringContent = <View>
        <Text style={styles.rulesText}>The scoring is as follows:</Text>
        <Text style={styles.rulesText}></Text>
        <Text style={styles.rulesText}>1 or 2 Letters: no score</Text>
        <Text style={styles.rulesText}>3 Letters: 1 point</Text>
        <Text style={styles.rulesText}>4 Letters: 1 point</Text>
        <Text style={styles.rulesText}>5 Letters: 2 points</Text>
        <Text style={styles.rulesText}>6 Letters: 3 points</Text>
        <Text style={styles.rulesText}>7 Letters: 4 points</Text>
        <Text style={styles.rulesText}>8 or More Letters: 11 points</Text>
        <Text style={styles.rulesText}></Text>
        <Text style={styles.rulesText}>
    
        Full credit is awarded for both the singular and plural forms of a noun provided you list them as separate words. The same is true for all other derived forms (e.g. chew, chews, chewed, etc.).</Text>
        <Text style={styles.rulesText}></Text>
        <Text style={styles.rulesText}>you will not receive credit for proper names, abbreviations, contractions, hyphenated words, or foreign words that are not in an English dictionary. You will be penalised 1 point for each guess you make that is not recognised as a valid word.
        </Text></View> ;
    let oneOnOneContent = <Text style={styles.rulesText}>In one-on-one mode two players take turns saying a word. The clock hiddenly 
                            runs on the background, if the clock runs out on your turn you lose</Text>;
    let groupContent = <Text style={styles.rulesText}>The group game mode can be played with any number of players. Every players should have a piece of paper or a phone or anywhere to write down his words.
                        when the game starts everyone starts silently writing down words. When the time is up every player counts their score and the player with the most points wins.   </Text>
    let nothing = <View></View>;

    const changeMainRules = () => {
        setIsMainRulesOpen(!isMainRulesOpen)
    }
    const changeScoring = () => {
        setIsScoringOpen(!isScoringOpen)
    }
    const change1on1 = () => {
        setIs1on1Open(!is1on1Open)
    }
    const changeGroup = () => {
        setIsGroupOpen(!isGroupOpen)
    }

    return(
        <View style={{flex: 1, backgroundColor: Colors.primary}}>
            <CustomHeader onClick={toStart}>Back</CustomHeader>
            <ScrollView>
            <View style={styles.screen} >
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>main rules</Text>
                        <TouchableOpacity onPress={changeMainRules}>
                            <Image style={styles.arrow} source={require('../assets/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.openRules}>
                        {isMainRulesOpen ? mainRulesContent : nothing}
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>scoring</Text>
                        <TouchableOpacity onPress={changeScoring}>
                            <Image style={styles.arrow} source={require('../assets/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.openRules}>
                       {isScoringOpen ? scoringContent : nothing}
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>1-on-1 mode</Text>
                        <TouchableOpacity onPress={change1on1}>
                            <Image style={styles.arrow} source={require('../assets/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.openRules}>
                       {is1on1Open ? oneOnOneContent : nothing}
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>group mode</Text>
                        <TouchableOpacity onPress={changeGroup}>
                            <Image style={styles.arrow} source={require('../assets/arrow-down.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.openRules}>
                       {isGroupOpen ? groupContent : nothing}
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        padding: 10,
    },
    container: {
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#f0470a',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 30,
        color: 'white'
    },
    arrow: {
        height: 30,
        width: 30,
    },
    openRules: {
        backgroundColor: Colors.dark,
        padding: 10,
    },
    rulesText: {
        color: 'white',
        fontSize: 20
    }
})

export default RulesScreen;