import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation"
import home from "./Screens/home";
import events from "./Screens/eventNearYou";
import foods from "./Screens/foodNearYou";
import makePost from "./Screens/makePost";

const screens = {
    home: {
        screen: home
    },
    events: {
        screen: events
    },
    foods: {
        screen: foods
    },
    makePost: {
        screen: makePost
    }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);