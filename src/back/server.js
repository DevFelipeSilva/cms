const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const path = require ('path')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const ejs = require ('ejs')

class Server{
	constructor(){
		if (process.env.NODE_ENV !== 'production') {
			require('dotenv').config()
			process.env['URL'] =  process.env.URL+":"+process.env.PORT
		}

		const publicPath = path.resolve(__dirname, '..', '..') + '/public'
		const frontPath = path.resolve(__dirname, '..') + '/front'

		app.use('/public', express.static(publicPath))
		app.set('views', frontPath)
		        
		app.use(cors())

		app.use(helmet())

		// EJS Engine
		app.engine('html', ejs.renderFile)
		app.set('view engine', 'html')

		// Routes
		app.use('/', routes)

		// Default
		app.get('/', (req, res) => res.render('index'))

		// Error
		app.get('*', (req, res) => res.render('error'))

		app.listen(Number(process.env.PORT),String(process.env.HOST_NAME), () =>{
		    console.log("Aplicação rodando na porta ",process.env.PORT)
		    console.log("host: ",process.env.HOST_NAME || 'localhost')
		})
	}
}

module.exports = new Server()