import React, { Component } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Icon } from'react-native-elements';

// create navigation between components
const MenuNavigator = createStackNavigator();  // returns Screen and Navigator
const HomeNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();
const Stack = createStackNavigator();

function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator initialRouteName="Menu"
                                  screenOptions={Main.screenOptions}>
      <MenuNavigator.Screen name="Menu" component={Menu} />
      <MenuNavigator.Screen name="Dishdetail" component={Dishdetail} />
    </MenuNavigator.Navigator>
  );
}

function HomeNavigatorScreen() {
  return (
    <HomeNavigator.Navigator screenOptions={Main.screenOptions}>
      <HomeNavigator.Screen name="Home" component={Home} />
    </HomeNavigator.Navigator>
  );
}

function ContactNavigatorScreen() {
  return (
    <ContactNavigator.Navigator screenOptions={Main.screenOptions}>
      <ContactNavigator.Screen name="Contact" component={Contact} />
    </ContactNavigator.Navigator>
  );
}

function AboutNavigatorScreen() {
  return (
    <AboutNavigator.Navigator screenOptions={Main.screenOptions}>
      <AboutNavigator.Screen name="About" component={About} />
    </AboutNavigator.Navigator>
  );
}

const mapNameToScreens = {
  Home: HomeNavigatorScreen,
  About: AboutNavigatorScreen,
  Menu: MenuNavigatorScreen,
  Contact: ContactNavigatorScreen
}

function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator openByDefault drawerStyle={{ backgroundColor: 'white' }} >
      {Object.entries({ ...mapNameToScreens }).map(( [name, component] ) => (
        <MainNavigator.Screen name={name} component={component} />
      ))}
    </MainNavigator.Navigator>
  );
}

class Main extends Component {
  static screenOptions = {
    headerStyle: {
        backgroundColor: "black"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        color: "#fff"            
    }
  };

  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}

export default Main;