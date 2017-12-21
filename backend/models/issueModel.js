var mongoose = require('mongoose');
var plugin = require('mongoose-createdat-updatedat');
var Schema = mongoose.Schema;
var IssueSchema = new Schema({
    issueName: String,
    issueDescription: String,
    issueId: String,
    issueLabel: String,
    issueAttachments: [String],
    issueKey: String,
    issueCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    issueUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    issueVersion: { type: mongoose.Schema.Types.ObjectId, ref: 'Version' },
    IssueEpic: { type: mongoose.Schema.Types.ObjectId, ref: 'Epic' },
    issuePriority: { type: mongoose.Schema.Types.ObjectId, ref: 'Priority' },
    issueComponent: { type: mongoose.Schema.Types.ObjectId, ref: 'Component' },
    issueAssignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    issueComments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    issueSprint: { type: mongoose.Schema.Types.ObjectId, ref: 'Sprint' },
    issueEstimate: { type: mongoose.Schema.Types.ObjectId, ref: 'Estimate' },
    issueStatus: { type: mongoose.Schema.Types.ObjectId, ref: 'Status' }
});

var options = {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
IssueSchema.plugin(plugin, options);

var Issue = mongoose.model('Issue', IssueSchema);

module.exports.findOne = function(index, callback) {
    Issue.findById(index, function(err, result) {
        if (err) throw err;
        callback(result);
    });
};

module.exports.findAll = function(callback) {
    Issue.find({}, function(err, result) {
        if (err) throw err;
        callback(result);
    })
}

module.exports.addNewIssue = function(body, callback) {
    var issue = new Issue({
        issueName: body.ISSUE_NAME,
        issueDescription: body.ISSUE_DESCRIPTION,
        issueId: body.ISSUE_ID,
        issueLabel: body.ISSUE_LABEL,
        issueKey: body.ISSUE_KEY,
        issueCreatedBy: body.ISSUE_CREATED_BY,
        issueUpdatedBy: body.ISSUE_UPDATED_BY,
        issueVersion: body.ISSUE_VERSION,
        issueEpic: body.ISSUE_EPIC,
        issuePriority: body.ISSUE_PRIORITY,
        issueComponent: body.ISSUE_COMPONENT,
        issueAssignedTo: body.ISSUE_ASSIGNED_TO,
        issueSprint: body.ISSUE_SPRINT,
        issueEstimate: body.ISSUE_ESTIMATE,
        issueStatus: body.ISSUE_STATUS
    })
    issue.issueComments.push(body.ISSUE_COMMENTS);
    issue.issueAttachments.push(body.ISSUE_ATTACHMENT);

    issue.save(function(err, result) {
        if (err) throw err;
        callback({
            message: "Successfully added Issue",
            data: result
        });
    });

}

module.exports.editIssue = function(body, index, callback) {
    Issue.findById(index, function(err, result) {
        if (err) throw err;
        if (!result) {
            callback({
                message: "Issue with ID: " + index + " not found.",
            });
        }

        result.issueName = body.ISSUE_NAME,
            result.issueDescription = body.ISSUE_DESCRIPTION,
            result.issueLabel = body.ISSUE_LABEL,
            result.issueUpdatedBy = body.ISSUE_UPDATED_BY,
            result.issueVersion = body.ISSUE_VERSION,
            result.issueEpic = body.ISSUE_EPIC,
            result.issuePriority = body.ISSUE_PRIORITY,
            result.issueComponent = body.ISSUE_COMPONENT,
            result.issueAssignedTo = body.ISSUE_ASSIGNED_TO,
            result.issueSprint = body.ISSUE_SPRINT,
            result.issueEstimate = body.ISSUE_ESTIMATE,
            result.issueStatus = body.ISSUE_STATUS


        result.save(function(err, result) {
            if (err) throw err;
            callback({
                message: "Successfully updated the Issue",
                data: result
            });
        });
    })
}

module.exports.deleteIssue = function(index, callback) {
    Issue.remove({ _id: index }, function(err, result) {
        callback({
            message: "Successfully deleted the Issue",
            data: result
        });
    });
}