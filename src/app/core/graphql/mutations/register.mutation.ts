import gql from 'graphql-tag';

export const registerUser =
  gql`
    mutation 
      newUser($user: RegisterEmailUserDto!) {
        newUser(user: $user) {
          success
          description
        }
      }
  `