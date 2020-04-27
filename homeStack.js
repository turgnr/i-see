import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import regularUser from './components/regularUser'
import tryStart from './components/tryStart'
import test from './components/test'

const screen = {
    Start:{
        screen: tryStart
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