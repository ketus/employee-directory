var path = require('path');

module.exports = function(app, config) {

    app.use('/api', require('../routes/employees'));

    app.get('*', function(req, res) {
        res.sendFile(path.join(config.rootPath, 'server', 'views', 'index.html'));
    });
};
