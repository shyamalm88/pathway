var mongoose = require('mongoose');
var plugin = require('mongoose-createdat-updatedat');
var Schema = mongoose.Schema;
var SprintSchema = new Schema({
    sprintName: String,
    sprintDescription: String,
    sprintId: String,
    sprintKey: String,
    sprintCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sprintUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sprintAssignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

var options = {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
SprintSchema.plugin(plugin, options);

var Sprint = mongoose.model('Scrum', SprintSchema);

module.exports.findOne = function(index, callback) {
    Sprint.findById(index, function(err, result) {
        if (err) throw err;
        callback(result);
    });
};

module.exports.findAll = function(callback) {
    Sprint.find({}, function(err, result) {
        if (err) throw err;
        callback(result);
    })
}

module.exports.addNewIssue = function(body, callback) {
    var scrum = new Scrum({
        scrumName: body.SCRUM_NAME,
        scrumDescription: body.SCRUM_DESCRIPTION,
        scrumId: body.SCRUM_ID,
        scrumKey: body.SCRUM_KEY,
        scrumCreatedBy: body.SCRUM_CREATED_BY,
        scrumUpdatedBy: body.SCRUM_UPDATED_BY,
        scrumAssignedTo: body.SCRUM_ASSIGNED_TO,
    })

    sprint.save(function(err, result) {
        if (err) throw err;
        callback({
            message: "Successfully added Scrum",
            data: result
        });
    });

}

module.exports.editScrum = function(body, index, callback) {
    Sprint.findById(index, function(err, result) {
        if (err) throw err;
        if (!result) {
            callback({
                message: "Scrum with ID: " + index + " not found.",
            });
        }

        result.scrumName = body.SCRUM_NAME,
            result.scrumDescription = body.SCRUM_DESCRIPTION,
            result.scrumId = body.SCRUM_ID,
            result.scrumKey = body.SCRUM_KEY,
            result.scrumCreatedBy = body.SCRUM_CREATED_BY,
            result.scrumUpdatedBy = body.SCRUM_UPDATED_BY,
            result.scrumAssignedTo = body.SCRUM_ASSIGNED_TO,


            result.save(function(err, result) {
                if (err) throw err;
                callback({
                    message: "Successfully updated the Scrum",
                    data: result
                });
            });
    })
}

module.exports.deleteScrum = function(index, callback) {
    Sprint.remove({ _id: index }, function(err, result) {
        callback({
            message: "Successfully deleted the Issue",
            data: result
        });
    });
};