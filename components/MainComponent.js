import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from'react-native-elements';

// create navigation between components
const MenuNavigator = createStackNavigator();  // returns Screen and Navigator
const HomeNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();

function MenuNavigatorScreen() {
  return (
    <MenuNavigator.Navigator initialRouteName="Menu" screenOptions={Main.screenOptions}>
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
  Home: {
    component: HomeNavigatorScreen,
    drawerLabel: 'Home',
    icon: 'home',
    iconSize: 24
  },
  About: {
    component: AboutNavigatorScreen,
    drawerLabel: 'About Us',
    icon: 'info-circle',
    iconSize: 26
  },
  Menu: {
    component: MenuNavigatorScreen,
    drawerLabel: 'Menu',
    icon: 'list',
    iconSize: 22
  },
  Contact: {
    component: ContactNavigatorScreen,
    drawerLabel: 'Contact Us',
    icon: 'address-card',
    iconSize: 19
  }
}

function CustomDrawerContentComponent(props) {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}
                    forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Image source={require('./images/logo.png')}
                    style={styles.drawerImage} />
          </View>
          <View style={{ flex: 3 }}>
            <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </ScrollView>
  )
}

function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator openByDefault 
                            drawerStyle={{ backgroundColor: 'white' }}
                            drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
                             >
      {Object.entries({ ...mapNameToScreens }).map(( [name, config] ) => (
        <MainNavigator.Screen name={name} 
                              component={config.component}
                              options={{
                                drawerLabel: config.drawerLabel,
                                drawerIcon: ({ tintColor }) => (
                                  <Icon name={config.icon} type="font-awesome" size={config.iconSize} color={tintColor} />
                                )
                              }} />
      ))}
    </MainNavigator.Navigator>
  );
}

class Main extends Component {
  // common options for stack navigators
  static screenOptions = 
    {
      headerStyle: {
          backgroundColor: "black"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
          color: "#fff"            
      },
      headerLeft: (navigation) => (
        <Icon name='menu' size={24} color='white' 
              onPress={() => navigation.toggleDrawer()} />
      )  
    };

  render() {
    return (
      <SafeAreaProvider> 
        <NavigationContainer>
          <MainNavigatorScreen />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

// styles should be defined at the bottom
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: 'black',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 20,
    width: 40,
    height: 30
  }
});

export default Main;