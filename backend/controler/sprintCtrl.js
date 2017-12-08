var sprintDA = require('../models/sprintModel');

module.exports.getSprintDetails = function(params, callback) {
    sprintDA.findOne(params.index, callback);
}

module.exports.getAllSprints = function(callback) {
    //console.log("Fetching all boards");
    sprintDA.findAll(callback);
}

module.exports.addNewSprint = function(body, callback) {
    //console.log("Adding new book");
    sprintDA.addNewSprint(body, callback);
}

module.exports.editSprint = function(body, index, callback) {
    //console.log("Editing Board");
    sprintDA.editSprint(body, index, callback);
}

module.exports.deleteSprint = function(index, callback) {
    //console.log("Deleting board");
    sprintDA.deleteSprint(index, callback);
}