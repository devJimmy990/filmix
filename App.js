import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackRoutes from './routes/stack';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './controllers/react.query';
import DrawerRoutes from './routes/drawer';
import { Provider } from 'react-redux';
import store from './controllers/redux/store';

export default function App() {
  return (
    // <View>
    //   <Text>dfsd</Text>
    // </View>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <StackRoutes />
          {/* <DrawerRoutes/> */}
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}
