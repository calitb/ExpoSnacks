import * as React from "react";
import Home from "./screens/Home.jsx"
import Details from "./screens/Details.jsx"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

const MainStack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider
      settings={{
        icon: (props) => <FontAwesome {...props} />,
      }}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Unmatched' }}
          />
          <MainStack.Screen
            name='Details'
            component={Details}
            options={{ headerBackTitle: 'Volver' }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
