import * as React from "react";
import Home from "./screens/Home.jsx"
import Details from "./screens/Details.jsx"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { Linking, Pressable, Text } from "react-native";

const MainStack = createNativeStackNavigator();
export default function App() {

  const handleClick = async (url: string) => {
    const canOpen = await Linking.canOpenURL(url);
    if (canOpen) {
      Linking.openURL(url);
    } else {
       alert('No se puede abrir el navegador')
    }
  };

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
            options={{ 
              title: 'Unmatched Ladder 7',
              headerRight: () => (
                <Pressable onPress={()=>handleClick("https://www.umleague.net/competitions/20")} style={{backgroundColor:"#0d6efd", padding: 5}}>
                  <Text style={{ fontSize: 12, color: "white" }}>UM League</Text>
                </Pressable>
              ),
              headerLeft: () => (
                <Pressable onPress={()=>handleClick("https://gridbeast.gg/unmatched-rules-faq/")} style={{backgroundColor:"#0d6efd", padding: 5}}>
                  <Text style={{ fontSize: 12, color: "white" }}>FAQS</Text>
                </Pressable>
              ),
            }}
          />
          <MainStack.Screen
            name='Details'
            component={Details}
            options={{ 
              headerBackTitle: 'Volver', 
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
