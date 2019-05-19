const express = require('express')
const bodyParse = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
type Query {
hello:String
}
`
const resolvers = {
	Query: {
		hello: () => 'hello work'
	}
}

const schema = makeExecutableSchema({ typeDefs, resolvers})
const app = express()

const PORT = process.env.PORT || 5000

app.use('/graphql', bodyParse.json(), graphqlExpress({
	schema
}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

//iniciar server
app.listen(PORT,
	() => console.log(`Server is running on port ${PORT}`))