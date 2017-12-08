var express = require('express');
var issueController = require('../controler/issueCtrl');

var app = express();


app.route('/issue')
    .get(function(req, res) {
        issueController.getAllIssues(function(result) { res.json(result); });
    })
    .post(function(req, res) {
        issueController.addNewIssue(req.body, function(result) {
            res.json(result);
        })
    });

app.route('/issue/:index')
    .get(function(req, res) {
        issueController.getIssueDetails(req.params, function(result) {
            res.json(result);
        })
    })
    .put(function(req, res) {
        issueController.editIssue(req.body, req.params.index, function(result) {
            res.json(result);
        })
    })
    .delete(function(req, res) {
        issueController.deleteIssue(req.params.index, function(result) {
            res.json(results);
        })
    })

module.exports = app;