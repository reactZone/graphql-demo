const sites = require('../data/site').site;

exports.context = {
    add: (x, y) => x + y,
    minus: (x, y) => x - y,
    sites
}