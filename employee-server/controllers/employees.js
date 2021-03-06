var mongoose = require('mongoose'),
Employee = mongoose.model('Employee');

exports.remove = function(req, res) {
    Employee.remove({},function(err, result) {
        return res.send(result);
    });
};


exports.import = function(req, res){
  Employee.create(
   {
        id: 1,
        firstname: 'Jerald',
        lastname: 'Hardisty',
        age: 23,
        position: 'Junior Software Engineer',
        skill: 'LavaScript',
        language_level: 'B1',
        experience: 2
    },
    {
        id: 2,
        firstname: 'Rosy',
        lastname: 'Doolin',
        age: 27,
        position: 'Senior Software Engineer',
        skill: 'Python',
        language_level: 'C1',
        experience: 6
    },
    {
        id: 3,
        firstname: 'Barry',
        lastname: 'Hickey',
        age: 43,
        position: 'Software Engineer',
        skill: 'C++',
        language_level: 'B2',
        experience: 20
    },
    {
        id: 4,
        firstname: 'Hassie',
        lastname: 'Rosemond',
        age: 33,
        position: 'Testing Engineer',
        skill: 'Smoke Testing',
        language_level: 'B1+',
        experience: 5
    },
    {
        id: 5,
        firstname: 'Whitney',
        lastname: 'Kimble',
        age: 19,
        position: 'Junior Testing Engineer',
        skill: 'Regression testing',
        language_level: 'C1',
        experience: 1
    },
     {
        id: 6,
        firstname: 'Ida',
        lastname: 'Dougan',
        age: 33,
        position: 'Testing Engineer',
        skill: 'Smoke Testing',
        language_level: 'B1+',
        experience: 5
    },
    {
        id: 7,
        firstname: 'Euna',
        lastname: 'Viviani',
        age: 19,
        position: 'Junior Testing Engineer',
        skill: 'Regression testing',
        language_level: 'C1',
        experience: 1
    },
    {
        id: 8,
        firstname: 'Sanjuana',
        lastname: 'Rosa',
        age: 33,
        position: 'Testing Engineer',
        skill: 'Smoke Testing',
        language_level: 'B1+',
        experience: 5
    },
    {
        id: 9,
        firstname: 'Gerard',
        lastname: 'Arizmendi',
        age: 19,
        position: 'Junior Testing Engineer',
        skill: 'Regression testing',
        language_level: 'C1',
        experience: 1
    },
    {
        id: 10,
        firstname: 'Else',
        lastname: 'Ballantine',
        age: 33,
        position: 'Testing Engineer',
        skill: 'Smoke Testing',
        language_level: 'B1+',
        experience: 5
    },
    {
        id: 11,
        firstname: 'Marleen',
        lastname: 'Buntin',
        age: 19,
        position: 'Junior Testing Engineer',
        skill: 'Regression testing',
        language_level: 'C1',
        experience: 1
    },
    {
        id: 12,
        firstname: 'Julianne',
        lastname: 'Lippard',
        age: 19,
        position: 'Junior Testing Engineer',
        skill: 'Regression testing',
        language_level: 'C1',
        experience: 1
    },
    function (err) {
    if (err) return console.log(err);
    return res.send(202);
  });
};


exports.findAll = function(req, res){
  Employee.find({},function(err, results) {
      if(err) res.send(err);
      return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Employee.findOne({'id':id},function(err, result) {
      if(err) res.send(err);
      return res.send(result);
  });
};

exports.delete = function(req, res){
    var id = req.params.id;
    Employee.remove({'id': id},function(err, result) {
        if(err) res.send(err);
        return res.send({status: 200, msg: 'Success!'});
    });
};

exports.update = function(req, res) {
    Employee.findOne({'id': req.params.id}, function(err, employee) {
            if(err) res.send(err);
            employee.firstname = req.body.firstname;
            employee.lastname = req.body.lastname; 
            employee.age = req.body.age; 
            employee.position = req.body.position; 
            employee.skill = req.body.skill; 
            employee.language_level = req.body.language_level; 
            employee.experience = req.body.experience;
            employee.save(function(err) {
                if(err) res.send(err);
                res.send({ status: 200,  message: 'employee updated!' });
            });

        });
};

exports.add = function(req, res) {
   var employee = new Employee(req.body);
   employee.save(function(err) {
      if(err) res.send(err);
      res.json(employee);
    });
};
