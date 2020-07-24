import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

// create navigation between components
const MenuNavigator = createStackNavigator();
const HomeNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();
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

function ContactNavigatorScreen() {
  return (
    <ContactNavigator.Navigator 
                            screenOptions={{
                              headerStyle: {
                                  backgroundColor: "black"
                              },
                              headerTintColor: "#fff",
                              headerTitleStyle: {
                                  color: "#fff"            
                              }
                            }}>
      <ContactNavigator.Screen name="Contact" component={Contact} />
    </ContactNavigator.Navigator>
  );
}

function AboutNavigatorScreen() {
  return (
    <AboutNavigator.Navigator 
                            screenOptions={{
                              headerStyle: {
                                  backgroundColor: "black"
                              },
                              headerTintColor: "#fff",
                              headerTitleStyle: {
                                  color: "#fff"            
                              }
                            }}>
      <AboutNavigator.Screen name="About" component={About} />
    </AboutNavigator.Navigator>
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
      <MainNavigator.Screen name="About" component={AboutNavigatorScreen}
                            options={{ 
                              title: 'About Us',
                              drawerLabel: 'About Us'
                            }} />
      <MainNavigator.Screen name="Menu" component={MenuNavigatorScreen}
                            options={{ 
                              title: 'Menu',
                              drawerLabel: 'Menu'
                            }} />
      <MainNavigator.Screen name="Contact" component={ContactNavigatorScreen}
                            options={{ 
                              title: 'Contact Us',
                              drawerLabel: 'Contact Us'
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