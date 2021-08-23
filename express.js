require('dotenv').config()
const express = require('express')
const app = express()
const portNumber = Number.parseInt(process.env.APP_PORT || '', 10)
const sourceDir = 'dist'
const assetDir = 'dist/public'
app.use(express.static(sourceDir))
app.use(express.static(assetDir))
app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`)
  console.log(`Serving content from /${sourceDir}/`)
  console.log(`Serving asset from /${assetDir}/`)
})
