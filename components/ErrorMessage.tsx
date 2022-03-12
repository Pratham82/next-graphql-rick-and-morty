import { Error } from '../public/svg'

export default function ErrorMessage(): JSX.Element {
  return (
    <div className="rounded-md bg-white py-2 text-2xl text-red-500">
      <div className="flex scale-75 ">
        <Error />
        <span className="pl-3">Unable to Fetch Data</span>
      </div>
    </div>
  )
}
