import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation";
import Home from "./screens/Home"
import Events from "./screens/EventNearYou";
import Foods from "./screens/FoodNearYou";
import MakePost from "./screens/MakePost";


const screens = {
    Home: {
        screen: Home
    },
    Events: {
        screen: Events
    },
    Foods: {
        screen: Foods
    },
    MakePost: {
        screen: MakePost
    }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack);