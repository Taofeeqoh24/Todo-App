import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodoDetail from './components/tododetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
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