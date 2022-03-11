import { gql } from '@apollo/client'

export const FILTER_CHARACTER_BY_NAME_AND_ID = gql`
  query ($name: String, $page: Int) {
    characters(filter: { name: $name }, page: $page) {
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
