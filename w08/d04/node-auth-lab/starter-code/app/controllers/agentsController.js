var Agent = require('../models/agent');
var bcrypt = require('bcrypt')

// INDEX
function getAll(request,response){
  Agent.find(function(error, agents){
    if (error) response.json({message: 'There is no MI6, and there are no agents here.'})

    response.json({agents: agents});
  }).select('-unencryptedName');
}

// CREATE
function createAgent(request,response){
  var agent = new Agent(request.body);
  agent.save(function(error){
    if (error) response.json({message: "One cannot just create an agent. An agent must be trained."})

    response.json({agent: agent});
  });
}

// SHOW
function getAgent(request, response){
  var id = request.params.id;
  var name = request.params.name;
  var codename = request.params.codename;
  console.log(Agent)
  Agent.find({codename: codename}, function (error, agentList) {
    agentList.forEach(function (agent) {
      bcrypt.compare(name, agent.name, function (error, res) {
        if (res) {
          response.json({agent: agent})
        } else {
          response.json({message: 'You seem to be mistaken, we have no agent with that identity.'})
        }
      })
    })
  })
  //   agentList.findOne({codename: codename}, function (error, agent) {
  //     console.log("INSIDE FIND ONE")
  //   })
  // })
  // Agent.findOne({codename: codename},
  //               function (error, agent) {
  //                 console.log(name)
  //                 console.log(bcrypt.hashSync(name, 10))
  //     if (error) {
  //       response.json({message: 'You seem to be mistaken, we have no agent with that identity.'})
  //     } else {
  //       response.json({agent: agent})
  //     }

  // Agent.findById({_id: id}, function(error, agent){
  //   if (error) response.json({message: 'You seem to be mistaken, we have no agent with that identity.'})

  //   // response.json({agent: agent});
  // });
}

// UPDATE

function updateAgent(request, response){
  var id = request.params.id;

  Agent.findById({_id: id}, function(error, agent) {
    if (error) response.json({message: 'You seem to be mistaken, we have no agent with that identity.'})

    if(request.body.name) agent.name = request.body.name;
    if(request.body.codename) agent.codename = request.body.codename;

    agent.save(function(error) {
      if (error) response.json({message: "There seems to be some error in updating your agent."})

      response.json({message: 'Agent successfully updated.', agent: agent});
    });
  });
}

// DELETE

function removeAgent(request, response){
  var id = request.params.id;
  Agent.remove({_id: id}, function(error) {
    if (error) response.json({message: 'You seem to be mistaken, we have no agent with that identity.'})

    response.json({message: 'Agent has been successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createAgent: createAgent,
  getAgent: getAgent,
  updateAgent: updateAgent,
  removeAgent: removeAgent
}
