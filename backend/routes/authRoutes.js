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

    // SIGNUP =============================
    app.post('/signup', function(req, res, next) {
        USER.findOne({
            'local.email': req.body.email
        }, function(err, user) {
            if (err) {
                console.log(err)
            }

            if (user) {

            } else {
                var newUser = new USER();
                newUser.local.name = req.body.firstName + ' ' + req.body.lastName;
                newUser.local.email = req.body.email;
                newUser.local.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
                newUser.local.image = gravatar.url(req.body.email, {
                    s: '100',
                    r: 'x',
                    d: 'retro'
                }, true);


                newUser.save(function(err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send({
                        message: "Successfully added user",
                        user: result
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
                return res.send({
                    'message': 'Not a register user'
                });
            }

            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                return res.send({
                    'message': 'successfully logged in'
                });
            });
        })(req, res, next);
    });

    app.get('/backlog', isLoggedIn, function(req, res, next) {
        var user = req.user;
        //res.json(user);
        next();
    });
}


// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('auth/login');
}