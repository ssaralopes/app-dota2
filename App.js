// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './componentes/screens/HomeScreen';
import HeroDetailsScreen from './componentes/screens/HeroScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#7e0000' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Dota 2' }} />
        <Stack.Screen name="Details" component={HeroDetailsScreen} options={{ title: 'Detalhes do Herói' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
