import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

export default function Header(): JSX.Element {
  const links = ['Characters', 'Locations', 'Episodes']
  const { pathname } = useRouter()
  const isCurrentPath = (link: string) => {
    const currentLink = link.toLowerCase()
    const [, cp] = pathname.split('/')
    return currentLink === cp
  }

  return (
    <div className=" fixed z-10 w-screen border-b border-b-slate-400 bg-slate-400/50 py-4 shadow-md backdrop-blur-2xl ">
      <h1 className=" text-center text-3xl font-semibold text-slate-600 ">
        Rick and Morty Fandom
      </h1>
      <nav className="text text-slate-00 flex list-none justify-center pt-4 text-lg">
        {links.map((link, i) => (
          <li
            key={i}
            className={classNames(`px-4 py-2`, {
              'rounded-md bg-slate-500 font-medium text-white':
                isCurrentPath(link),
            })}
          >
            <Link href={`/${link.toLocaleLowerCase()}`}>{link}</Link>
          </li>
        ))}
      </nav>
    </div>
  )
}
