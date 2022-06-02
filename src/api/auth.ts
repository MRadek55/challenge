import { gql } from '@apollo/client';

export const LOGIN_API = gql`
  mutation {
    loginWithEmail(email: "john@doe.com", password: "p4SSW0rd") {
      user {
        id
        email
        name
        facebookId
        googleId
        appleId
      }
      accessToken
      refreshToken
    }
  }
`;
