const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
    //options for the google strategy
    callbackURL: '/auth/google/redirect',
    clientID: '915509958935-lfmah8cpse2lvileh3dja0u9scsvdc0r.apps.googleusercontent.com',
    clientSecret: 'M-HhaqfY8fRzOdqWGZ4n1xag',
}, () => {
    //passport callback function
})
)