import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import { Provider } from 'react-native-paper';
import Home from "./Home";

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
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
