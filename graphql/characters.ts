import { gql } from '@apollo/client'

export const GET_ALL_CHARACTERS_QUERY = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        species
        gender
        image
      }
    }
  }
`
