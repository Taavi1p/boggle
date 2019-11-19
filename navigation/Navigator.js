import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import GroupScreen from '../screens/GroupScreen';
import OneOnOneScreen from '../screens/OneOnOneScreen';
import RulesScreen from '../screens/RulesScreen';


const Navigator = createStackNavigator({
    Start: StartScreen,
    GroupMode:  GroupScreen,
    OneOnOneMode: OneOnOneScreen,
    Rules: RulesScreen,
},
{
    defaultNavigationOptions: {
        header: null
    }
})


export default createAppContainer(Navigator);