import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import GroupScreen from '../screens/GroupScreen';
import OneOnOneScreen from '../screens/OneOnOneScreen';
import RulesScreen from '../screens/RulesScreen';
import WinnerScreen from '../screens/WinnerScreen';
import SoloScreen from '../screens/SoloScreen';
import TimeOverScreen from '../screens/TimeOverScreen';


const Navigator = createStackNavigator({
    Start: StartScreen,
    Solo: SoloScreen,
    GroupMode: GroupScreen,
    OneOnOneMode: OneOnOneScreen,
    Rules: RulesScreen,
    Winner: WinnerScreen,
    TimeOver: TimeOverScreen,
},
{
    defaultNavigationOptions: {
        header: null
    }
})


export default createAppContainer(Navigator);