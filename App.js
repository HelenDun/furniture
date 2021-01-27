import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { QuizSelectionScreen } from './QuizSelection.js'
import { QuizScaledBackScreen } from './QuizScaledBack.js'
import { QuizOrnateScreen } from './QuizOrnate.js'
import { QuizResultScreen } from './QuizResult.js'

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {
    return <NavigationContainer>
      <Stack.Navigator initialRouteName="QuizSelection" screenOptions = {{ title: 'Furniture Quiz', headerTitleStyle: { textAlign: 'center' } }}>
        <Stack.Screen name="QuizSelection" component={QuizSelectionScreen}/>
        <Stack.Screen name="QuizScaledBack" component={QuizScaledBackScreen}/>
        <Stack.Screen name="QuizOrnate" component={QuizOrnateScreen}/>
        <Stack.Screen name="QuizResult" component={QuizResultScreen} initialParams = {{ points: 10 }}/>
      </Stack.Navigator>
    </NavigationContainer>
  }
}
