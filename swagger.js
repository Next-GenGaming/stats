const swaggerAutogen = require('swagger-Autogen')()

const doc = {
    info: {
        version: '1.1.10',
        title: 'Next-Gen Gaming Rust Stats',
        description: 'The stats api for the Player Ranks plugin for the rust game'
    },
    host: 'stats.next-gengaming.com',
    schemes: 'https',
    basePath:'/v1'
}

const outputFile = './swagger_output.json'
const endpointsFile = ['./routes/api']

swaggerAutogen(outputFile, endpointsFile, doc)