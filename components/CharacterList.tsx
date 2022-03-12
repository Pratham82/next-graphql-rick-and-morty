import CharacterPoster from './CharacterPoster'
import { Loader } from '../public/svg'
import { CharactersListData } from '../types'
import { Error } from '../public/svg/'
import ErrorMessage from './ErrorMessage'

type CharacterListProps = {
  loading: boolean
  error: object | undefined
  data: CharactersListData | undefined
}

export default function CharacterList({
  loading,
  data,
  error,
}: CharacterListProps) {
  return (
    <div className="flex h-auto flex-wrap justify-center ">
      <div>{loading && <Loader />}</div>
      <div>{error && <ErrorMessage />} </div>
      {data &&
        data.characters.results.map(({ id, name, image }) => (
          <CharacterPoster id={id} name={name} image={image} key={id} />
        ))}
    </div>
  )
}
