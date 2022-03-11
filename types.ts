export type Character = {
  __typename: string
  id: string
  name: string
  species: string
  gender: string
  image: string
  status: string
  location: location
  origin: origin
}

export type CharacterDetail = {
  character: Character | undefined
}

export type origin = {
  __typename: string
  name: string
}

export type location = {
  __typename: string
  name: string
}

export type CharacterPosterProps = {
  id: string
  name: string
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

export type FindCharacterVars = {
  id: string | string[] | undefined
}

export type FindCharactersByName = {
  name: string | undefined
  page: number | undefined
}
