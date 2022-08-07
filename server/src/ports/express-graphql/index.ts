import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schemas/ip-score'
import { score } from './resolvers/ip-score-resolver'
import config from '../../config/env-config'

const app = express()

app.use(cors({ origin: '*' }))

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: { score },
    graphiql: true,
  })
)

export const start = async () => {
  app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`)
  })
}
