var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var gravatar = require('gravatar');
var USER = require('../models/user');

module.exports = function(app, passport) {
    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/login');
    });

    // find user
    app.post('/finduser', function(req, res, next) {
            USER.findOne({
                'local.email': req.body.email
            }, function(err, user) {
                if (err) {
                    console.log(err)
                }
                if (user) {
                    res.send({
                        message: "details of " + req.body.email,
                        data: user
                    });
                }
            }).select("-local.password")
        })
        // SIGNUP =============================
    app.post('/signup', function(req, res, next) {
        USER.findOne({
            'local.email': req.body.user.email
        }, function(err, user) {
            if (err) {
                console.log(err)
            }

            if (user) {
                res.send({
                    message: "Already a user",
                    // data: result
                });
            } else {
                var newUser = new USER();
                newUser.local.displayName = (req.body.firstName + ' ' + req.body.lastName).toLowerCase();
                newUser.local.firstName = (req.body.firstName).toLowerCase();
                newUser.local.lastName = (req.body.lastName).toLowerCase();
                newUser.local.email = (req.body.user.email).toLowerCase();
                newUser.local.password = bcrypt.hashSync(req.body.user.password, bcrypt.genSaltSync(8), null);
                newUser.local.image = gravatar.url((req.body.user.email).toLowerCase(), {
                    s: '100',
                    r: 'x',
                    d: 'retro'
                }, true);


                newUser.save(function(err, result) {
                    if (err) throw err;
                    // console.log(result);
                    res.send({
                        message: "Successfully added user",
                        data: result
                    });
                });
            }

        })
    });

    // LOGIN ===============================
    app.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (info) {
                return res.send(info);
            }
            if (!user) {
                return res.status(401).send({
                    'message': 'Not a register user'
                });
            }

            req.logIn(user, function(err) {
                if (err) {
                    return res.status(500).json({
                        err: 'Could not log in user'
                    });
                }
                return res.status(200).send({
                    'message': 'successfully logged in',
                    data: user.local.email
                });
            });
        })(req, res, next);
    });
    app.get('/isloggedin', function(req, res, next) {
        res.send(req.isAuthenticated());
    });
}