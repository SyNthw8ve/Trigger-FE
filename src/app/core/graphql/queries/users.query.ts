import gql from 'graphql-tag';

export const getUsers = 
gql`
    query {
        getUsers {
            name
            email
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