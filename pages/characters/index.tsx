import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { FILTER_CHARACTER_BY_NAME_AND_ID } from '../../graphql'
import { CharactersListData, FindCharactersByName } from '../../types'
import Container from '../../components/Container'
import Header from '../../components/Header'
import CharacterList from '../../components/CharacterList'
import classNames from 'classnames'
import SearchBar from '../../components/SearchBar'

const Characters: React.FC = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  const { data, loading, error } = useQuery<
    CharactersListData,
    FindCharactersByName
  >(FILTER_CHARACTER_BY_NAME_AND_ID, {
    variables: {
      name: query,
      page: page,
    },
  })

  const totalPages = data && Math.ceil(data.characters.info.count / 20)

  const arrayTotalPages = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1)

  const setTopLevelQuery = (query: string) => setQuery(query)

  return (
    <Container>
      <Header />
      <SearchBar setTopLevelQuery={(text: string) => setTopLevelQuery(text)} />
      <CharacterList data={data} loading={loading} error={error} />
      <div className="my-6 flex justify-center">
        <div className="flex items-center">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="text-md text-md m-2 rounded-md bg-slate-400 py-4 px-6 text-lg text-white"
          >
            Previous
          </button>
        </div>
        <div className="h-18 mx-4 flex overflow-x-scroll ">
          {arrayTotalPages.map((p, i) => (
            <button
              className={classNames(`m-2 rounded-md p-4`, {
                'bg-slate-600 text-white': p === page,
                'bg-slate-300': p !== page,
              })}
              onClick={() => setPage(p)}
              key={i}
            >
              {p}
            </button>
          ))}
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
    </Container>
  )
}

export default Characters
