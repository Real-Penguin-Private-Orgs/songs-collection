/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function ArtistCard({ artist }) {
  return (
    <div className="px-24 h-screen 0 bg-blue-700 flex flex-col justify-center items-center space-y-5">
    <div className="bg-white rounded-xl shadow-2xl">
       <div className="flex">
          <img src={artist.picture} alt={`${artist.name}-img-${artist.id}`} className="rounded-tl-xl w-60 object-cover" />
          <div className="p-8">
             <h3 className="font-bold text-2xl mb-5">{artist.name}</h3>
           <Link href="/artist/[id]" as={`/artist/${artist.id}`} passHref>
              <button className="mt-5 rounded-lg px-4 py-2 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300">
                  View {artist.name}
              </button>
           </Link>
           </div>
       </div>
       <footer className="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
         ID : {artist.id}
       </footer>
    </div>
    </div>
  )
}