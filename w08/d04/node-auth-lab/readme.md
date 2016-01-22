---
title: Securing APIs with Token
type: Lab
duration: "1:25"
creator:
    name: Micah Rich
    city: LA
competencies: Server Applications
---

# Securing APIs with Token

## Introduction

This is a pair programming exercise.

The starter code contains CRUD code for agents and safehouses. First figure out what's going on in the starter code before adding your own code onto it. 

Your first task is to build out a real authorization – an agent will know both his/her codename _and_ their real name. Find an agent by their codename, then use bcrypt to compare the POSTed codename to their encrypted real name in the database. Respond with if they successfully authenticated or not. 

##### Bonus Challenge - Securing Safehouses

If you finish that, you and your partner are then in charge of securing & accessing the only thing more sensitive than our agents – our safehouses.

A starting point for the safehouse model & controller have been made for you. It should have a location, a codename, and a list of agent IDs that have access. Create an example safehouse to test your code against.

Now, the hard part – only agents on the list should have access to a given safehouse resource. You need to secure all safehouse information, and restrict which safehouses are shown only to the agents who are listed.

It might take some research and reading documentation, but you'll be forever in Her Majesty's debt.

## Exercise

- Build a new Safehouse resource, including a list of agent IDs
- Authenticate a user based on their agent IDs

#### Starter Code

In the `starter-code` folder is our MI6 API, without any auth or a safehouse resource.

#### Deliverable

You should have a JSON API that returns both agents & safehouses, and restricts access to safehouses based on agent IDs.

## Additional Resources

- [Faker](https://www.npmjs.com/package/faker), a library to generate fake information
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-jwt](https://www.npmjs.com/package/express-jwt)
