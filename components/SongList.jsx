import Link from 'next/link'

export default function SongList({ songs }) {
  return (
    <div className="flex items-center justify-center h-auto p-5 bg-gray-200">
    <div className="container">
    <h2 className="flex justify-center mb-2 font-sans font-bold">{songs.artist.name} Songs List</h2>
      <div className="flex justify-center">
        <div className="bg-white shadow-xl rounded-lg w-1/2">
         
          <ul className="divide-y divide-gray-300">
           <Link href="/song/[id]" as={`/song/${songs.id}`} passHref>
              <li key={songs.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                {songs.title}
              </li>
           </Link>
          </ul>

        </div>
      </div>
    </div>
  </div>
  )
}