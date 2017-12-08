var issueDA = require('../models/issueModel');

module.exports.getIssueDetails = function(params, callback) {
    issueDA.findOne(params.index, callback);
}

module.exports.getAllIssues = function(callback) {
    // console.log("Fetching all issues");
    issueDA.findAll(callback);
}

module.exports.addNewIssue = function(body, callback) {
    //console.log("Adding new book");
    issueDA.addNewIssue(body, callback);
}

module.exports.editIssue = function(body, index, callback) {
    //console.log("Editing Board");
    issueDA.editIssue(body, index, callback);
}

module.exports.deleteIssue = function(index, callback) {
    //console.log("Deleting board");
    issueDA.deleteIssue(index, callback);
}