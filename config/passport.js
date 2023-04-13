const JwtStratey = require ('passport-jwt').Strategy;
const ExtractJwt = require ('passport-jwt').ExtractJwt;
const Keys = require ('./keys');
const User = require ('../models/user');

module.exports = (passport) => {

    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = Keys.secretOrKey

    passport.use(new JwtStratey(opts, (jwt_payload, done) => {

        User.findById(jwt_payload.id, (err, user) => {
            
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done (null, false);
            }
            else {
                return done (null,false)
            }

        });
    
    }));
}