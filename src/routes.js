const Router = require("express").Router()

const Produto = require("../models/Produto")

Router.get("/produtos", (req, res) => {
    Produto.findAll().then(response => {
        res.send(response)
    })
})

module.exports = Router;