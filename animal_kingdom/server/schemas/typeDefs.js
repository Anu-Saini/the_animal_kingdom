const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Class {
  _id :ID
 className: String
 animals : [Animals]!
}

type Animals {
  _id: ID
  animalName: String
  otherName: String
  family: String
  age: Int
  foods: String
  population : String
  image: [String]!
  threats: String
  location : [String]!
  description: String
  submitBy: User
  submitOn: String
  editedBy: User
  editedOn: String
  }

type User {
  _id: ID
 name: String
  email: String
  password: String
  Animal: [Animals]!
  
}
type Auth {
  token: ID!
  user: User
}

 type Query {
    classes: [Class]
    class(className:String!): Class
    animals: [Animals]
    animal(AnimalsId: ID!): Animals
    users: [User]!
    user(userId: ID!): User
    me: User
   }

  type Mutation {
    addAnimal(animalName: String!, otherName: String!, family: String!, age: Int!, foods: String! , population: String! ,  threats: String! , location: String!  ): Animals
    updateAnimal(id:ID!, otherName: String!, age: Int!, foods: String! , population: String! , threats: String! ,location: String!  ): Animals
        
    addUser(userName: String!, useremail: String!, password: String!): Auth
    login(useremail: String!, password: String!): Auth
      }`;

module.exports = typeDefs;


