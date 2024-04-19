/* eslint-disable react/no-unstable-nested-components */
// In App.js in a new project

import * as React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products/Product';
import Details from './pages/Details/Detail';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductCard from './components/ProductCard/ProductCard';
import Loading from './components/Loading';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Favorites from './pages/favorites/Favorites';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {backgroundColor: '#2A59FE'},
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>
                E-Market
              </Text>
            </View>
          ),
        }}
        name="ProductScreen"
        component={Products}
      />
      <Stack.Screen
        options={{
          title: 'E-Market',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#2A59FE',
          },
        }}
        name="DetailsScreen"
        component={Details}
      />
    </Stack.Navigator>
  );
};

function App({}) {
  return (
    //  <Provider store={Store}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="ProductsPage"
          component={ProductStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/home.png')}
                style={{width: 38, height: 35, marginTop: 20}}
              />
            ),
            title: '',
            headerStyle: {
              backgroundColor: '#2A59FE',
            },
          }}
        />
        <Tab.Screen
          name="CartPage"
          component={Cart}
          options={{
            tabBarBadge: 3,
            title: '',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/cart.png')}
                style={{width: 45, height: 40, marginTop: 20}}
              />
            ),
            headerStyle: {
              backgroundColor: '#2A59FE',
            },
            headerTintColor: 'white',
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: '',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/star.png')}
                style={{width: 43, height: 40, marginTop: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            tabBarIcon: ({color, size}) => (
              <Image
                source={require('./assets/user.png')}
                style={{width: 37, height: 39, marginTop: 20}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

export default App;
