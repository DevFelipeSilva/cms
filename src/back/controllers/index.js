const cmsRouter = require('express').Router()

cmsRouter.get('/panel', async (req, res) => {
    res.render('html/cms/examples/pages/login')
    res.end()
})

cmsRouter.get('/cases', async (req, res) => {
    res.render('html/cases')
	res.end()
})

cmsRouter.get('/index', (req, res) => {
    res.render('html/index')
    res.end()
})

cmsRouter.get('/contato', async (req, res) => {
    res.render('html/contato')
	res.end()
})

cmsRouter.get('/material', async (req, res) => {
    res.render('html/material')
	res.end()
})

cmsRouter.get('/noticias', async (req, res) => {
    res.render('html/noticias')
	res.end()
})

cmsRouter.get('/presentation', async (req, res) => {
    res.render('html/presentation')
	res.end()
})

cmsRouter.get('/servicos', async (req, res) => {
    res.render('html/servicos')
	res.end()
})

cmsRouter.get('/sobre', async (req, res) => {
    res.render('html/sobre')
	res.end()    
})

cmsRouter.get('/template', async (req, res) => {
    res.render('html/template')
	res.end()
})

cmsRouter.get('/dashboard', async (req, res) => {
    res.render('html/cms/examples/dashboard')
    res.end()
})

cmsRouter.get('/cadastrarnoticia', async (req, res) => {
    res.render('html/cms/examples/forms/cadastro-noticias')
    res.end()
})
cmsRouter.get('/listarnoticia', async (req, res) => {
    res.render('html/cms/examples/tables/noticia-listar')
    res.end()
})
cmsRouter.get('/slideshow', async (req, res) => {
    res.render('html/testebanner')
    res.end()
})
cmsRouter.get('/cadastrarbanner', async (req, res) => {
    res.render('html/cms/examples/forms/cadastro-banners')
    res.end()
})
cmsRouter.get('/listarbanner', async (req, res) => {
    res.render('html/cms/examples/tables/banner-listar')
    res.end()
})


module.exports = cmsRouter