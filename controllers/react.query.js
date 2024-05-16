// queryClient.js
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // Good to set false for mobile apps
        },
    },
});
