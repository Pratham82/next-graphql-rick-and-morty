import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Container from '../../components/Container'
import Header from '../../components/Header'
import { GET_CHARACTER_BY_ID } from '../../graphql'
import { Loader, Back, Error } from '../../public/svg/'

import { CharacterDetail, FindCharacterVars } from '../../types'

export default function Character() {
  const router = useRouter()
  const {
    pathname,
    query: { id },
  } = useRouter()

  const { loading, error, data } = useQuery<CharacterDetail, FindCharacterVars>(
    GET_CHARACTER_BY_ID,
    {
      variables: {
        id,
      },
    }
  )

  console.log({ id, loading, error, data, pathname })

  return (
    <Container>
      <Header />
      <button
        className="text-md mb-4 rounded-md bg-slate-500 px-6 py-3 text-white shadow-md hover:shadow-sm active:translate-x-0"
        onClick={() => router.back()}
      >
        <div className="flex">
          <div className="mr-3 w-6">
            <Back />
          </div>
          <span>Characters</span>
        </div>
      </button>
      <div className="flex items-center justify-center">
        {loading && <Loader />}
      </div>
      <div>
        {error && (
          <div className="text-red-500">
            <div className="scale-75">
              <Error />
            </div>
            <p className="text-xl ">Unable to Fetch Data</p>
          </div>
        )}
      </div>
      {data && (
        <div
          className="flex flex-col justify-center rounded-xl bg-white p-6 shadow-lg transition ease-in-out hover:shadow-sm sm:flex-row
        "
        >
          <div className="flex justify-center">
            <img src={data.character?.image} alt="" className="rounded-md" />
          </div>
          <div className="p-6">
            <p>
              <span className="inline-block pr-4 text-2xl font-medium">
                Name
              </span>
              <span className="text-2xl text-slate-600">
                {data.character?.name}
              </span>
            </p>
            <p>
              <span className="inline-block pr-4 text-xl font-medium">
                Species
              </span>
              <span className="text-xl text-slate-600">
                {data.character?.species}
              </span>
            </p>
            <p>
              <span className="inline-block pr-4 text-xl font-medium ">
                Gender
              </span>
              <span className="text-xl text-slate-600 ">
                {data.character?.gender}
              </span>
            </p>
            <p>
              <span className="inline-block pr-4 text-lg font-medium ">
                Origin
              </span>
              <span className="text-lg text-slate-600 ">
                {data.character?.origin.name}
              </span>
            </p>
            <p>
              <span className="inline-block pr-4 text-lg font-medium ">
                Location
              </span>
              <span className="text-lg text-slate-600 ">
                {data.character?.location.name}
              </span>
            </p>
          </div>
        </div>
      )}
    </Container>
  )
}
