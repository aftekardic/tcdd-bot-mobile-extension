import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import FromToScreen from './src/screens/FromToScreen';
import TimeScreen from './src/screens/TimeScreen';
import DateScreen from './src/screens/DateScreen';
import RunnerScreen from './src/screens/RunnerScreen';
import ResultScreen from './src/screens/ResultScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2089dc',
          },
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home Page'}}
        />
        <Stack.Screen
          name="FromToScreen"
          component={FromToScreen}
          options={{title: 'Set Your Cities'}}
        />
        <Stack.Screen
          name="DateScreen"
          component={DateScreen}
          options={{title: 'Set Your Date'}}
        />
        <Stack.Screen
          name="TimeScreen"
          component={TimeScreen}
          options={{title: 'Set Your Time'}}
        />
        <Stack.Screen
          name="RunnerScreen"
          component={RunnerScreen}
          options={{title: 'Runner'}}
        />

        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{title: 'Results'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
