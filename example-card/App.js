import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExampleCard from './app/screens/example-card';
import configureStore from "./app/store/store"
import { Provider } from 'react-redux';
import DynamicComponent from './app/components/dynamic-component';

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Seam Example Card">
            <Stack.Screen name="Seam Example Card" component={ExampleCard} />
            <Stack.Screen name="NewPage" >
              {() => <DynamicComponent __id="new-page" />}
            </Stack.Screen>
          </Stack.Navigator>
          <StatusBar style="auto" backgroundColor="#1c6fb8" />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
