import {createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,createSwitchNavigator,
    createMaterialTopTabNavigator
} from "react-navigation"
import WelcomePage from "../page/WelcomePage"
import HomePage from "../page/HomePage"
import DetailPage from "../page/DetailPage"




const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen :WelcomePage,
        navigationOptions:{
             header : null, //可以通过header设为null,来禁用StackNavigator的Navigation
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen :HomePage,
        navigationOptions:{
            header : null, //可以通过header设为null,来禁用StackNavigator的Navigation
        }
    },
    DetailPage: {
        screen :DetailPage,
        navigationOptions:{
            header : null, //可以通过header设为null,来禁用StackNavigator的Navigation
        }
    }

});




const switchNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,

},{
    navigationOptions:{
        header : null, //可以通过header设为null,来禁用StackNavigator的Navigation
    }
})


export default createAppContainer(switchNavigator);
