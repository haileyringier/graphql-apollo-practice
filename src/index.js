import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri:  'https://48p1r2roz4.sse.codesandbox.io',
  // https://48p1r2roz4.sse.codesandbox.io
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       query GetRates{
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <App client={client}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
