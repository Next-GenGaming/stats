const swaggerAutogen = require('swagger-Autogen')()
const outputFile = './swagger_output.json'
const endpointsFile = ['./routes/api']

swaggerAutogen(outputFile, endpointsFile)