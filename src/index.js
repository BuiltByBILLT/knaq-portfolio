import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import App from './App';
import { NavContextProvider } from './contexts/NavContext.js';
import { UserContextProvider } from './contexts/UserContext.js';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />

    <NavContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </NavContextProvider>
  </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
