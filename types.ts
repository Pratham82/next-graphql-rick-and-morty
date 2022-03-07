export type Character = {
  __typename: string
  id: number
  name: string
  species: string
  gender: string
  image: string
}

export type CharactersListData = {
  characters: {
    info: {
      __typename: string
      count: number
    }
    results: Character[]
  }
}

export type CharacterListVars = {
  page: number
}
