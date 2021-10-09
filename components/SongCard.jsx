/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function SongCard({ song }) {
  return (
    <div className="shadow-md rounded-md overflow-hidden" style={{ width: '300px' }}>

      <img  src={song.album.picture} 
            className="p-7" 
            width={300} 
            height={300} 
            alt="" 
      />

      <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{song.title}</h5>

          <p className="mb-4">
            {song.title} Information
            <ul className="divide-y divide-gray-300">
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  Artist: {song.artist.name}
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  Album: {song.album.name}
                </li>
                <li className="p-4 hover:bg-gray-50 cursor-pointer">
                  Year: {song.year}
                </li>
            </ul>
          </p>

          <Link href={song.url} passHref>
            <button
                className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                View {song.title}
            </button>
          </Link>
      </div>
  </div>
  )
}