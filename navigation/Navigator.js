import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import StartScreen from '../screens/StartScreen';
import GameScreen from '../screens/GameScreen';
import RulesScreen from '../screens/RulesScreen';


const Navigator = createStackNavigator({
    Start: StartScreen,
    Game: GameScreen,
    Rules: RulesScreen,
},
{
    defaultNavigationOptions: {
        header: null
    }
})


export default createAppContainer(Navigator);