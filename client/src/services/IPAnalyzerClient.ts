import { GraphQLClient } from 'graphql-request'

const url = import.meta.env.VITE_IP_ANALYZER_ENDPOINT

export const IPAnalyzerClient = new GraphQLClient(url, { timeout: 2000 })
