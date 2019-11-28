import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';

import DynamicBoard from '../components/DynamicBoard';

const SoloScreen = props => {

    let time = 180;
    const [timer, setTimer] = useState();
    const [firstRender, setFirstRender] = useState(true);


    const toStart = () => {
        clearInterval(intervally);
        props.navigation.navigate('Start')
    }

    const tick = () => {
    
        let min = Math.floor(time / 60);
        let sec = time - (min * 60);
    
        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min === 0 && sec == '00'){
            console.log('clear');
            clearInterval(intervally);
        }

    
        setTimer(min.toString() + ':' + sec.toString());
        time--;
    }

    if(firstRender) {
        console.log('starting the timer');
        intervally = setInterval(tick, 1000);
        setFirstRender(false);
    }

    return (
        <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
            <CustomHeader noColor={true} onClick={toStart}>end game</CustomHeader>
            <View style={styles.timerBox}>
                <Image style={styles.timerImage} source={require('../assets/timer.png')} />
                <Text style={styles.time}>{timer ? timer : '3:00'}</Text>
            </View>
            <DynamicBoard />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

})

export default SoloScreen;