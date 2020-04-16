import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import regularUser from './components/regularUser'
import Start from './components/start'
const screen = {
    Start:{
        screen: Start
    },
    HomeRU:{
        screen:regularUser
    }
}

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);