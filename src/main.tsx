import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'
import TodoDetail from './components/tododetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/todos/:id' element={<TodoDetail/>} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);