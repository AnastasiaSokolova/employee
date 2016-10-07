var mongoose = require('mongoose'),
Employee = mongoose.model('Employee');



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
    return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Employee.findOne({'id':id},function(err, result) {
    return res.send(result);
  });
};

exports.delete = function(req, res){
    var id = req.params.id;
    Employee.remove({'id': id},function(err, result) {
        return res.send({status: 200, msg: 'Success!'});
    });
};


exports.add = function() {};
exports.update = function() {};

