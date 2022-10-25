import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query Animals {
    animals {
      _id
      animalName
      otherName
      class
      family
      age
      foods
      population
      image
      threats
      location
      description
      submitBy {
        _id
        userName
        email
        password
      }
      submitOn
    }
  }
`;
