var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var meta = require('./meta.json')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  META: JSON.stringify(meta)
})
