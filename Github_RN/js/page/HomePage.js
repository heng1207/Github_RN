

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createSwitchNavigator,
    createMaterialTopTabNavigator
} from "react-navigation"

import  PopularPage from "./PopularPage"
import  TrandingPage from "./TrandingPage"
import  FavoritePage from "./FavoritePage"
import  MyPage from "./MyPage"
import  {Images} from "../images"
import  NavigationUtil from "../navigator/NavigationUtil"



type Props = {};
export default class HomePage extends Component<Props> {

    _tabNavigator() {

        return createBottomTabNavigator({

            PopularPage:{
                screen :PopularPage,
                navigationOptions:{
                    tabBarLabel : "最热",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            source={focused ?  Images.Tab.OneActive : Images.Tab.One}
                            style={{ width: 25, height: 25 }}
                        />
                    )

                }
            },
            TrandingPage:{
                screen :TrandingPage,
                navigationOptions:{
                    tabBarLabel : "趋势",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            source={focused ?  Images.Tab.TwoActive : Images.Tab.Two}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }
            },
            FavoritePage:{
                screen :FavoritePage,
                navigationOptions:{
                    tabBarLabel : "收藏",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            source={focused ?  Images.Tab.OneActive : Images.Tab.One}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }
            },
            MyPage:{
                screen :MyPage,
                navigationOptions:{
                    tabBarLabel : "我的",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            source={focused ?  Images.Tab.TwoActive : Images.Tab.Two}
                            style={{ width: 25, height: 25 }}
                        />
                    )
                }
            }
        });

    }



    render() {

        NavigationUtil.navigation = this.props.navigation;
        const  Tab = this._tabNavigator();
        const AppContainer = createAppContainer(Tab);
        return  <AppContainer/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
