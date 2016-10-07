module.exports = function(app){
    var employees = require('./controllers/employees');
    app.get('/employees', employees.findAll);
    app.get('/details/:id', employees.findById);
    app.post('/details', employees.add);
    app.put('/details/:id', employees.update);
    app.delete('/employees/:id', employees.delete);
    app.get('/import', employees.import);
}

