import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ArticlesContainer } from './containers/ArticlesContainer';

export const App = () => {
    const client = new ApolloClient({
        uri: 'http://localhost:4000/',
        cache: new InMemoryCache()
    })

    return (
        <ApolloProvider client={client} >
            <ArticlesContainer />
        </ApolloProvider>
    )
}