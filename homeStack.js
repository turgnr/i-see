import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import regularUser from "./components/regularUser";
import Start from "./components/start";
import test from "./components/test";
import tryStart from "./components/tryStart";
import splash from "./screens/Visually_limited_Page";

const screen = {
  Splash: {
    screen: splash,
    //navigationOptions: {
    //header: null,
    //},
  },
  Start: {
    screen: tryStart,
  },
  HomeRU: {
    screen: regularUser,
  },
  Test: {
    screen: test,
  },
};

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);
