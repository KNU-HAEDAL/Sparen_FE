import { Routes } from './routes';
import { queryClient } from '@/apis/AxiosClient';
import { AuthProvider } from '@/provider/auth';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
