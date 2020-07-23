import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
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
                                        backgroundColor: "black"
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

function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator 
                            screenOptions={{
                              headerStyle: {
                                  backgroundColor: "black"
                              },
                              headerTintColor: "#fff",
                              headerTitleStyle: {
                                  color: "#fff"            
                              }
                            }}>
      <HomeNavigator.Screen name="Home" component={Home} />
    </HomeNavigator.Navigator>
  );
}

function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator openByDefault
                            drawerStyle={{
                                backgroundColor: 'white'
                              }}
                              >
      <MainNavigator.Screen name="Home" component={HomeNavigatorScreen}
                            options={{ 
                              title: 'Home',
                              drawerLabel: 'Home'
                            }} />
      <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen}
                            options={{ 
                              title: 'Menu',
                              drawerLabel: 'Menu'
                            }} />
    </MainNavigator.Navigator>
  );
}

class Main extends Component {

  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}

export default Main;