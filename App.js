import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GroupsHomeScreen from './screens/groups/GroupsHomeScreen';
import PersonalHomeScreen from './screens/personal/PersonalHomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="PersonalHomeScreen" component={PersonalHomeScreen} />
		    <Tab.Screen name='GroupsHomeScreen' component={GroupsHomeScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
