var express = require('express');
var sprintController = require('../controler/sprintCtrl');

var app = express();


app.route('/sprint')
    .get(function(req, res) {
        sprintController.getAllSprints(function(result) { res.json(result); });
    })
    .post(function(req, res) {
        sprintController.addNewSprint(req.body, function(result) {
            res.json(result);
        })
    });

app.route('/sprint/:index')
    .get(function(req, res) {
        sprintController.getSprintDetails(req.params, function(result) {
            res.json(result);
        })
    })
    .put(function(req, res) {
        sprintController.editSprint(req.body, req.params.index, function(result) {
            res.json(result);
        })
    })
    .delete(function(req, res) {
        sprintController.deleteSprint(req.params.index, function(result) {
            res.json(results);
        })
    })

module.exports = app;