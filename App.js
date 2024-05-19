import { Provider } from 'react-redux';
import StackRoutes from './routes/stack';
import store from './controllers/redux/store';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './controllers/react.query';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
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
