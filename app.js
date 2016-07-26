var Bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;
var pass = 'pakistan';

Bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) {
        return console.error(err);
    }

    Bcrypt.hash(pass, salt, function(err, hash) {
        if(err) {
            return console.error(err);
        }

        console.log(hash);

        Bcrypt.compare(pass, hash, function(err, isMatch) {
            if(err) {
                return console.error(err);
            }

            console.log('do they match?', isMatch);
        });

    });
});