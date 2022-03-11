import CharacterPoster from './CharacterPoster'
import { Loader } from '../public/svg'
import { CharactersListData } from '../types'
import { Error } from '../public/svg/'

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
      <div>
        {error && (
          <div className="text-red-500">
            <div className="scale-75">
              <Error />
            </div>
            <p className="text-xl ">Unable to Fetch Data</p>
          </div>
        )}{' '}
      </div>
      {data &&
        data.characters.results.map(({ id, name, image }) => (
          <CharacterPoster id={id} name={name} image={image} key={id} />
        ))}
    </div>
  )
}
