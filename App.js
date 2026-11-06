import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#075e54' }, headerTintColor: '#fff' }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Contatos' }} />
          <Stack.Screen name="Chat" component={ChatScreen} options={({ route }) => ({ title: route.params.nome })} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
