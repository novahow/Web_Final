import { gql } from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $name: String!
    $age: Int!
    $department: String!
    $FB: String
    $IG: String
    $birthday: String
    $photo: String!
    $gender: Int!
  ) {
    createUser(
      data: {
        name: $name
        age: $age
        department: $department
        FB: $FB
        IG: $IG
        birthday: $birthday
        photo: $photo
        gender: $gender
      }
    ) {
      id
      name
      age
      department
      FB
      IG
      birthday
      popularity
      totalVoting
      photo
      gender
    }
  }
`

export const UPDATE_USER_POPULARITY_MUTATION = gql`
  mutation updateUserPopularity(
    $id: String!
    $stars: Int!
  ){
    updateUserPopularity(
      data: {
        id: $id
        stars: $stars
      }
    ) {
      id
      name
      age
      department
      FB
      IG
      birthday
      popularity
      totalVoting
      photo
      gender
    }
  }
`

export const MODIFY_USER_MUTATION = gql`
  mutation modifyUser(
    $id: String!
    $name: String
    $age: Int
    $department: String
    $FB: String
    $IG: String
    $birthday: String
    $popularity: Int
    $photo: String
    $totalVoting: Int
    $gender: Int
  ){
    modifyUser(
      data: {
        id: $id
        name: $name
        age: $age
        department: $department
        FB: $FB
        IG: $IG
        birthday: $birthday
        popularity: $popularity
        photo: $photo
        totalVoting: $totalVoting
        gender: $gender
      }
    ){
      id
      name
      age
      department
      FB
      IG
      birthday
      popularity
      photo
      totalVoting
      gender
    }
  }
`

export const CREATE_LOGIN_USER_MUTATION = gql`
  mutation createLoginUser(
    $name: String!
    $passwd: String!
  ) {
    createLoginUser(
      data: {
        name: $name
        passwd: $passwd
      }
    ){
      state
      data{
        id
        name
        passwd
        favorite
      }
    }
  }
`