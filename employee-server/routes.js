module.exports = function(app){
    var employees = require('./controllers/employees');
    app.get('/employees', employees.findAll);
    app.get('/details/:id', employees.findById);
    app.post('/employees', employees.add);
    app.put('/employees/:id', employees.update);
    app.delete('/employees/:id', employees.delete);
    app.get('/import', employees.import);
}

