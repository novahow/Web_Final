import { gql } from '@apollo/client'

export const USERS_SUBSCRIPTION = gql`
    subscription {
        user {
            mutation
            data {
                id
                name
                age
                department
                FB
                IG
                birthday
                popularity
                photo
                gender
            }
        }
    }
`
export const LOGIN_USERS_SUBSCRIPTION = gql`
    subscription {
        loginUser {
            mutation
            data {
                id
                name
                passwd
                favorite
            }
        } 
    }
`