const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport') 
const mongoose = require('mongoose') 
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.use(bodyParser.json());
// Cookie parsing needed for sessions
app.use(cookieParser());
// Session framework
//app.use(session({secret: 'notsosecretkey123'}));
app.use(session({
  secret: '9dj48bhkldhr48fj3890drkgb6739&#HF(&5j5&*^%',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

app.use(passport.initialize())
app.use(passport.session())

// Set up DB
const dbconfig = {
  useCreateIndex: true,
  useNewUrlParser: true
}
const db =  'mongodb://localhost/rh'
mongoose.connect(db, dbconfig)
mongoose.Promise = global.Promise

require('./auth_config')(passport)

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
