import React from 'react';
import Layout from './Layout';
import Journeys from './pages/Journeys';
import { ThemeProvider } from '@material-ui/core/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import theme from './theme';
import { store } from '@/redux/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Journeys />
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
