import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import VLlimitedPage from "./screens/VLlimited_page";
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
  VLlimitedPage: {
    screen: VLlimitedPage,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);
