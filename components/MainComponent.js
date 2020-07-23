import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';

// create navigation between components
const MenuNavigator = createStackNavigator();

class Main extends Component {

  render() {
    return (
      <NavigationContainer>
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
      </NavigationContainer>
    );
  }
}

export default Main;