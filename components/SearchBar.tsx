import { useState } from 'react'
import { Close } from '../public/svg'

type SearchBarProps = {
  setTopLevelQuery: Function
}

export default function SearchBar({ setTopLevelQuery }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e
    setQuery(value)
    setTopLevelQuery(value)
  }

  const clearSearch = () => {
    setQuery('')
    setTopLevelQuery('')
  }

  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Find character"
        className="mb-4 rounded-md p-3 shadow-md outline-none"
      />
      <button
        className="ml-2 flex h-12 w-10 items-center justify-center rounded-md bg-white text-red-500 shadow-md hover:shadow-sm active:scale-95"
        onClick={clearSearch}
      >
        <Close />
      </button>
    </div>
  )
}
