import { GraphQLClient } from 'graphql-request'

// TODO make url dynamic
const url = 'http://localhost:8000/graphql';

export const IPAnalyzerClient = new GraphQLClient(url, { timeout: 2000 })
