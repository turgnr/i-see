import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import regularUser from './components/regularUser'
import Start from './components/start'
import test from './components/test'

const screen = {
    Start:{
        screen: Start
    },
    HomeRU:{
        screen:regularUser
    },
    Test:{
        screen:test
    }
}

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);