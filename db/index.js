const { Client } = require('pg')
const connectionString =
  'postgres://hello_django:hello_django@0.0.0.0:5433/hello_django_dev'

// String de conexion
const client = new Client({
  connectionString,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
})