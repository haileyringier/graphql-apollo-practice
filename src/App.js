import './App.css';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ExchangeRates from './ExchangeRates';


function App(props) {
  return (
    <ApolloProvider client={props.client}>
      <div className="App">
        <h1>GraphQL Practice with ApolloClient</h1>
        <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}

export default App;
