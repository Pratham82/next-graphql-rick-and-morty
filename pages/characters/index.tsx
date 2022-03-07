import { useQuery } from '@apollo/client'
import { useState } from 'react'
import Loader from '../../public/svg/Loader'
import { GET_ALL_CHARACTERS_QUERY } from '../../graphql/characters'
import { CharacterListVars, CharactersListData } from '../../types'

const CharacterList: React.FC = () => {
  const [page, setPage] = useState(1)

  const { loading, error, data } = useQuery<
    CharactersListData,
    CharacterListVars
  >(GET_ALL_CHARACTERS_QUERY, {
    variables: {
      page: page,
    },
  })

  const totalPages = data && Math.ceil(data.characters.info.count / 20)

  const arrayTotalPages = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1)

  return (
    <div className="bg-slate-200">
      <h1 className="text-center text-3xl">Rick and Morty </h1>
      <h2 className="text-center text-2xl">Characters</h2>
      <p>
        Total pages &nbsp;
        {totalPages}
      </p>
      <div className="flex h-full flex-wrap justify-center">
        <div className="">{loading && <Loader />}</div>
        {data &&
          data.characters.results.map(({ id, name, image }) => {
            return (
              <div
                className="m-2 cursor-pointer rounded-md bg-white text-center shadow-md transition ease-in hover:scale-105 hover:shadow-none"
                key={id}
              >
                <img src={image} alt={name} className="rounded-t-md" />
                <p key={name} className="my-4 text-lg">
                  {name}
                </p>
              </div>
            )
          })}
      </div>
      <div className="flex">
        <div className="flex items-center">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="text-md text-md m-2 rounded-md bg-slate-400 py-4 px-6 text-lg text-white"
          >
            Previous
          </button>
        </div>
        <div className="h-18 flex overflow-scroll">
          {arrayTotalPages.map((p) =>
            p === page ? (
              <button
                className="m-2 rounded-md bg-slate-600 p-4 text-white"
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ) : (
              <button
                className="m-2 rounded-md bg-slate-300 p-4"
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            )
          )}
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="white m-2 rounded-md bg-slate-400 py-4 px-6 text-lg text-white"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterList

// export default function CharacterList({
//   name,
// }: CharacterListProps): JSX.Element {
//   return <div>Test</div>
// }
