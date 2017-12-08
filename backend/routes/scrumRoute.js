var express = require('express');
var scrumController = require('../controler/scrumCtrl');

var app = express();


app.route('/scrum')
    .get(function(req, res) {
        scrumController.getAllScrums(function(result) { res.json(result); });
    })
    .post(function(req, res) {
        scrumController.addNewScrum(req.body, function(result) {
            res.json(result);
        })
    });

app.route('/scrum/:index')
    .get(function(req, res) {
        scrumController.getScrumDetails(req.params, function(result) {
            res.json(result);
        })
    })
    .put(function(req, res) {
        scrumController.editScrum(req.body, req.params.index, function(result) {
            res.json(result);
        })
    })
    .delete(function(req, res) {
        scrumController.deleteScrum(req.params.index, function(result) {
            res.json(results);
        })
    })

module.exports = app;