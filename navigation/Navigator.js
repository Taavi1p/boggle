import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import StartScreen from '../screens/StartScreen';
import GameScreen from '../screens/GameScreen';


const Navigator = createStackNavigator({
    Start: StartScreen,
    Game: GameScreen,
},
{
    defaultNavigationOptions: {
        header: null
    }
})


export default createAppContainer(Navigator);