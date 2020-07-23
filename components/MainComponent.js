import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

// create navigation between components
const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();

const MainNavigator = createDrawerNavigator();

function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator initialRouteName="Menu"
                                  screenOptions={{
                                    headerStyle: {
                                        backgroundColor: "#512DA8"
                                    },
                                    headerTintColor: "#fff",
                                    headerTitleStyle: {
                                        color: "#fff"            
                                    }
                                }}>
      <MenuNavigator.Screen name="Menu" component={Menu} />
      <MenuNavigator.Screen name="Dishdetail" component={Dishdetail} />
    </MenuNavigator.Navigator>
  );
}

function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName="Menu"
                              screenOptions={{
                                drawerBackgroundColor: '#D1C4E9'
                              }}
                              >
      {/* <MainNavigator.Screen name="Home" component={Home} /> */}
      <MainNavigator.Screen name="Menu" component={Menu} />
    </MainNavigator.Navigator>
  );
}

class Main extends Component {

  render() {
    return (
      <NavigationContainer>
        {/* <MenuNavigatorScreen /> */}
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}

export default Main;