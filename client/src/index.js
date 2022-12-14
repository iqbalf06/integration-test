import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './context/UserContext';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from 'react-router-dom';

import Favicon from "./assets/Logo.svg"
const favicon = document.getElementById('idFavicon');
favicon.setAttribute('href', Favicon);

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();


root.render(
  <React.StrictMode>
    <UserContextProvider>
      {/* client */}
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>
);
