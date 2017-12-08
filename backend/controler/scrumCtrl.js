var scrumDA = require('../models/scrumModel');

module.exports.getScrumDetails = function(params, callback) {
    scrumDA.findOne(params.index, callback);
}

module.exports.getAllScrums = function(callback) {
    //console.log("Fetching all boards");
    scrumDA.findAll(callback);
}

module.exports.addNewScrum = function(body, callback) {
    //console.log("Adding new book");
    scrumDA.addNewScrum(body, callback);
}

module.exports.editScrum = function(body, index, callback) {
    //console.log("Editing Board");
    scrumDA.editScrum(body, index, callback);
}

module.exports.deleteScrum = function(index, callback) {
    //console.log("Deleting board");
    scrumDA.deleteScrum(index, callback);
}