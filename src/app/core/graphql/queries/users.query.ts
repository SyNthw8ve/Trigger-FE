import gql from 'graphql-tag';

export const getUsers = gql`
    query {
  getUsers {
    name
    email
    password
    availability {
      hours
    }
    projects {
      title
    }
    institution {
      description
    }
    hardSkills {
      name
    }
    languages {
      name
    }
    softSkills {
      score
      softskillId {
        name
      }
    }
  }
}
`