const passport = require('passport'); // gives express the idea how to handle auth
const GoogleStrategy = require('passport-google-oauth20').Strategy; // instruct passport how to auth our user with google Oauth
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    Proxy: true,
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id})
    if (existingUser) {
        done(null, existingUser);
    } else {
        const user = await new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
        }).save();
        done(null, user);

    }

}));
