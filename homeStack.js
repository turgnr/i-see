import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import regularUser from "./components/regularUser";
import test from "./components/test";
import tryStart from "./components/tryStart";
import splash from "./screens/Visually_limited_Page";
import landing from "./screens/landing_Page";
import map from "./screens/map_page";
import input from "./screens/input_Page";
import config from "./screens/config_Page";

const screen = {
  Splash: {
    screen: splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Config: {
    screen: config,
    navigationOptions: {
      headerShown: false,
    },
  },
  Landing: {
    screen: landing,
    navigationOptions: {
      headerShown: false,
    },
  },
  Map: {
    screen: map,
  },
  Input: {
    screen: input,
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
