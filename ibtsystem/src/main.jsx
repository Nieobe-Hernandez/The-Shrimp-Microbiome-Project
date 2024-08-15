import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AppRouter from './router/AppRouter.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

// Crear un QueryClient
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </React.StrictMode>
);