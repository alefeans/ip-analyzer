import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Score {
    ip: String!,
    ipVersion: Int!,
    isPublic: Boolean!,
	  country: String!,
	  reports: Int!,
	  isp: String!,
	  usageType: String!,
	  domain: String!,
	  riskScore: Int!,
  }

  type Query {
    score(ip: String!): Score
  }
`)
