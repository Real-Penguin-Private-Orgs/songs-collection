

export default function ArtistPage({ artist }) {

  return (
    <div>
            {artist.name}
            {artist.album.name}
            {artist.songs.map((data) => (
              <li key={data.id}>
                    {data.title}
              </li>
            ))}
    </div>
  )
}

/**
* 
* @param {import('next').GetServerSidePropsContext} context
* @returns
*/
export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.BASE_URL}/api/artist/${context.params.id}`)
    const artist = await res.json()

    return {
        props: {
           artist
        }
    }
}