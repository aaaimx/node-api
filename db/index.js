const { Client } = require('pg')
const connectionString =
  'postgres://admin:admin@0.0.0.0:5432/aaaimx_dev'

// String de conexion
const client = new Client({
  connectionString,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
})