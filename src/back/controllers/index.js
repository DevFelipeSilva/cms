const cmsRouter = require('express').Router()

cmsRouter.get('/panel', async (req, res) => {
    res.render('html/cms/examples/pages/login')
    res.end()
})

cmsRouter.get('/cases', async (req, res) => {
    res.render('cases')
	res.end()
})

cmsRouter.get('/index', (req, res) => {
    res.render('index')
    res.end()
})

cmsRouter.get('/contato', async (req, res) => {
    res.render('contato')
	res.end()
})

cmsRouter.get('/material', async (req, res) => {
    res.render('material')
	res.end()
})

cmsRouter.get('/noticias', async (req, res) => {
    res.render('noticias')
	res.end()
})

cmsRouter.get('/presentation', async (req, res) => {
    res.render('presentation')
	res.end()
})

cmsRouter.get('/servicos', async (req, res) => {
    res.render('servicos')
	res.end()
})

cmsRouter.get('/sobre', async (req, res) => {
    res.render('sobre')
	res.end()    
})

cmsRouter.get('/template', async (req, res) => {
    res.render('template')
	res.end()
})

module.exports = cmsRouter