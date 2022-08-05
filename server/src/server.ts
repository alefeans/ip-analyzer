import express from "express"
import { graphqlHTTP } from "express-graphql"
import { schema } from "./schemas/IPScore"
import { score } from "./resolvers/IPScoreResolver"
import cors from 'cors'

const app = express()

app.use(cors({ origin: '*' }))

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: { score },
    graphiql: true,
  })
)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)
})
