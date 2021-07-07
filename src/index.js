import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_HASURA_SERVER_URI,
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_HASURA_SECRET
  },
  cache: new InMemoryCache(),
})


ReactDOM.render(
  <ApolloProvider client={client}>
  <Auth0Provider
    domain={process.env.REACT_APP_0AUTH_DOMAIN}
    clientId={process.env.REACT_APP_0AUTH_CLIENTID}
    redirectUri={process.env.REACT_APP_LOGIN_REDIRECT_URI}>
               <App />
  </Auth0Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
