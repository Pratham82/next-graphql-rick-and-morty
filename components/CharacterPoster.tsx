import Link from 'next/link'
import { CharacterPosterProps } from '../types'

export default function CharacterPoster({
  id,
  name,
  image,
}: CharacterPosterProps) {
  return (
    <Link href={`/characters/${id}`}>
      <div
        className="m-2 flex cursor-pointer items-center justify-center rounded-md bg-white py-4 text-center text-lg shadow-md transition ease-in hover:scale-105 hover:shadow-none "
        key={id}
      >
        <div className="mx-3 ">
          <img src={image} alt={name} className="w-full rounded-md" />
          <p className="bg-white pt-4">{name}</p>
        </div>
      </div>
    </Link>
  )
}
