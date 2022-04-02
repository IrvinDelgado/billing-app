import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import Login from './src/components/auth/Login';
import Home from './src/views/Home';
import SignUp from './src/components/auth/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} options={({ navigation }: any) => ({ 
          headerLeft:()=>null,
          headerRight:()=>(<Button title='logout' onPress={()=>{navigation.navigate('Login')}}/>)
        })}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
