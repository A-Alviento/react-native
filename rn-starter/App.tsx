import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  }, // where you place components
  {
    initialRouteName: "List", // tells navigator which component to show first
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
