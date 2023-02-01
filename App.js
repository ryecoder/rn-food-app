import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SeachScreen";
import ResultScreen from "./src/screens/ResultScreen"

const navigation = createStackNavigator(
  {
    Search: SearchScreen,
    ResultScreen: ResultScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigation);
