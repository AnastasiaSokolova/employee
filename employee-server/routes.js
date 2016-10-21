
module.exports = function(app){
    var employees = require('./controllers/employees');
    var validate  = require('express-validation');
    var validation = require('./validation/employee-form.js');
    app.get('/employees', employees.findAll);
    app.get('/details/:id', employees.findById);
    app.post('/employees', validate(validation), employees.add);
    app.put('/employees/:id', validate(validation), employees.update);
    app.delete('/employees/:id', employees.delete);
    app.get('/import', employees.import);
    app.get('/remove', employees.remove);
}

