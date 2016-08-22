var path = require('path');

module.exports = function(app, config) {
    var index = path.join(config.rootPath, 'public', 'app', 'index.html');

    app.use('/api', require('../routes/employees'));

    app.get('*', function(req, res) {
        res.sendFile(config.index);
    });
};
