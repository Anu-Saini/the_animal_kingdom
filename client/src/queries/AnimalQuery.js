import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query Animals {
    animals {
      _id
      animalName
      otherName
      classification
      family
      age
      foods
      population
      image
      threats
      location
      description
      submitBy
      submitOn
    }
  }
`;

export const LOGIN_QUERY = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        userName
        email
      }
    }
  }
`;

export const NEW_USER = gql`
  mutation Mutation($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      user {
        _id
      }
    }
  }
`;

export const NEW_ANIMAL = gql`
  mutation Mutation(
    $animalName: String!
    $otherName: String!
    $classification: String!
    $family: String!
    $age: String!
    $foods: String!
    $population: String!
    $threats: String!
    $description: String!
    $submitBy: String!
    $image: [String!]
    $location: [String!]
  ) {
    addAnimal(
      animalName: $animalName
      otherName: $otherName
      classification: $classification
      family: $family
      age: $age
      foods: $foods
      population: $population
      threats: $threats
      description: $description
      submitBy: $submitBy
      image: $image
      location: $location
    ) {
      _id
      animalName
    }
  }
`;

export const ANIMAL_BY_USER = gql`
  query Animal($animalId: String!) {
    animal(animalId: $animalId) {
      _id
      animalName
      otherName
      classification
      family
      age
      foods
      population
      image
      threats
      location
      locationmap
      description
      submitBy
      submitOn
    }
  }
`;

export const DELETE_ANIMAL = gql`
  mutation DeleteAnimal($animalId: ID!) {
    deleteAnimal(animalId: $animalId) {
      _id
      animalName
      otherName
      classification
      family
      age
      foods
      population
      image
      threats
      location
      locationmap
      description
      submitBy
      submitOn
    }
  }
`;

export const UPDATE_ANIMAL = gql`
  mutation UpdateAnimal(
    $updateAnimalId: ID!
    $animalName: String!
    $otherName: String!
    $classification: String!
    $family: String!
    $age: String!
    $foods: String!
    $population: String!
    $threats: String!
    $description: String!
    $submitBy: String!
    $image: [String!]
    $location: [String!]
  ) {
    updateAnimal(
      id: $updateAnimalId
      animalName: $animalName
      otherName: $otherName
      classification: $classification
      family: $family
      age: $age
      foods: $foods
      population: $population
      threats: $threats
      description: $description
      submitBy: $submitBy
      image: $image
      location: $location
    ) {
      _id
      animalName
    }
  }
`;
