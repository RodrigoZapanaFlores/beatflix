const hbs = require("hbs");

hbs.registerPartials(__dirname + "/../views/partials");


hbs.registerHelper("isBeatsOwnedByUser", function (user, beats, options) {
    if (user.id == beats.author?.id || user.id == beats.author) {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
});